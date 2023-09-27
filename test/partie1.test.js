const chai = require("chai");
const isBearable = require("../exo/partie1");

describe('Testing with array input not empty ', function() {
    it('expect be true as response ', function(done) {
        const expect = chai.expect;
        let input = [2,3,1,2,1];
        let size = 10;
        let response =  isBearable(size,input)
        expect(response).to.be.true
        done() 
    });
    it('expect be false response ', function(done) {
        const expect = chai.expect;
        let input = [2,3,1,10,1];
        let size = 10;
        let response =  isBearable(size,input)
        expect(response).to.be.false
        done() 
    });
})

describe('Testing with array input  empty ', function() {
    it('expect be true as response ', function(done) {
        const expect = chai.expect;
        let input = [];
        let size = 10;
        let response =  isBearable(size,input)
        expect(response).to.be.true
        done() 
    });
})