module.exports = function toReadable(number) {
	if (number === 1000) {
		return 'one thousand'
	} else if (number === 0) {
		return 'zero'
	}
	let units = '';
	let dozens = '';
	let hundreds = '';

	if (number / 100 > 0) {
		if (Math.trunc(number / 100) === 1) {
			hundreds += 'one hundred'
		} else if (Math.trunc(number / 100) === 2) {
			hundreds += 'two hundred'
		} else if (Math.trunc(number / 100) === 3) {
			hundreds += 'three hundred'
		} else if (Math.trunc(number / 100) === 4) {
			hundreds += 'four hundred'
		} else if (Math.trunc(number / 100) === 5) {
			hundreds += 'five hundred'
		} else if (Math.trunc(number / 100) === 6) {
			hundreds += 'six hundred'
		} else if (Math.trunc(number / 100) === 7) {
			hundreds += 'seven hundred'
		} else if (Math.trunc(number / 100) === 8) {
			hundreds += 'eight hundred'
		} else if (Math.trunc(number / 100) === 9) {
			hundreds += 'nine hundred'
		}
		if (number % 100 % 10 > 0) {
			if (number % 100 % 10 === 1) {
				units += 'one'
			} else if (number % 100 % 10 === 2) {
				units += 'two'
			} else if (number % 100 % 10 === 3) {
				units += 'three'
			} else if (number % 100 % 10 === 4) {
				units += 'four'
			} else if (number % 100 % 10 === 5) {
				units += 'five'
			} else if (number % 100 % 10 === 6) {
				units += 'six'
			} else if (number % 100 % 10 === 7) {
				units += 'seven'
			} else if (number % 100 % 10 === 8) {
				units += 'eight'
			} else if (number % 100 % 10 === 9) {
				units += 'nine'
			}
		}
		if (number % 100 > 0) {
			if (Math.floor((number % 100) / 10) === 1) {
				units = ''
				if (number % 100 === 10) {
					dozens += 'ten'
				} else if (number % 100 === 11) {
					dozens += 'eleven'
				} else if (number % 100 === 12) {
					dozens += 'twelve'
				} else if (number % 100 === 13) {
					dozens += 'thirteen'
				} else if (number % 100 === 14) {
					dozens += 'fourteen'
				} else if (number % 100 === 15) {
					dozens += 'fifteen'
				} else if (number % 100 === 16) {
					dozens += 'sixteen'
				} else if (number % 100 === 17) {
					dozens += 'seventeen'
				} else if (number % 100 === 18) {
					dozens += 'eighteen'
				} else if (number % 100 === 19) {
					dozens += 'nineteen'
				}
			}
			if (Math.floor((number % 100) / 10) === 2) {
				dozens += 'twenty'
			} else if (Math.floor((number % 100) / 10) === 3) {
				dozens += 'thirty'
			} else if (Math.floor((number % 100) / 10) === 4) {
				dozens += 'forty'
			} else if (Math.floor((number % 100) / 10) === 5) {
				dozens += 'fifty'
			} else if (Math.floor((number % 100) / 10) === 6) {
				dozens += 'sixty'
			} else if (Math.floor((number % 100) / 10) === 7) {
				dozens += 'seventy'
			} else if (Math.floor((number % 100) / 10) === 8) {
				dozens += 'eighty'
			} else if (Math.floor((number % 100) / 10) === 9) {
				dozens += 'ninety'
			}
		}
	}

	if (hundreds === '' && dozens === '') {
		return units
	} else if (hundreds === '' && units === '') {
		return dozens
	} else if (dozens === '' && units === '') {
		return hundreds
	} else if (hundreds === '') {
		return dozens + ' ' + units
	} else if (dozens === '') {
		return hundreds + ' ' + units
	} else if (units === '') {
		return hundreds + ' ' + dozens
	} else {
		return hundreds + ' ' + dozens + ' ' + units
	}
}