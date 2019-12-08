function reverseCase(str) {
    str = str.split('')
    for (let i = 0; i < str.length; i++) {
        let isUpperCase = str[i].toUpperCase() === str[i]
        if (!!isUpperCase) {
            str[i] = str[i].toLowerCase()
        } else {
            str[i] = str[i].toUpperCase()
        }
    }
    return str.join('')
}

module.exports = reverseCase



