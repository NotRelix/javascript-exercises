const sumAll = function(a, b) {
  let error = '';
  if (a < 0 || b < 0) error = 'ERROR';
  if (Math.floor(a) !== a || Math.floor(b) !== b) error = 'ERROR';
  if (error) return error 
  let sum = 0;
  if (a > b) {
    const temp = a;
    a = b;
    b = temp;
  }
  for (let x = a; x <= b; x++) {
    sum += x;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
