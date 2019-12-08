const assert = require('chai').assert
const magnitude = require('../src/js/functional/magnitude.js')

describe('magnitude', function () {

    it('return magnitude', function () {
        assert.deepEqual(magnitude([3,4]),5,'basic test not met')
    })

    it('return magnitude', function () {
        assert.deepEqual(magnitude([0,0,-10]),10,'basic test not met')
    })

    it('return magnitude', function () {
        assert.deepEqual(magnitude([]),0,'basic test not met')
    })

    it('return magnitude', function () {
        assert.deepEqual(magnitude([2,3,6,1,8]),10.677078252031311,'basic test not met')
    })

    it('return magnitude', function () {
        assert.deepEqual(magnitude([9,-9,3]),13.076696830622021)
    })   

    it('return magnitude', function () {
        assert.deepEqual(magnitude([-24,94,4,0,10]),97.61147473529944)
    })   

})