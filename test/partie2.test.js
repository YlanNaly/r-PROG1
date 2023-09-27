const chai = require("chai");
const decodeMessage = require("../exo/partie2");

describe('Testing for decode Message ', function() {
    it('expect be RabDeFritesA14h for N=3', function(done) {
        const expect = chai.expect;
        let input = "RFsarAbi1Dt4eeh";
        let N = 3;
        let func =  decodeMessage(N,input);
        expect(func).equal("RabDeFritesA14h");
        done() 
    });
})