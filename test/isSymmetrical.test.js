const assert = require('chai').assert
const isSymmetrical = require('../src/js/conditions/isSymmetrical.js')


describe('isSymmetrical', function () {

    it('return isSymmetrical', function () {
        assert.equal(isSymmetrical(23), false)
    })

    it('return isSymmetrical', function () {
        assert.equal(isSymmetrical(9562), false)
    })

    it('return isSymmetrical', function () {
        assert.equal(isSymmetrical(10019), false)
    })

    it('return isSymmetrical', function () {
        assert.equal(isSymmetrical(1), true)
    })
    
    it('return isSymmetrical', function () {
        assert.equal(isSymmetrical(3223), true)
    })

    it('return isSymmetrical', function () {
        assert.equal(isSymmetrical(95559), true)
    })

    it('return isSymmetrical', function () {
        assert.equal(isSymmetrical(66566), true)
    })

})



