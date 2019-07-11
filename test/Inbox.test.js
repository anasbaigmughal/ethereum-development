const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const provider = ganache.provider();
const web3 = new Web3(provider);

beforeEach(() => {
    //get a list of accounts
    web3.eth.getAccounts().then(fetchedAccounts => {
        console.log(fetchedAccounts);
    });
    //use one of the statements to deploy
    //the contract
});

describe('Inbox', () => {
    it('deploys a contract', () => {});
});