
const assertArraysEqual = (arr1, arr2) => {
  
    //test array1 array2 values are the same as per index
    let bool = arr1.every((value, index) => {
      return arr1[index] === arr2[index] &&
      arr1.length === arr2.length;
    });

    //message return
    if (bool) console.log(`✅️✅️✅️ Array Assertion Passed: ${bool}`);
    else console.log(`🛑️🛑️🛑️ Array Assertion Failed: ${bool}`);
};

//TEST CASES
assertArraysEqual([1,2,3],[1,2,3]);
assertArraysEqual([1,2,3],[1,2,'3']);
assertArraysEqual([1,'2',3],[1,2,3]);
assertArraysEqual([],[]);
assertArraysEqual([1,2,3],[4,2,3,1]);
