const reverseString = function(word) {
    let newWord = '';
    for (let x = word.length - 1; x >= 0; x--) {
        newWord += word[x];
    }
    return newWord;
};

// Do not edit below this line
module.exports = reverseString;
