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

const flatten = (nestedArray) => {
  return nestedArray.reduce((a, b) => a.concat(b), []);
};

assertArraysEqual(flatten([1,2,[3]]),[1,2,3]);
assertArraysEqual(flatten([1,2,[3,3,4]]),[1,2,3,3,4]);
assertArraysEqual(flatten([]),[]);
assertArraysEqual(flatten([1,2,[3]]),[1,2,3]);

/*
const flatten = (nestedArray) => {
  let newArray = [];

  nestedArray.forEach(value => {
    if (value.isArray() === true) {
      newArray.push(value);
    }
    return newArray;
  });
  //read each element, if it is an object, or check isArray?
    //
  return 
};
*/
