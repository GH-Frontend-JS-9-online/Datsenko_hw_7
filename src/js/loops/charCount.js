function charCount(myChar, str) {
    let amountMyChar = 0
    for (let i = 0; i < str.length; i++) {
       if (str[i] === myChar) {
           amountMyChar++
       }        
    }
    return amountMyChar
}

module.exports = charCount