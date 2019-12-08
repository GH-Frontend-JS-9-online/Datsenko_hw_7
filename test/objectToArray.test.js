const assert = require('chai').assert
const objectToArray = require('../src/js/objects/objectToArray.js')

describe('objectToArray', function () {

    it('return objectToArray', function () {
        assert.deepEqual(objectToArray({
            D: 1,
            B: 2,
            C: 3
        }), [
            ["D", 1],
            ["B", 2],
            ["C", 3]
        ])
    })

    it('return objectToArray', function () {
        assert.deepEqual(objectToArray({
            likes: 2,
            dislikes: 3,
            followers: 10
        }), [
            ["likes", 2],
            ["dislikes", 3],
            ["followers", 10]
        ])
    })

})