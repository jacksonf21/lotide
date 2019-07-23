
const eqArrays = (arr1, arr2) => {
  
<<<<<<< HEAD
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
=======
    //test array1 array2 values are the same as per index
    let bool = arr1.every((value, index) => {
      return arr1[index] === arr2[index] &&
      arr1.length === arr2.length;
    });
    return bool;
};

const assertArraysEqual = (bool) => {
  if (bool) console.log(`✅️✅️✅️ Array Assertion Passed: ${bool}`);
  else console.log(`🛑️🛑️🛑️ Array Assertion Failed: ${bool}`);
>>>>>>> a923633084609500445ea7618b112f56d13aaf40
};

//TEST CASES

<<<<<<< HEAD
assertArraysEqual([1,2,3],[1,2,3]);
assertArraysEqual([1,2,3],[1,2,'3']);
assertArraysEqual([1,'2',3],[1,2,3]);
assertArraysEqual([],[]);
assertArraysEqual([1,2,3],[4,1,2,3]);
=======
assertArraysEqual(eqArrays([1,2,3],[1,2,3]));
assertArraysEqual(eqArrays([1,2,3],[1,2,'3']));
assertArraysEqual(eqArrays([1,'2',3],[1,2,3]));
assertArraysEqual(eqArrays([],[]));
assertArraysEqual(eqArrays([1,2,3],[4,2,3,1]));
>>>>>>> a923633084609500445ea7618b112f56d13aaf40
