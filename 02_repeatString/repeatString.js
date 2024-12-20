const repeatString = function(word, count) {
	if (count < 0) {
		return 'ERROR';
	}

	let newWord = '';
	for (let x = 0; x < count; x++) {
		newWord += word;
	}
	
	return newWord;
};

// Do not edit below this line
module.exports = repeatString;
