function makePlusFunction(baseNum) {
	return function(secondNum) {
		return baseNum + secondNum
	}
}

module.exports = makePlusFunction