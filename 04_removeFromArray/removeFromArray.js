const removeFromArray = function(arr, ...num) {
  const newArr = [];
  outer:
  for (let x = 0; x < arr.length; x++) {
    for (let y = 0; y < num.length; y++) {
      if (arr[x] === num[y]) 
        continue outer;
    }
    newArr.push(arr[x]);
  }
  return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
