/**
 * Contains code from Nick Janetakis's esbuild-copy-static-files (MIT)
 */
import path from 'path'
import fs from 'fs'
import crypto from 'crypto'

function getPackagesWithAssets() {
    let packagesWithAssets = [];
    const nodeModulesPath = path.join(process.cwd(), 'node_modules');
    const packages = fs.readdirSync(nodeModulesPath);
    // console.log("There are " + packages.length + " packages in node_modules");
    for (const packageName of packages) {
        const packagePath = path.join(nodeModulesPath, packageName);
        if (!fs.statSync(packagePath).isDirectory())
            continue;
        const pkgJsonPath = path.join(packagePath, 'package.json');

        try {
            const pkgJsonContent = fs.readFileSync(pkgJsonPath, 'utf8');
            const pkgJson = JSON.parse(pkgJsonContent);

            if (pkgJson.onejs && pkgJson.onejs['assets-path']) {

                packagesWithAssets.push({
                    name: packageName,
                    src: path.join("node_modules", packageName, pkgJson.onejs['assets-path'])
                });
            }
        } catch (error) {
            if (error.code !== 'ENOENT') {
                console.error(`Error processing ${packageName}:`, error);
            }
        }
    }

    // console.log("Found " + packagesWithAssets.length + " packages with assets");
    return packagesWithAssets
}

const getDigest = (string) => {
    const hash = crypto.createHash('md5')
    const data = hash.update(string, 'utf-8')

    return data.digest('hex')
}

const getFileDigest = (path) => {
    if (!fs.existsSync(path)) {
        return null
    }

    if (fs.statSync(path).isDirectory()) {
        return null
    }

    return getDigest(fs.readFileSync(path))
}

function filter(src, dest) {
    if (!fs.existsSync(dest)) {
        return true
    }

    if (fs.statSync(dest).isDirectory()) {
        return true
    }

    return getFileDigest(src) !== getFileDigest(dest)
}

export function copyAssetsPlugin(options = {}) {
    let dest = options.dest || 'assets'
    return {
        name: "onejs-copy-assets",
        setup(build) {
            build.onEnd(async () => {
                const packagesWithAssets = getPackagesWithAssets();
                console.log(`[esbuild] syncing assets from:`)
                for (const pkg of packagesWithAssets) {
                    const destPath = path.join(dest, "@" + pkg.name);
                    fs.cpSync(pkg.src, destPath, {
                        dereference: options.dereference || true,
                        errorOnExist: options.errorOnExist || false,
                        filter: options.filter || filter,
                        force: options.force || true,
                        preserveTimestamps: options.preserveTimestamps || true,
                        recursive: options.recursive || true,
                    })
                    console.log(`[esbuild] > ${pkg.name}`)
                }
            })
        }
    }
}