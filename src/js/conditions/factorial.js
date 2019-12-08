
function factorial(z) {
    if (z === 0) {
        return 1
    } else {
        return (z != 1) ? z * factorial(z - 1) : 1
    }    
}

module.exports = factorial

