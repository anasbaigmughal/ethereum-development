//require('./contracts/Inbox.sol'); //bad!

//built-in standard library modules bellow, these are standard modules so we dont need npm to install them from the terminal
const path = require('path'); //provides cross compilation compatability
const fs = require('fs'); //fileSystem module
const solc = require('solc'); //declaring solidity compiler library

const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol'); //first arg is const defined in node thatholds current working directory
const source = fs.readFileSync(inboxPath, 'utf8');

console.log(solc.compile(source, 1)); //digit means number of smart contracts you are compiling

