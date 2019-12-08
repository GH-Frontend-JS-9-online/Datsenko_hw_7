const assert = require('chai').assert
const spelling = require('../src/js/arrays/spelling.js')

describe('spelling', function () {

    it('return spelling', function () {
        assert.deepEqual(spelling("bee"), ['b', 'be', 'bee'])
    })

    it('return spelling', function () {
        assert.deepEqual(spelling("cake"), ['c', 'ca', 'cak', 'cake'])
    })

    it('return spelling', function () {
        assert.deepEqual(spelling("happy"), ['h', 'ha', 'hap', 'happ', 'happy'])
    })

    it('return spelling', function () {
        assert.deepEqual(spelling("eagerly"), ['e', 'ea', 'eag', 'eage', 'eager', 'eagerl', 'eagerly'])
    })

    it('return spelling', function () {
        assert.deepEqual(spelling("believe"), ['b', 'be', 'bel', 'beli', 'belie', 'believ', 'believe'])
    })

})