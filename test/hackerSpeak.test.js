const assert = require('chai').assert
const hackerSpeak = require('../src/js/functional/hackerSpeak.js')

describe('hackerSpeak', function () {

    it('return hackerSpeak', function () {
        
        assert.equal(hackerSpeak("javascript is cool"), "j4v45cr1pt 15 c00l")
    })

    it('return hackerSpeak', function () {
       
        assert.equal(hackerSpeak("become a coder"), "b3c0m3 4 c0d3r")
    })

    it('return hackerSpeak', function () {
       
        assert.equal(hackerSpeak("hi there"), "h1 th3r3")
    }) 

    it('return hackerSpeak', function () {
       
        assert.equal(hackerSpeak("programming is fun"), "pr0gr4mm1ng 15 fun")
    }) 

    it('return hackerSpeak', function () {
       
        assert.equal(hackerSpeak("keep on practicing"), "k33p 0n pr4ct1c1ng")
    })     

})