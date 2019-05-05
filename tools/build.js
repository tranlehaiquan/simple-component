const path = require('path');
const fs = require('fs');
const { promisify } = require('util');
const stat = promisify(fs.stat);
const mkdir = promisify(fs.mkdir);
const fsExtra = require('fs-extra');

const distPath = path.resolve(__dirname, '..', './dist');
const npmPath = path.resolve(__dirname, '..', './dist', './npm');
const srcPath = path.resolve(__dirname, '..', './src');

async function clearnDist() {
  try {
    const result = await stat(distPath);
    if(result.isDirectory()) {
      await fsExtra.emptyDir(distPath);
      await mkdir(npmPath);
    }
  } catch(err) {
    console.log(err);
  }
}

async function copySrcToDist() {
  await fsExtra.copy(srcPath, npmPath);
}

(async () => {
  await clearnDist();
  await copySrcToDist();
})();

