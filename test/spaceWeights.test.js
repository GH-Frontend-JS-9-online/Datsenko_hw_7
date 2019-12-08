const assert = require('chai').assert
const spaceWeights = require('../src/js/objects/spaceWeights.js')

describe('spaceWeights', function () {

    it('return spaceWeights', function () {
       
        assert.equal(spaceWeights("Earth", 1, "Mars"), 0.38)
    })

    it('return spaceWeights', function () {
        
        assert.equal(spaceWeights("Earth", 1, "Jupiter"), 2.53)
    })

    it('return spaceWeights', function () {
        
        assert.equal(spaceWeights("Earth", 1, "Neptune"), 1.14)
    })

    it('return spaceWeights', function () {
        
        assert.equal(spaceWeights("Jupiter", 100, "Mercury"), 14.93)
    })

    it('return spaceWeights', function () {
        
        assert.equal(spaceWeights("Venus", 75, "Jupiter"), 209.61)
    })

    it('return spaceWeights', function () {
        
        assert.equal(spaceWeights("Uranus", 10, "Saturn"), 12.01)
    })

    it('return spaceWeights', function () {
        
        assert.equal(spaceWeights("Mars", 120, "Mercury"), 119.64)
    })

    it('return spaceWeights', function () {
        
        assert.equal(spaceWeights("Neptune", 1421, "Earth"), 1250.23)
    })

    it('return spaceWeights', function () {
        
        assert.equal(spaceWeights("Jupiter", 33, "Mercury"), 4.93)
    })

    it('return spaceWeights', function () {
        
        assert.equal(spaceWeights("Saturn", 555, "Venus"), 471.54)
    })

    it('return spaceWeights', function () {
        
        assert.equal(spaceWeights("Jupiter", 3.141592, "Earth"), 1.24)
    })


})