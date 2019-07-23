
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

const without = (source, itemsToRemove) => {
  let newArr = [];

  //check each element in source against each element in itemsToRemove
  //
  //

  for (let i = 0; i < source.length; i++) {
    for (let k = 0; k < itemsToRemove; k++) {
      if (source[i] !== itemsToRemove[k] && !newArr.includes(source[i])) {
        newArr.push(source[i]);
      }
    }
  }
  return newArr;

};

console.log(without([1,2,3],['1']));

//TEST CASES
assertArraysEqual(without([1,2,3],[1]), [2,3]);
assertArraysEqual(without([1,2,3],[1,2,3]), []);
assertArraysEqual(without([1,2,3],['1',2,3]), [1]); 