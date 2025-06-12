#!/usr/bin/env node
/* eslint-disable no-console */
"use strict"

/*
 * OneJS – oj (shadcn-style) CLI
 * A small utility for listing / installing premade UI components
 * shipped inside a <Assets/> Unity project folder.
 *
 * Commands:
 *   oj list                       – show available components inside tarball
 *   oj add <name … | all>         – install one or many components
 *   oj doctor                     – verify environment (Assets folder + tarball)
 *
 * Global flags:
 *   -y, --yes, --force            – skip overwrite prompts
 *   --dry                         – dry-run (no filesystem writes)
 *   --assets-dir <dir>            – override Assets directory auto-detection
 *   --tarball <file>              – override tarball filename (default premade-uis.tgz.bytes)
 */

const fs = require("fs")
const path = require("path")
const readline = require("readline")
const tar = require("tar")
const { Command } = require("commander")
const chalk = require("chalk")
const ora = require("ora")

const pkg = require("../package.json")

/* ─────────────────────────────── utils ─────────────────────────────── */

function findAssetsDir(startDir, explicit) {
    if (explicit) {
        if (fs.existsSync(explicit) && fs.statSync(explicit).isDirectory()) return explicit
        return null
    }
    let dir = startDir
    const { root } = path.parse(dir)
    while (dir !== root) {
        const probe = path.join(dir, "Assets")
        if (fs.existsSync(probe) && fs.statSync(probe).isDirectory()) return probe
        dir = path.dirname(dir)
    }
    return null
}

function findTarball(assetsDir, tarballName) {
    const stack = [assetsDir]
    while (stack.length) {
        const curr = stack.pop()
        for (const e of fs.readdirSync(curr, { withFileTypes: true })) {
            const p = path.join(curr, e.name)
            if (e.isDirectory()) {
                stack.push(p)
            } else if (e.isFile() && e.name === tarballName) {
                return p
            }
        }
    }
    return null
}

async function askYN(prompt) {
    return new Promise((resolve) => {
        const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
        rl.question(`${prompt} ${chalk.dim("[y/N]")} `, (ans) => {
            rl.close()
            resolve(/^(y|yes)$/i.test(ans.trim()))
        })
    })
}

/**
 * Return Set of top-level component folders inside tarball.
 */
async function scanComponents(tarPath) {
    const comps = new Set()
    await tar.t({
        file: tarPath,
        onentry: (entry) => {
            const p = entry.path
            if (!p.startsWith("comps/")) return
            const parts = p.split("/").filter(Boolean) // ["comps","button", ...]
            if (parts.length >= 2) comps.add(parts[1])
        },
    })
    return comps
}

/* ─────────────────────────────── commander ─────────────────────────────── */

const program = new Command()

program
    .name("oj")
    .description("OneJS premade UI component manager")
    .version(pkg.version, "-v, --version", "print version")

program
    .hook("preAction", (thisCmd, actionCmd) => {
        // Collect global opts and attach to actionCmd for convenience
        actionCmd._globalOpts = {
            yes: thisCmd.opts().yes || thisCmd.opts().force,
            dry: thisCmd.opts().dry,
            assetsDir: thisCmd.opts().assetsDir,
            tarballName: thisCmd.opts().tarball || "premade-uis.tgz.bytes",
        }
    })
    .option("-y, --yes", "skip confirmation prompts")
    .option("--force", "alias for --yes")
    .option("--dry", "dry-run – show actions only")
    .option("--assets-dir <dir>", "override Assets/ directory")
    .option("--tarball <file>", "override tarball filename (default premade-uis.tgz.bytes)")

/* ─────────────────────────────── list ─────────────────────────────── */

program
    .command("list")
    .description("list available components inside the tarball")
    .action(async function () {
        const { assetsDir, tarballName } = this._globalOpts
        const assets = findAssetsDir(process.cwd(), assetsDir) || findAssetsDir(__dirname, assetsDir)
        if (!assets) {
            console.error(chalk.red("Assets/ folder not found. Are you inside a Unity project?"))
            process.exit(1)
        }
        const tarPath = findTarball(assets, tarballName)
        if (!tarPath) {
            console.error(
                chalk.red(`Tarball '${tarballName}' not found under Assets/. Did you import the OneJS package?`)
            )
            process.exit(1)
        }
        const comps = await scanComponents(tarPath)
        console.log(chalk.bold(`Components in ${path.relative(process.cwd(), tarPath)}:`))
        comps.forEach((c) => console.log("  •", chalk.cyan(c)))
    })

/* ─────────────────────────────── doctor ─────────────────────────────── */

program
    .command("doctor")
    .description("check Assets directory and tarball presence")
    .action(async function () {
        const { assetsDir, tarballName } = this._globalOpts
        const spinner = ora("Checking environment").start()
        const assets = findAssetsDir(process.cwd(), assetsDir) || findAssetsDir(__dirname, assetsDir)
        if (!assets) {
            spinner.fail("Assets/ folder not found")
            process.exit(1)
        }
        const tarPath = findTarball(assets, tarballName)
        if (!tarPath) {
            spinner.fail(`Tarball '${tarballName}' not found under Assets/`)
            process.exit(1)
        }
        spinner.succeed("Environment OK")
        console.log(`Assets folder : ${chalk.green(path.relative(process.cwd(), assets))}`)
        console.log(`Tarball       : ${chalk.green(path.relative(process.cwd(), tarPath))}`)
    })

/* ─────────────────────────────── add ─────────────────────────────── */

program
    .command("add")
    .argument("<names...>", "component names to add, or 'all'")
    .description("add components into ./comps")
    .action(async function (names) {
        const { yes, dry, assetsDir, tarballName } = this._globalOpts
        const spinner = ora("Preparing").start()

        const assets = findAssetsDir(process.cwd(), assetsDir) || findAssetsDir(__dirname, assetsDir)
        if (!assets) {
            spinner.fail("Assets/ folder not found")
            process.exit(1)
        }
        const tarPath = findTarball(assets, tarballName)
        if (!tarPath) {
            spinner.fail(`Tarball '${tarballName}' not found`)
            process.exit(1)
        }

        const allComps = await scanComponents(tarPath)
        const targetAll = names.length === 1 && names[0] === "all"
        const targets = targetAll ? Array.from(allComps) : names

        // validate unknown comps
        const unknown = targets.filter((c) => !allComps.has(c))
        if (unknown.length) {
            spinner.fail(`Unknown component(s): ${unknown.join(", ")}`)
            process.exit(1)
        }

        const cwd = process.cwd()
        const compsRoot = path.join(cwd, "comps")
        fs.mkdirSync(compsRoot, { recursive: true })

        // conflict detect
        const NO_PROMPT = new Set(["LICENSE"])
        const conflicts = targets.filter(
            (comp) => !NO_PROMPT.has(comp) && fs.existsSync(path.join(compsRoot, comp))
        )
        spinner.stop()

        if (conflicts.length && !yes) {
            for (const c of conflicts) {
                const ok = await askYN(
                    `Overwrite existing ${chalk.yellow(`comps/${c}`)}? (backup your changes first)`
                )
                if (!ok) {
                    console.log(chalk.yellow("Aborted."))
                    process.exit(0)
                }
            }
        }

        if (dry) {
            console.log(chalk.green("Dry-run: would install"), targets.join(", "))
            process.exit(0)
        }

        const extractSpinner = ora("Extracting components").start()

        const filter = (p) => {
            if (!p.startsWith("comps/")) return false
            const [, comp] = p.split("/")
            return targetAll || targets.includes(comp)
        }

        try {
            await tar.x({ file: tarPath, cwd, gzip: true, filter })
            extractSpinner.succeed("Done.")
        } catch (err) {
            extractSpinner.fail("Extraction failed")
            console.error(err)
            process.exit(1)
        }
    })

/* ─────────────────────────────── go ─────────────────────────────── */

program.parseAsync().catch((err) => {
    console.error(err)
    process.exit(1)
})
