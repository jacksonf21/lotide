
const eqArrays = (arr1, arr2) => {
  
  //test array1 array2 values are the same as per index
  let bool = arr1.every((value, index) => {
    return arr1[index] === arr2[index] &&
    arr1.length === arr2.length;
  });
  return bool;
};

const assertArraysEqual = (arr1, arr2) => {
  if (eqArrays(arr1, arr2) === true) console.log(`✅️✅️✅️ Array Assertion Passed: "${arr1}" === "${arr2}"`);
  else if (eqArrays(arr1, arr2) !== true) console.log(`🛑️🛑️🛑️ Array Assertion Failed: "${arr1}" !== "${arr2}"`);
};
//i: array
//o: middle elements of the array (1 if odd) (2 if even)
  //o: (if len < 2 return '[]');

//
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

//TEST CASES
assertArraysEqual(middle([1,2]),[]);
assertArraysEqual(middle([1]),[]);
assertArraysEqual(middle([1,2,3]),[2]);
assertArraysEqual(middle([1,2,3,4]),[2,3]);
assertArraysEqual(middle([1,2,3,4,5]),[3]);
assertArraysEqual(middle([]),[]);
