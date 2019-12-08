function isAvgWhole(arr) {
    let sumNumbers = arr.reduce((accumulator, currentValue) => accumulator + currentValue)
    return Number.isInteger(sumNumbers / arr.length)
}

module.exports = isAvgWhole