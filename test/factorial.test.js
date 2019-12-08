const assert = require('chai').assert
const factorial = require('../src/js/conditions/factorial.js')


describe('factorial', function () {

    it('return factorial', function () {
        assert.equal(factorial(4), 24)
    })

    it('return factorial', function () {
        assert.equal(factorial(9), 362880)
    })

    it('return factorial', function () {
        assert.equal(factorial(1), 1)
    })

    it('return factorial', function () {
        assert.equal(factorial(2), 2)
    })

})