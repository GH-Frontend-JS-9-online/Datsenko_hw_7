const assert = require('chai').assert
const toArray = require('../src/js/objects/toArray.js')


describe('toArray', function () {

    it('return toArray', function () {
        assert.deepEqual(toArray({ a: 1, b: 2 }), [["a", 1], ["b", 2]])
    })

    it('return toArray', function () {
        assert.deepEqual(toArray({ foo: 33, bar: 45, baz: 67 }), [["foo", 33], ["bar", 45], ["baz", 67]])
    })

    it('return toArray', function () {
        assert.deepEqual(toArray({ shrimp: 15, tots: 12 }), [["shrimp", 15], ["tots", 12]])
    })

    it('return toArray', function () {
        assert.deepEqual(toArray({}), [])
    })

})