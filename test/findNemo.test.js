const assert = require('chai').assert
const findNemo = require('../src/js/arrays/findNemo.js')

describe('findNemo', function () {

    it('return findNemo', function () {
        assert.equal(findNemo("I am Ne mo Nemo !"), "I found Nemo at 5!")
    })

    it('return findNemo', function () {
        assert.equal(findNemo("N e m o is NEMO NeMo Nemo !"), "I found Nemo at 8!")
    })

    it('return findNemo', function () {
        assert.equal(findNemo("I am Nemo's dad Nemo senior ."), "I found Nemo at 5!")
    })

    it('return findNemo', function () {
        assert.equal(findNemo("Oh, hello !"), "I can't find Nemo :(")
    })

    it('return findNemo', function () {
        assert.equal(findNemo("Is it Nemos, Nemona, Nemoor or Garfield?"), "I can't find Nemo :(")
    })

    it('return findNemo', function () {
        assert.equal(findNemo("Nemo is a clown fish, he has white and orange stripes. Nemo , come back!"), "I found Nemo at 1!")
    })

})