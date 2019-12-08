function split(str) {
    let vowels = ``
    let consonants = ``   
	for (let i = 0; i < str.length; i++) { 
        if (isVowel(str[i])) {
            vowels += str[i]
        } else {
            consonants += str[i]
        }        
    }
    return vowels + consonants
}
function isVowel(symbol) {
    const vowels = 'aeiou'
    return vowels.includes(symbol)
}

module.exports = split




