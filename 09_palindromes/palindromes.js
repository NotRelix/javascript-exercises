const palindromes = function (word) {
  const alphanumeric = 'abcdefghijklmnopqrstuvwxyz0123456789';
  const filtered = word
    .toLowerCase()
    .split('')
    .filter(letter => alphanumeric.includes(letter))
    .join('')
                    
  return filtered === filtered.split('').reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
