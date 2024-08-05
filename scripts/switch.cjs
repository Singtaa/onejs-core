const fs = require('fs')
const tar = require('tar')
const url = require('url')
const path = require('path')
const fse = require('fs-extra')
const { rimraf } = require('rimraf')

const fsp = fs.promises

const backends = [
    { name: "QuickJS", tgzUrl: "https://github.com/Tencent/puerts/releases/download/Unity_v2.1.0/PuerTS_Quickjs_2.1.0.tgz" },
    { name: "V8", tgzUrl: "https://github.com/Tencent/puerts/releases/download/Unity_v2.1.0/PuerTS_V8_2.1.0.tgz" },
    { name: "NodeJS", tgzUrl: "https://github.com/Tencent/puerts/releases/download/Unity_v2.1.0/PuerTS_Nodejs_2.1.0.tgz" }
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
} else if (args.length > 0 && ["quickjs", "v8", "nodejs"].includes(args[0].toLowerCase())) {
    const backend = backends.find(b => b.name.toLowerCase() === args[0])
    const outputDir = "./tmp"
    Process(backend, outputDir)
} else {
    console.log("Usage: npm run switch <quickjs|v8|nodejs|clear>\n")
    console.log("           quickjs: Switch to QuickJS backend")
    console.log("           v8: Switch to V8 backend")
    console.log("           nodejs: Switch to NodeJS backend")
    console.log("           clear: Clear all downloaded .tgz files\n")
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

        // Safe keep asmdef files
        const onejsDir = getOneJSUnityDir()
        const a = path.join(onejsDir, 'Puerts/Editor/com.tencent.puerts.core.Editor.asmdef')
        const b = path.join(upmDir, 'Editor/com.tencent.puerts.core.Editor.asmdef')
        const c = path.join(onejsDir, 'Puerts/Runtime/com.tencent.puerts.core.asmdef')
        const d = path.join(upmDir, 'Runtime/com.tencent.puerts.core.asmdef')
        await fse.copy(a, b)
        await fse.copy(c, d)

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

function getOneJSUnityDir() {
    var packageJsonPath = path.join(process.cwd(), 'package.json')
    var json = require(packageJsonPath)
    return json.onejs["unity-package-path"]
}

function ensureDirectoryExistence(filePath) {
    const dirname = path.dirname(filePath);
    if (fs.existsSync(dirname)) {
        return true;
    }
    fs.mkdirSync(dirname, { recursive: true });
}

function getFilenameFromUrl(fileUrl) {
    const parsedUrl = url.parse(fileUrl);
    return path.basename(parsedUrl.pathname);
}

async function downloadFile(fileUrl, outputDir) {
    const filename = getFilenameFromUrl(fileUrl);
    const outputLocationPath = path.join(outputDir, filename);

    ensureDirectoryExistence(outputLocationPath);

    // Check if the file already exists
    if (fs.existsSync(outputLocationPath)) {
        console.log(`Local .tgz found: ${outputLocationPath}`);
        return outputLocationPath;
    }

    console.log(`Downloading ${filename}`);
    const response = await fetch(fileUrl);

    if (!response.ok) {
        throw new Error(`Failed to fetch ${fileUrl}: ${response.statusText}`);
    }

    const fileStream = fs.createWriteStream(outputLocationPath);
    for await (const chunk of response.body) {
        fileStream.write(chunk);
    }

    fileStream.end();
    fileStream.on('finish', () => {
        console.log(`Download completed: ${outputLocationPath}`);
    });

    return new Promise((resolve, reject) => {
        fileStream.on('close', () => resolve(outputLocationPath));
        fileStream.on('error', reject);
    });
}

async function extractTgz(filePath, outputDir) {
    await tar.x({
        file: filePath,
        cwd: outputDir,
    })
    console.log(`Extraction completed.`);
}



async function checkFileInUse(file) {
    try {
        const handle = await fsp.open(file, 'r+');
        await handle.close();
    } catch (err) {
        if (err.code === 'EBUSY' || err.code === 'EPERM' || err.code === 'EACCES') {
            console.error('File is in use by another program or access is denied:', err);
            return false;
        } else {
            console.error('Cannot access file:', err);
            return false;
        }
    }
    return true;
}

async function checkAllDeletable(currentPath) {
    try {
        const stats = await fsp.stat(currentPath);

        if (stats.isDirectory()) {
            const files = await fsp.readdir(currentPath);

            for (const file of files) {
                const deletable = await checkAllDeletable(path.join(currentPath, file));
                if (!deletable) {
                    return false;
                }
            }
            return true;
        } else {
            return await checkFileInUse(currentPath);
        }
    } catch (err) {
        console.log(`Error accessing: ${currentPath}, ${err}`);
        return false;
    }
}

async function deleteDirectorySafely(dirPath) {
    if (await checkAllDeletable(dirPath)) {
        await rimraf(dirPath)
        return true
    }
    return false
}