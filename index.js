const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');

// lib imports
const files = require('./lib/files');
const github  = require('./lib/github');

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

// get github token
const getGithubToken = async () => {
    // Fetch token from config store
    let token = github.getStoredGithubToken();
    if(token) {
      return token;
    }
  
    // No token found, use credentials to access GitHub account
    token = await github.getPersonalAccesToken();
  
    return token;
  };  


// run program
const run = async () => {
    let token = github.getStoredGithubToken();
    if(!token) {
      token = await github.getPersonalAccesToken();
    }
    console.log(token);
  };

run();
