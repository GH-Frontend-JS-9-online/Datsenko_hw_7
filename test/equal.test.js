const assert = require('chai').assert
const equal = require('../src/js/conditions/equal.js')

describe('equal', function () {

    it('return equal', function () {
        assert.equal(equal(2,3,4), 0, "All values are differents")
    })

    it('return equal', function () {
        assert.equal(equal(7,3,7), 2, "Two values are equal")
    })

    it('return equal', function () {
        assert.equal(equal(4,4,4), 3, "All 3 values are equal")
    })

    it('return equal', function () {
        assert.equal(equal(7,3,4), 0, "All values are differents")
    })

    it('return equal', function () {
        assert.equal(equal(3,3,6), 2, "Two values are equal")
    })

    it('return equal', function () {
        assert.equal(equal(1,1,1), 3, "All 3 values are equal")
    })

    it('return equal', function () {
        assert.equal(equal(1,7,6), 0, "All values are differents")
    })

    it('return equal', function () {
        assert.equal(equal(7, 7, 7), 3, "All 3 values are equal")
    })

})