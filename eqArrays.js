const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅️✅️✅️ Assertion Passed: "${actual}" === "${expected}"`);
  } else {
    console.log(`🛑️🛑️🛑️ Assertion Failed: "${actual}" !== "${expected}"`);
  }
};

//i: two arrays
//o: true or false
//each index at value must be a perfect match ===
const eqArrays = (arr1, arr2) => {
  
  //test array1 array2 values are the same as per index
  let bool = arr1.every((value, index) => {
    return arr1[index] === arr2[index] &&
    arr1.length === arr2.length;
  });
  return bool;
};

assertEqual(eqArrays([1,2,3], [1,2,3]), true);
assertEqual(eqArrays([], []), true);
assertEqual(eqArrays([1,2,3], [1,2,'3']), false);
assertEqual(eqArrays([1,'2',3], [1,2,'3']), false);
assertEqual(eqArrays([1,2,3], [1,2,3,4]), false);
assertEqual(eqArrays([1,2,3,4], [1,2,3]), false);