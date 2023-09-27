const chai = require("chai");
const decodeObservations = require("../exo/partie3");

describe('Testing with array input not empty ', function() {
    it('expect be TEMPETE with additional response ', function(done) {
        const expect = chai.expect;
        let arr = ["SmXwpKz" , "meXZKi"];
        let func =  decodeObservations(arr);
        expect(func).contains("TEMPETE");
        expect(func.split(" ").length).to.equal(2)
        done() 
    });
    it('expect be NORMAL response ', function(done) {
        const expect = chai.expect;
        let arr = ["SmXwpKz" , "meKXZi"];
        let func =  decodeObservations(arr);
        expect(func).contains("NORMAL");
        done() 
    });
})