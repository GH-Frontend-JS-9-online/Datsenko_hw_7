const assert = require('chai').assert
const Circle = require('../src/js/classes/circle.js')

describe('Circle', function () {

    function round(number) {
        const factor = Math.pow(10, 5)
        return Math.round(number * factor) / factor
    }

    it('return Circle Area', function () {
        const circo = new Circle(20)
        assert.equal(round(circo.getArea()), 1256.63706)
    })

    it('return Circle Perimetr', function () {
        const circo = new Circle(20)
        assert.equal(round(circo.getPerimeter()), 125.66371)
    })

    it('return Circle Area', function () {
        const circo1 = new Circle(2)
        assert.equal(round(circo1.getArea()), 12.56637)
    })

    it('return Circle Perimetr', function () {
        const circo1 = new Circle(2)
        assert.equal(round(circo1.getPerimeter()), 12.56637)
    })

    it('return Circle Area', function () {
        const circo2 = new Circle(4.4)
        assert.equal(round(circo2.getArea()), 60.82123)
    })

    it('return Circle Perimetr', function () {
        const circo2 = new Circle(4.4)
        assert.equal(round(circo2.getPerimeter()),  27.64602)
    })

})