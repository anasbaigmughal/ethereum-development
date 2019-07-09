const assert = require('assert'); //asert standard library build on nodejs runtime, assert is used to make assertions for test that some value is equal to another value
const ganache = require('ganache-cli');
const Web3 = require('web3'); //capital case because we will work with constructor moduel so this iis conventionn for that
//web3 is used for interaction between javascrfipt application and ethereum network, multiple instances could be created to connect to multiple ethereum networks, but usually an app has to connect to only one ethereum network
//provider is the means of communication between ganacche and web3
const web3 = new Web3(ganache.provider()); //lowercase because this is the instance of web3 provider that provides mean of communication between web3 and ganache
 