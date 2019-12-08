const assert = require('chai').assert
const binary = require('../src/js/loops/binary.js')


describe('binary', function () {

    it('return binary', function () {
        assert.equal(binary(100), "1100100")
    })

    it('return binary', function () {
        assert.equal(binary(1), "1")
    })

    it('return binary', function () {
        assert.equal(binary(0), "0")
    })

    it('return binary', function () {
        assert.equal(binary(69), "1000101")
    })

    it('return binary', function () {
        assert.equal(binary(1023), "1111111111")
    }) 

    it('return binary', function () {
        assert.equal(binary(511), "111111111")
    })   

    it('return binary', function () {
        assert.equal(binary(666), "1010011010")
    })

    it('return binary', function () {
        assert.equal(binary(123), "1111011")
    })   

})