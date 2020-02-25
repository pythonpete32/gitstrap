const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');

// lib imports
const files = require('./lib/files');
const inquirer  = require('./lib/inquirer');

clear();

// banner
console.log(
    chalk.yellow(
        figlet.textSync('G-Strap', {
            horizontalLayout: 'full'
        })
    )
);

// sanity check: not already a git repo
if (files.directoryExists('.git')) {
    console.log(chalk.red('Already a Git repository!'));
    process.exit();
}

// get git credentials
const run = async () => {
  const credentials = await inquirer.askGithubCredentials();
  console.log(credentials);
};

run();
