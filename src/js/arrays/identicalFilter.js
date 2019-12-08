function identicalFilter(arr) {
    let result = []    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length === 1) {
            result.push(arr[i])
        } 
        else if (arr[i].length === 2 & arr[i][0] === arr[i][1]) {
            result.push(arr[i])
        }
        else if (!checDuplicate(arr[i])) {
            result.push(arr[i])
        }
    }
    return result
}

function checDuplicate(str) {    
    let duplicate = false
    let firstSymbol = str[0]
    let restOfStr = str.substring(1)    
    for (let i = 0; i < restOfStr.length; i++) {
        if (restOfStr[i] !== firstSymbol) {
            duplicate = true
        }        
    }
    return duplicate
}

module.exports = identicalFilter

