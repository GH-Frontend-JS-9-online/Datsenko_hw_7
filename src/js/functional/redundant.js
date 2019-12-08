function redundant(str) {
	return function() {
		return str
	}
}

module.exports = redundant