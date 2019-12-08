function spelling(str) {
    let result = []
    str = str.split('')
    let step = ''
    for (let i = 0; i < str.length; i++) {
        step += str[i]
        result.push(step)
    }
    return result
}

module.exports = spelling

