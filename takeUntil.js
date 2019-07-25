
const eqArrays = (arr1, arr2) => {
  
  //test array1 array2 values are the same as per index

  if (arr1.length !== arr2.length) {
    return false;
  } else {
    let bool = arr1.every((value, index) => {
      return arr1[index] === arr2[index] &&
      arr1.length === arr2.length;
    });  
    return bool;
  }
};

const assertArraysEqual = (arr1, arr2) => {
  if (eqArrays(arr1, arr2) === true) {
    console.log(`✅️✅️✅️ Array Assertion Passed: "${arr1}" === "${arr2}"`);
  }
  else if (eqArrays(arr1, arr2) !== true) {
    console.log(`🛑️🛑️🛑️ Array Assertion Failed: "${arr1}" !== "${arr2}"`);
  }
};

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

//TEST CASES
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];

assertArraysEqual(takeUntil([1,2,3,2], i => i !== 3),[1,2]);
assertArraysEqual(takeUntil([1,2,3,2], i => i % 2 === 0),[]);
assertArraysEqual(takeUntil([2,2,3,2], i => i % 2 === 0),[2,2]);

assertArraysEqual(takeUntil(data2, x => x !== ','),["I've", "been", "to", "Hollywood"]);


