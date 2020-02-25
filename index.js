const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');

const files = require('./lib/files');

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