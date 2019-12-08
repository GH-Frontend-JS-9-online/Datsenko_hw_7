function findLargestNums(array) {
    return array.map(innerArray => Math.max(...innerArray))
}

module.exports = findLargestNums