const assert = require('chai').assert
const isAvgWhole = require('../src/js/arrays/isAvgWhole.js')

describe('isAvgWhole', function () {

    it('return isAvgWhole', function () {
        assert.equal(isAvgWhole([3, 5, 9]), false)
    })

    it('return isAvgWhole', function () {
        assert.equal(isAvgWhole([1, 1, 1, 1]), true)
    })

    it('return isAvgWhole', function () {
        assert.equal(isAvgWhole([1, 2, 3, 4, 5]), true)
    })

    it('return isAvgWhole', function () {
        assert.equal(isAvgWhole([5, 2, 4]), false)
    })

    it('return isAvgWhole', function () {
        assert.equal(isAvgWhole([11, 22]), false)
    })

    it('return isAvgWhole', function () {
        assert.equal(isAvgWhole([4, 1, 7, 9, 2, 5, 7, 2, 4]), false)
    })

})