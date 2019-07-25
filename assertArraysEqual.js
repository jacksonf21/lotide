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
//TEST CASES

assertArraysEqual([1,2,3],[1,2,3]);
assertArraysEqual([1,2,3],[1,2,'3']);
assertArraysEqual([1,'2',3],[1,2,3]);
assertArraysEqual([],[]);
assertArraysEqual([1,2,3],[4,1,2,3]);
