const magnitude = vector => {
    if (vector.length === 0) {
        return 0
    } else {
        let result = vector.map(num => Math.pow(num, 2))
            .reduce(((accumulator, currentValue) =>
                accumulator + currentValue))
        return Math.sqrt(result)
    }
}

module.exports = magnitude