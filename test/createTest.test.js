const assert = require('chai').assert
const createTest = require('../src/js/scope/createTest.js')

describe('createTest', function () {

    it('return createTest', function () {
        assert.equal(createTest("a", "b"), 'Test.assertEquals(createTest("a", "b"), "ab")')
    })

    it('return createTest', function () {
        assert.equal(createTest("Te", "st"), 'Test.assertEquals(createTest("Te", "st"), "Test")')
    })

    it('return createTest', function () {
        assert.equal(createTest("1", "1"), 'Test.assertEquals(createTest("1", "1"), "11")')
    })

    it('return createTest', function () {
        assert.equal(createTest(1, 1), 'Test.assertEquals(createTest(1, 1), 2)')
    })

    it('return createTest', function () {
        assert.equal(createTest(99, 1), 'Test.assertEquals(createTest(99, 1), 100)')
    })

    it('return createTest', function () {
        assert.equal(createTest(0, 0), 'Test.assertEquals(createTest(0, 0), 0)')
    })

    it('return createTest', function () {
        assert.equal(createTest([1], [1]), 'Test.assertSimilar(createTest([1], [1]), [1, 1])')
    })

    it('return createTest', function () {
        assert.equal(createTest(["1"], ["1"]), 'Test.assertSimilar(createTest(["1"], ["1"]), ["1", "1"])')
    })

    it('return createTest', function () {
        assert.equal(createTest(["String"], ["String"]), 'Test.assertSimilar(createTest(["String"], ["String"]), ["String", "String"])')
    })

})