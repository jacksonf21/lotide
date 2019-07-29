const assertArraysEqual = require('./assertArraysEqual');

//i: array
//o: middle elements of the array (1 if odd) (2 if even)
const middle = (array) => {
  let middleArray = [];
  if (array.length <= 2) {
    return middleArray;
  }
  else if (array.length % 2 === 0) {
    middleArray.push(array[array.length / 2 - 1]);
    middleArray.push(array[array.length / 2]);
  } else {
    middleArray.push(array[Math.floor(array.length / 2)]);
  }
  return middleArray;
};

module.exports = middle;
