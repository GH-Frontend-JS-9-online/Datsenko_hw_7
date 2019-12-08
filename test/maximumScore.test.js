const assert = require('chai').assert
const maximumScore = require('../src/js/objects/maximumScore.js')

describe('maximumScore', function () {

    it('return maximumScore', function () {
        assert.deepEqual(maximumScore([{
                tile: 'N',
                score: 1
            },
            {
                tile: 'K',
                score: 5
            },
            {
                tile: 'Z',
                score: 10
            },
            {
                tile: 'X',
                score: 8
            },
            {
                tile: 'D',
                score: 2
            },
            {
                tile: 'A',
                score: 1
            },
            {
                tile: 'E',
                score: 1
            }
        ]), 28)
    })

    it('return maximumScore', function () {
        assert.deepEqual(maximumScore([{
            tile: 'B',
            score: 2
        }, {
            tile: 'V',
            score: 4
        }, {
            tile: 'F',
            score: 4
        }, {
            tile: 'U',
            score: 1
        }, {
            tile: 'D',
            score: 2
        }, {
            tile: 'O',
            score: 1
        }, {
            tile: 'U',
            score: 1
        }]), 15)
    })

    it('return maximumScore', function () {
        assert.deepEqual(maximumScore([{
            tile: 'M',
            score: 3
        }, {
            tile: 'Q',
            score: 10
        }, {
            tile: 'O',
            score: 1
        }, {
            tile: 'E',
            score: 1
        }, {
            tile: 'E',
            score: 1
        }, {
            tile: 'I',
            score: 1
        }, {
            tile: 'A',
            score: 1
        }]), 18)
    })

    it('return maximumScore', function () {
        assert.deepEqual(maximumScore([{
            tile: 'A',
            score: 1
        }, {
            tile: 'E',
            score: 1
        }, {
            tile: 'O',
            score: 1
        }, {
            tile: 'E',
            score: 1
        }, {
            tile: 'E',
            score: 1
        }, {
            tile: 'I',
            score: 1
        }, {
            tile: 'A',
            score: 1
        }]), 7)
    })

})