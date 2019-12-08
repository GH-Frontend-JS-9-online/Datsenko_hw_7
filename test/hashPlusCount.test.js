const assert = require('chai').assert
const hashPlusCount = require('../src/js/loops/hashPlusCount.js')

describe('hashPlusCount', function () {

    it('return hashPlusCount', function () {
        assert.deepEqual(hashPlusCount("####"), [4, 0])
    })

    it('return hashPlusCount', function () {
        assert.deepEqual(hashPlusCount("#"), [1, 0])
    })

    it('return hashPlusCount', function () {
        assert.deepEqual(hashPlusCount("+++++++"), [0, 7])
    })

    it('return hashPlusCount', function () {
        assert.deepEqual(hashPlusCount("++"), [0, 2])
    })

    it('return hashPlusCount', function () {
        assert.deepEqual(hashPlusCount("#+#+"), [2, 2])
    })

    it('return hashPlusCount', function () {
        assert.deepEqual(hashPlusCount("###+"), [3, 1])
    })

    it('return hashPlusCount', function () {
        assert.deepEqual(hashPlusCount("##+++#"), [3, 3])
    })
    it('return hashPlusCount', function () {
        assert.deepEqual(hashPlusCount("#+++#+#++#"), [4, 6])
    })

    it('return hashPlusCount', function () {
        assert.deepEqual(hashPlusCount(""), [0, 0])
    })

})