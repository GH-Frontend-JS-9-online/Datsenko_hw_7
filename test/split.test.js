const assert = require('chai').assert
const split = require('../src/js/functional/split.js')


describe('split', function () {

    it('return split', function () {
        
        assert.equal(split("abcde"), "aebcd")
    })

    it('return split', function () {
       
        assert.equal(split("Hello!"), "eoHll!")
    })

    it('return split', function () {
       
        assert.equal(split("What's the time?"), "aeieWht's th tm?")
    }) 

})