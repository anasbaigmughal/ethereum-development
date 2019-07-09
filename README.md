# ethereum-development
this repository contains the decentralized applications development code over ethereum blockchain

```
mkdir inbox
cd inbox
sudo apt install git
git clone https://github.com/anasbaigmughal/decentrify.git
sudo apt install npm
npm init
update-manager
sudo apt install curl
curl -sL https://deb.nodesource.com/setup_9.x | sudo -E bash -
sudo apt-get install nodejs
npm install solc@0.4.25
node compile.js
"solidity.compileUsingRemoteVersion": "v0.4.19+commit.c4cbbb05"
npm install --save mocha ganache-cli 
npm install --save web3@1.0.0-beta.37 // or 26
```
in package.json put mocha in string 
```
"test": "mocha"//"test": "echo \"Error: no test specified\" && exit 1"
```
#testing with mocha ~ code review
```
const assert = require('assert'); //asert standard library build on nodejs runtime, assert is used to make assertions for test that some value is equal to another value
const ganache = require('ganache-cli');
const Web3 = require('web3'); //capital case because we will work with constructor module, so this is convention for that
//web3 is used for interaction between javascript application and ethereum network, multiple instances could be created to connect to multiple ethereum networks, but usually an app has to connect to only one ethereum network
//ganache.provider is the means of communication between ganacche and web3
//const web3 = new Web3(ganache.provider()); //lowercase because this is the instance of web3 provider that provides mean of communication between web3 and ganache
const provider = ganache.provider();
const web3 = new Web3(provider);
//mocha functions
//it~run a test and make an insertion
//describe~groups together 'it' functions that are related to eachother
//beforeEach~execute some general setup code that is common among all tests, so we have to write that code only once

class Car
{
    park()
    {
        return 'stopped';
    }
    drive()
    {
        return 'vroom';
    }
}
//anything in beforeEach() will be executed before the it statements
let car; //to makke car accesible in whole program, let is used for variable, const is used for constant and its value is to be defined with declaration
beforeEach(()=>{
    car = new Car();
});
//descibe is used to group similar tests 
describe('Car', ()=>{
    it('can park', ()=>{
        assert.equal(car.park(), 'stopped'); //it will check either the compared values are equal or not, if yes then passed otherwise test fail
    });
    it('can drive', ()=>{
        assert.equal(car.drive(), 'vroom'); //it will check either the compared values are equal or not, if yes then passed otherwise test fail
    });
});
```