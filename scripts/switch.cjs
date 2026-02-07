const fs = require('fs')
const tar = require('tar')
const url = require('url')
const path = require('path')
const fse = require('fs-extra')
const { rimraf } = require('rimraf')
const ProgressBar = require('progress')

const fsp = fs.promises

const projectDir = path.resolve(process.cwd(), '..')
const manifestPath = path.join(projectDir, 'Packages', 'manifest.json')

const backends = [
    { name: "QuickJS", tgzUrl: "https://github.com/Tencent/puerts/releases/download/Unity_v2.2.2/PuerTS_Quickjs_2.2.2.tgz" },
    { name: "V8", tgzUrl: "https://github.com/Tencent/puerts/releases/download/Unity_v2.2.2/PuerTS_V8_2.2.2.tgz" },
    { name: "NodeJS", tgzUrl: "https://github.com/Tencent/puerts/releases/download/Unity_v2.2.2/PuerTS_Nodejs_2.2.2.tgz" }
]

const args = process.argv.slice(2)

if (args.length > 0 && args[0].toLowerCase() == "clear") {
    for (const backend of backends) {
        const filename = getFilenameFromUrl(backend.tgzUrl)
        const outputDir = "./tmp"
        const downloadedPath = path.join(outputDir, filename)
        if (fs.existsSync(downloadedPath)) {
            fs.unlinkSync(downloadedPath)
            console.log(`Deleted ${downloadedPath}`)
        }
    }
} else if (
    args.length > 0 &&
    (["quickjs", "v8", "nodejs"].includes(args[0].toLowerCase()) ||
        (args[0].toLowerCase().endsWith('.tgz') || /^https?:\/\/.+\.tgz$/i.test(args[0])))
) {
    let backend
    const outputDir = "./tmp"
    if (["quickjs", "v8", "nodejs"].includes(args[0].toLowerCase())) {
        backend = backends.find(b => b.name.toLowerCase() === args[0])
    } else {
        backend = { name: "Custom", tgzUrl: args[0] }
    }
    Process(backend, outputDir)
} else {
    console.log("Usage: npm run switch <quickjs|v8|nodejs|clear|tgz-url>\n")
    console.log("           quickjs: Switch to QuickJS backend")
    console.log("           v8: Switch to V8 backend")
    console.log("           nodejs: Switch to NodeJS backend")
    console.log("           clear: Clear all downloaded .tgz files")
    console.log("           <tgz-url>: Switch using a custom .tgz package URL\n")
}

async function Process(backend, outputDir) {
    try {
        // Download
        const downloadedPath = await downloadFile(backend.tgzUrl, outputDir)

        // Extraction
        const upmDir = path.join(outputDir, "upm")
        if (fs.existsSync(upmDir)) {
            await rimraf(upmDir)
        }
        await extractTgz(downloadedPath, outputDir)

        // Safe keep asmdef files, et al.
        const onejsDir = await getOneJSUnityDir()
        if (!onejsDir) {
            throw new Error('Could not locate the OneJS Unity package directory. See messages above for details.')
        }
        const a = path.join(onejsDir, 'Puerts/Editor/com.tencent.puerts.core.Editor.asmdef')
        const b = path.join(upmDir, 'Editor/com.tencent.puerts.core.Editor.asmdef')
        const c = path.join(onejsDir, 'Puerts/Runtime/com.tencent.puerts.core.asmdef')
        const d = path.join(upmDir, 'Runtime/com.tencent.puerts.core.asmdef')
        await fse.copy(a, b)
        await fse.copy(c, d)
        const e = path.join(onejsDir, 'Puerts/Runtime/Src/Default/JsEnv.cs')
        const f = path.join(upmDir, 'Runtime/Src/Default/JsEnv.cs')
        await fse.copy(e, f)

        // Replace OneJS/Puerts with the new one
        const puertsDir = path.join(onejsDir, "Puerts")
        if (await deleteDirectorySafely(puertsDir)) {
            await fse.copy(upmDir, puertsDir)
            console.log(`Switched to ${backend.name} successfully.`)
        } else {
            console.error("Failed to delete old Puerts directory. Please make sure Unity Editor is not running as it may be using the files. (We cannot reliably replace native plugins while Unity Editor is using them)")
        }
    } catch (err) {
        console.error(`Error: ${err.message}`)
    }
}

// --- Support Functions ---

// function getOneJSUnityDir() {
//     var packageJsonPath = path.join(process.cwd(), 'package.json')
//     var json = require(packageJsonPath)
//     return json.onejs["unity-package-path"]
// }

async function getOneJSUnityDir() {
    const oneJSKeys = ["com.dragonground.onejs", "com.singtaa.onejs"]

    // Step 1: Check manifest.json for local (file:) paths
    if (fs.existsSync(manifestPath)) {
        const manifestContent = fs.readFileSync(manifestPath, "utf8")
        let manifestJson
        try { manifestJson = JSON.parse(manifestContent) } catch {
            console.error('Could not parse manifest.json at ' + manifestPath)
            return null
        }

        const dependencies = manifestJson && manifestJson.dependencies

        if (dependencies) {
            for (const key of oneJSKeys) {
                const packagePath = dependencies[key]
                if (typeof packagePath === "string") {
                    const v = packagePath.trim()
                    if (v.startsWith("file:")) {
                        // Local path dependency, e.g., "file:PATH/TO/OneJS"
                        return path.resolve(projectDir, v.substring(5))
                    }
                }
            }
        }

        // Step 2: Check Library/PackageCache for Git URL or registry dependencies
        const packageCacheDir = path.join(projectDir, 'Library', 'PackageCache')
        if (dependencies && fs.existsSync(packageCacheDir)) {
            for (const key of oneJSKeys) {
                if (typeof dependencies[key] === "string") {
                    const found = findPackageInCache(packageCacheDir, key)
                    if (found) return found
                }
            }
        }
    }

    // Step 3: Last resort - scan PackageCache even without manifest entry
    const packageCacheDir = path.join(projectDir, 'Library', 'PackageCache')
    if (fs.existsSync(packageCacheDir)) {
        for (const key of oneJSKeys) {
            const found = findPackageInCache(packageCacheDir, key)
            if (found) return found
        }
    }

    console.error(
        'Could not find OneJS package directory.\n' +
        'Please make sure OneJS is installed in your Unity project via one of:\n' +
        '  - A local path (file:) dependency in Packages/manifest.json\n' +
        '  - A Git URL dependency in Packages/manifest.json\n' +
        '  - The Unity Package Manager registry\n' +
        'And that this script is run from the OneJS npm project inside the Unity project.'
    )
    return null
}

function findPackageInCache(packageCacheDir, packageName) {
    try {
        const entries = fs.readdirSync(packageCacheDir)
        for (const entry of entries) {
            if (entry.startsWith(packageName + '@') || entry === packageName) {
                const candidatePath = path.join(packageCacheDir, entry)
                if (fs.statSync(candidatePath).isDirectory()) {
                    return candidatePath
                }
            }
        }
    } catch (err) {
        // PackageCache not readable, skip
    }
    return null
}

function ensureDirectoryExistence(filePath) {
    const dirname = path.dirname(filePath)
    if (fs.existsSync(dirname)) {
        return true
    }
    fs.mkdirSync(dirname, { recursive: true })
}

function getFilenameFromUrl(fileUrl) {
    const parsedUrl = url.parse(fileUrl)
    return path.basename(parsedUrl.pathname)
}

async function downloadFile(fileUrl, outputDir) {
    const filename = getFilenameFromUrl(fileUrl)
    const outputLocationPath = path.join(outputDir, filename)

    ensureDirectoryExistence(outputLocationPath)

    // Check if file exists (keep existing code)
    if (fs.existsSync(outputLocationPath)) {
        console.log(`Local .tgz found: ${outputLocationPath}`)
        return outputLocationPath
    }

    console.log(`Downloading ${filename}`)
    const response = await fetch(fileUrl)

    if (!response.ok) {
        throw new Error(`Failed to fetch ${fileUrl}: ${response.statusText}`)
    }

    // Get the total size for the progress bar
    const totalSize = parseInt(response.headers.get('content-length'), 10)

    // Create progress bar
    const progressBar = new ProgressBar('[:bar] :percent ETA: :etas', {
        complete: '=',
        incomplete: ' ',
        width: 40,
        total: totalSize
    })

    const fileStream = fs.createWriteStream(outputLocationPath)
    for await (const chunk of response.body) {
        fileStream.write(chunk)
        progressBar.tick(chunk.length)
    }

    fileStream.end()

    return new Promise((resolve, reject) => {
        fileStream.on('close', () => resolve(outputLocationPath))
        fileStream.on('error', reject)
    })
}

async function extractTgz(filePath, outputDir) {
    await tar.x({
        file: filePath,
        cwd: outputDir,
    })
    console.log(`Extraction completed.`)
}



async function checkFileInUse(file) {
    try {
        const handle = await fsp.open(file, 'r+')
        await handle.close()
    } catch (err) {
        if (err.code === 'EBUSY' || err.code === 'EPERM' || err.code === 'EACCES') {
            console.error('File is in use by another program or access is denied:', err)
            return false
        } else {
            console.error('Cannot access file:', err)
            return false
        }
    }
    return true
}

async function checkAllDeletable(currentPath) {
    try {
        const stats = await fsp.stat(currentPath)

        if (stats.isDirectory()) {
            const files = await fsp.readdir(currentPath)

            for (const file of files) {
                const deletable = await checkAllDeletable(path.join(currentPath, file))
                if (!deletable) {
                    return false
                }
            }
            return true
        } else {
            return await checkFileInUse(currentPath)
        }
    } catch (err) {
        console.log(`Error accessing: ${currentPath}, ${err}`)
        return false
    }
}

async function deleteDirectorySafely(dirPath) {
    if (await checkAllDeletable(dirPath)) {
        await rimraf(dirPath)
        return true
    }
    return false
}
