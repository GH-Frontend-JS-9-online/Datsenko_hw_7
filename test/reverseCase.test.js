const assert = require('chai').assert
const reverseCase = require('../src/js/loops/reverseCase.js')


describe('reverseCase', function () {

    it('return reverseCase', function () {
        assert.equal(reverseCase('Happy Birthday'), 'hAPPY bIRTHDAY')
    })

    it('return reverseCase', function () {
        assert.equal(reverseCase('MANY THANKS'), 'many thanks')
    })

    it('return reverseCase', function () {
        assert.equal(reverseCase('sPoNtAnEoUs'), 'SpOnTaNeOuS')
    })

    it('return reverseCase', function () {
        assert.equal(reverseCase('eXCELLENT, yOuR mAJESTY'), 'Excellent, YoUr Majesty')
    })   

})