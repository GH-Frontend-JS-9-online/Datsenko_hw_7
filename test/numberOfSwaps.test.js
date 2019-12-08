const assert = require('chai').assert
const numberOfSwaps = require('../src/js/scope/numberOfSwaps.js')

describe('numberOfSwaps', function () {

    it('return numberOfSwaps', function () {
        assert.equal(numberOfSwaps([3, 9, 7, 4]), 3)
    })

    it('return numberOfSwaps', function () {
        assert.equal(numberOfSwaps([5, 4, 3]), 3)
    })

    it('return numberOfSwaps', function () {
        assert.equal(numberOfSwaps([5, 4, 3, 2]), 6)
    })

    it('return numberOfSwaps', function () {
        assert.equal(numberOfSwaps([1, 2, 4, 3]), 1)
    })

    it('return numberOfSwaps', function () {
        assert.equal(numberOfSwaps([1, 2, 5, 4, 3]), 3)
    })

    it('return numberOfSwaps', function () {
        assert.equal(numberOfSwaps([1, 3, 4, 5]), 0)
    })

    it('return numberOfSwaps', function () {
        assert.equal(numberOfSwaps([1, 2]), 0)
    })

})