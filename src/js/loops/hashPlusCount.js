function hashPlusCount(str) {    
    let hash = 0
    let plus = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '#') {
            hash++
        }
        else if (str[i] === '+') {
            plus++
        }        
    }    
    return [hash, plus]
}

module.exports = hashPlusCount


