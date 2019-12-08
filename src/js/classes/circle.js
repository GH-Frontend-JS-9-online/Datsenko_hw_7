class Circle {
    constructor(radius) {        
        this.radius = radius
    }

    getArea() {
        return (Math.PI * Math.pow(this.radius, 2))
    }

    getPerimeter() {
        return (2 * this.radius * Math.PI)
    }
}

module.exports = Circle