const assert = require('chai').assert
const identicalFilter = require('../src/js/arrays/identicalFilter.js')

describe('spelling', function () {

    it('return identicalFilter', function () {
        assert.deepEqual(identicalFilter(['aaaaaa', 'bc', 'd', 'eeee', 'xyz']),  ['aaaaaa', 'd', 'eeee'])
    })

    it('return identicalFilter', function () {
        assert.deepEqual(identicalFilter(['88', '999', '22', '545', '133']), ['88', '999', '22'])
    })

    it('return identicalFilter', function () {
        assert.deepEqual(identicalFilter(['xxxxo', 'oxo', 'xox', 'ooxxoo', 'oxo']), [])
    })

    it('return identicalFilter', function () {
        assert.deepEqual(identicalFilter(['aa', 'bb', 'cc', 'dd', 'ee']),  ['aa', 'bb', 'cc', 'dd', 'ee'])
    })

    it('return identicalFilter', function () {
        assert.deepEqual(identicalFilter(['aba', 'bcb', 'abb', 'bcc', 'eee']), ['eee'])
    })

    it('return identicalFilter', function () {
        assert.deepEqual(identicalFilter(['1', '2', '3']),  ['1', '2', '3'])
    })

})