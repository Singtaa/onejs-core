#!/usr/bin/env node
"use strict"

const fs = require("fs")
const path = require("path")
const zlib = require("zlib")
const readline = require("readline")
const tar = require("tar")

/* ───────────── helpers ───────────── */

function findAssetsDir(startDir) {
    let dir = startDir
    const { root } = path.parse(dir)

    while (dir !== root) {
        const probe = path.join(dir, "Assets")
        if (fs.existsSync(probe) && fs.statSync(probe).isDirectory()) return probe
        dir = path.dirname(dir)
    }
    return null
}

function findTarball(assetsDir) {
    const stack = [assetsDir]

    while (stack.length) {
        const curr = stack.pop()
        for (const e of fs.readdirSync(curr, { withFileTypes: true })) {
            const p = path.join(curr, e.name)
            if (e.isDirectory()) stack.push(p)
            else if (e.isFile() && e.name === "premade-uis.tgz.bytes") return p
        }
    }
    return null
}

function askYN(prompt) {
    return new Promise(resolve => {
        const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
        rl.question(`${prompt} [y/N] `, ans => {
            rl.close()
            resolve(/^(y|yes)$/i.test(ans.trim()))
        })
    })
}

/* ───────────── main ───────────── */

(async () => {
    const [, , cmd, target] = process.argv

    if (cmd !== "add" || !target) {
        console.error("Usage: npx oj add <all|name>")
        process.exit(1)
    }

    const assetsDir = findAssetsDir(process.cwd()) || findAssetsDir(__dirname)
    if (!assetsDir) {
        console.error("Assets/ folder not found in any ancestor directory. Make sure you are in a Unity project but outside the Assets/ folder.")
        process.exit(1)
    }

    const tarPath = findTarball(assetsDir)
    if (!tarPath) {
        console.error("premade-uis.tgz not found. It's included in the OneJS Asset Store package. So make sure you have that installed somewhere under the Assets/ folder.")
        process.exit(1)
    }

    const cwd = process.cwd()
    const compsRoot = path.join(cwd, "comps")
    fs.mkdirSync(compsRoot, { recursive: true })

    /* ── dry-run to detect conflicts ── */
    const conflictKeys = new Set()

    await tar.t({
        file: tarPath,
        onentry: entry => {
            const p = entry.path
            if (!p.startsWith("comps/")) return

            if (target !== "all") {
                const rootFile = p.split("/").length === 2
                const inTarget = p === `comps/${target}` || p.startsWith(`comps/${target}/`)
                if (!rootFile && !inTarget) return

                const dest = path.join(cwd, p)
                if (fs.existsSync(dest)) {
                    conflictKeys.add(rootFile ? p : `comps/${target}`)
                }
                return
            }

            // ── "all" mode ──
            // Ask once per top-level folder (comps/echo, comps/casaul, ...)
            const topLevel = p.split("/").slice(0, 2).join("/")
            const dest = path.join(cwd, topLevel)
            if (fs.existsSync(dest)) conflictKeys.add(topLevel)
        }
    })

    for (const key of conflictKeys) {
        const ok = await askYN(`Overwrite existing ${key}?`)
        if (!ok) {
            console.log("Aborted.")
            process.exit(0)
        }
    }

    /* ── real extraction ── */
    const filter = p => {
        if (!p.startsWith("comps/")) return false
        if (target === "all") return true

        const rootFile = p.split("/").length === 2
        return rootFile || p === `comps/${target}` || p.startsWith(`comps/${target}/`)
    }

    await tar.x({
        file: tarPath,
        cwd,
        gzip: true,
        filter
    })

    console.log("Done.")
})().catch(err => {
    console.error(err)
    process.exit(1)
})
