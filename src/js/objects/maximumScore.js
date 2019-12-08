function maximumScore(tileHand) {
    let result = []
    for (const item in tileHand) {
        for (const key in tileHand[item]) {
            if (key === 'score') {                
                result.push(tileHand[item][key])
            }
        }        
    }
    return result.reduce((accumulator, currentValue) => accumulator + currentValue)
}

module.exports = maximumScore
