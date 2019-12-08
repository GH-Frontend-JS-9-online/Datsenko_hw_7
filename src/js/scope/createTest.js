function createTest(a, b) {
	if (typeof a === 'string' & typeof b === 'string') {
		return  `Test.assertEquals(createTest("${a}", "${b}"), "${a + b}")`
	}
	else if (typeof a === 'number' & typeof b === 'number') {
		return  `Test.assertEquals(createTest(${a}, ${b}), ${a + b})`			 
	}
	else if (Array.isArray(a) & Array.isArray(b)) {
		if (a.every(checkNumber) & b.every(checkNumber)) {
			return  `Test.assertSimilar(createTest([${a}], [${b}]), [${a}, ${a}])`	
		}
		else if (a.every(checkString) & b.every(checkString)) {
			return  `Test.assertSimilar(createTest(["${a}"], ["${b}"]), ["${a}", "${b}"])`	
		}
	}
}

function checkString(val) {
	return typeof val === 'string'
}

function checkNumber(val) {
	return typeof val === 'number'
}


module.exports = createTest








