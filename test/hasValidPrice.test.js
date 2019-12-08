const assert = require('chai').assert
const hasValidPrice = require('../src/js/conditions/hasValidPrice.js')

describe('hasValidPrice', function () {

    it('return hasValidPrice', function () {
        assert.equal(hasValidPrice({ "product": "Milk", price: 1.50 }), true)
    })

    it('return hasValidPrice', function () {
        assert.equal(hasValidPrice({ "product": "Cheese", price: -1 }), false)
    })

    it('return hasValidPrice', function () {
        assert.equal(hasValidPrice({ "product": "Eggs", price: 0 }), true)
    })

    it('return hasValidPrice', function () {
        assert.equal(hasValidPrice({ "product": "Flour" }), false)
    })

    it('return hasValidPrice', function () {
        assert.equal(hasValidPrice({ "product": "Cerials", price: '3.0' }), false)
    })

    it('return hasValidPrice', function () {
        assert.equal(hasValidPrice({ "product": "Beer", price: NaN }), false)
    })

    it('return hasValidPrice', function () {
        assert.equal(hasValidPrice(), false)
    })

})