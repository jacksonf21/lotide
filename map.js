const words = ["ground", "control", "to", "major", "tom"];
const num = [1, 2, 3, 4, 5];

const map = (array, callback) => {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
console.log(results1);


const eqArrays = (arr1, arr2) => {
  
  //test array1 array2 values are the same as per index
  let bool = arr1.every((value, index) => {
    return arr1[index] === arr2[index] &&
    arr1.length === arr2.length;
  });
  return bool;
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

assertArraysEqual(map(words, word => word[0]),['g','c','t','m','t']);
assertArraysEqual(map(words, word => word + 'y'),["groundy", "controly", "toy", "majory", "tomy"]);

assertArraysEqual(map(num, num => num * 2),[2,4,6,8,10]);
// assertArraysEqual([1,2,3],[1,2,'3']);
// assertArraysEqual([1,'2',3],[1,2,3]);
// assertArraysEqual([],[]);
// assertArraysEqual([1,2,3],[4,1,2,3]);
