function equal(a, b, c) {
    if (a === b & a === c) {
        return 3
    } else if (a != b & a != c & b != c) {
        return 0
    } else {
        return 2
    }
}

module.exports = equal