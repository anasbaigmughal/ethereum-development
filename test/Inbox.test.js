const assert = require('assert'); //asert standard library build on nodejs runtime, assert is used to make assertions for test that some value is equal to another value
const ganache = require('ganache-cli');
const Web3 = require('web3'); //capital case because we will work with constructor moduel so this iis conventionn for that
//web3 is used for interaction between javascrfipt application and ethereum network, multiple instances could be created to connect to multiple ethereum networks, but usually an app has to connect to only one ethereum network
//provider is the means of communication between ganacche and web3
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
//anything in beforeEach will be executed before the it statements
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