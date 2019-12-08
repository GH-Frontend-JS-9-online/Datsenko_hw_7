const assert = require('chai').assert
const redundant = require('../src/js/functional/redundant.js')

describe('redundant', function () {

    it('return redundant', function () {
        const f1 = redundant("apple")
        assert.equal(f1(), "apple")
    })

    it('return redundant', function () {
        const f2 = redundant("pear")
        assert.equal(f2(), "pear")
    })

    it('return redundant', function () {
        const f3 = redundant("")
        assert.equal(f3(), "")
    })     

})