const assertArraysEqual = require('./assertArraysEqual');

//i: source array, callback function
  //callback takes in only 1 parameter
//o: slice of array until the first truthy value 

const takeUntil = (array, callback) => {
  const retArray = [];
  
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i]) !== false) {
      retArray.push(array[i]);
    } else {
      break;
    }
  }
  return retArray;
};

module.exports = takeUntil;

//TEST CASES
/*
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];

assertArraysEqual(takeUntil([1,2,3,2], i => i !== 3),[1,2]);
assertArraysEqual(takeUntil([1,2,3,2], i => i % 2 === 0),[]);
assertArraysEqual(takeUntil([2,2,3,2], i => i % 2 === 0),[2,2]);

assertArraysEqual(takeUntil(data2, x => x !== ','),["I've", "been", "to", "Hollywood"]);
*/