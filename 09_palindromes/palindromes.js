const palindromes = function (word) {
  let left = 0;
  let right = word.length - 1;
  while (left < right) {
    while (!word[left].match(/[0-9a-zA-Z]/)) {
      left++;
    }
    while (!word[right].match(/[0-9a-zA-Z]/)) {
      right--;
    }
    if (word[left].toLowerCase() !== word[right].toLowerCase()) {
      return false;
    } 
    left++;
    right--;
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
