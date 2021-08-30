#!/usr/bin/env node
const { execSync } = require("child_process");
const path = require("path");
const fs = require("fs");

if (process.argv.length < 3) {
  console.log("You have to provide a name to your app.");
  console.log("For example:");
  console.log("npx create-uibuddy-app myapp");
  process.exit(1);
}

const projectName = process.argv[2];
const currentPath = process.cwd();
const projectPath = path.join(currentPath, projectName);
const git_repo = "https://github.com/awaiskazmi/create-uibuddy-app.git";

try {
  fs.mkdirSync(projectPath);
} catch (err) {
  if (err.code === "EEXIST") {
    console.log(
      `The file ${projectName} already exists in the current directory, please choose another name.`
    );
  } else {
    console.log(error);
  }
  process.exit(1);
}

async function main() {
  try {
    console.log("Downloading files...");
    execSync(`git clone --depth 1 ${git_repo} ${projectPath}`);

    process.chdir(projectPath);

    console.log("Installing dependencies...");
    execSync("npm install");

    fs.rmdirSync(path.join(projectPath, "bin"), { recursive: true });

    console.log("Installaion complete!");
    console.log("To get started:");
    console.log("\x1b[32m%s\x1b[0m", "        cd " + projectName);
    console.log("\x1b[32m%s\x1b[0m", "        npm run watch");
  } catch (error) {
    console.log(error);
  }
}
main();
