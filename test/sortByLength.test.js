const assert = require('chai').assert
const sortByLength = require('../src/js/arrays/sortByLength.js')


describe('sortByLength', function () {

    it('return sortByLength', function () {
        assert.deepEqual(sortByLength(["Google", "Apple", "Microsoft"]), ["Apple", "Google", "Microsoft"])
    })

    it('return sortByLength', function () {
        assert.deepEqual(sortByLength(["Leonardo", "Michelangelo", "Raphael", "Donatello"]), ["Raphael", "Leonardo", "Donatello", "Michelangelo"])
    })

    it('return sortByLength', function () {
        assert.deepEqual(sortByLength(["Turing", "Einstein", "Jung"]), ["Jung", "Turing", "Einstein"])
    })

    it('return sortByLength', function () {
        assert.deepEqual(sortByLength(["Tatooine", "Hoth", "Yavin", "Dantooine"]), ["Hoth", "Yavin", "Tatooine", "Dantooine"])
    })

    it('return sortByLength', function () {
        assert.deepEqual(sortByLength(["Mario", "Bowser", "Link"]), ["Link", "Mario", "Bowser"])
    })

})