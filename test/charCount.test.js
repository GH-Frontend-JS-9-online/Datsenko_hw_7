const assert = require('chai').assert
const charCount = require('../src/js/loops/charCount.js')


describe('charCount', function () {

    it('return charCount', function () {
        assert.equal(charCount('a', 'edabit'), 1)
    })

    it('return charCount', function () {
        assert.equal(charCount('b', 'big fat bubble'), 4)
    })

    it('return charCount', function () {
        assert.equal(charCount('c', 'Chamber of secrets'), 1)
    })

    it('return charCount', function () {
        assert.equal(charCount('f', 'frank and his friends have offered five foxes for sale'), 7)
    })    
    
    it('return charCount', function () {
        assert.equal(charCount('x', 'edabit'), 0)
    })
    
    it('return charCount', function () {
        assert.equal(charCount('a', 'Adam and Eve bit the apple and found a snake'), 6)
    })
    
    it('return charCount', function () {
        assert.equal(charCount('s', 'sssssssssssssssssssssssss'), 25)
    })
    
    it('return charCount', function () {
        assert.equal(charCount('7', '10795426697'), 2)
    })

})