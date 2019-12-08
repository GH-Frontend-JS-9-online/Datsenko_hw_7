function isSymmetrical(num) {
    let reverse = num.toString().split('').reverse().join('')
    return num.toString() === reverse
}

module.exports = isSymmetrical

