const assert = require('chai').assert
const sayHelloBye = require('../src/js/conditions/sayHelloBye.js')


describe('sayHelloBye', function () {

    it('return sayHelloBye', function () {
        assert.equal(sayHelloBye("jose", 1), "Hello Jose")
    })

    it('return sayHelloBye', function () {
        assert.equal(sayHelloBye("barry", 1), "Hello Barry")
    })

    it('return sayHelloBye', function () {
        assert.equal(sayHelloBye("jon", 0), "Bye Jon")
    })

    it('return sayHelloBye', function () {
        assert.equal(sayHelloBye("khloy", 1), "Hello Khloy")
    })

    it('return sayHelloBye', function () {
        assert.equal(sayHelloBye("sara", 0), "Bye Sara")
    })

    it('return sayHelloBye', function () {
        assert.equal(sayHelloBye("Jon", 0), "Bye Jon")
    })

    it('return sayHelloBye', function () {
        assert.equal(sayHelloBye("Matt", 1), "Hello Matt")
    })

})