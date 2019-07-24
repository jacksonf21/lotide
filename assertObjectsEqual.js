const eqArrays = (arr1, arr2) => {
  
  //test array1 array2 values are the same as per index
  let bool = arr1.every((value, index) => {
    return arr1[index] === arr2[index] &&
    arr1.length === arr2.length;
  });
  return bool;
};

const eqObjects = (object1, object2) => {
  let keyOne = Object.keys(object1);
  let keyTwo = Object.keys(object2);

  if (keyOne.length !== keyTwo.length) {
    return false;
  } else {
    for (let x of keyOne) {
      if (Array.isArray(object1[x]) && Array.isArray(object2[x])) {
        return eqArrays(object1[x], object2[x]);
      } else {
        if (object1[x] === object2[x]) {
          continue;
        } else {
          return false;
        }
      }
    }
    return true;
  }
};

//i: function that returns an object
//o: 

const assertObjectsEqual = (actual, expected) => {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected) === true) {
    console.log(`✅️✅️✅️ Assertion Objects Passed: "${inspect(actual)}" === "${inspect(expected)}"`);
  } else {
    console.log(`🛑️🛑️🛑️ Assertion Objects Failed: "${inspect(actual)}" !== "${inspect(expected)}"`);
  }
};
assertObjectsEqual({'a': 1, 'b': 2},{'a': 1, 'b': 2});
assertObjectsEqual({'a': 1, 'b': [2, 1]},{'b': [2, 1], 'a': 1});
assertObjectsEqual({'a': 1, 'b': [2, 1]},{'b': [2, 1]});

assertObjectsEqual({'a': 1, 'b': [1, 2]},{'b': [2, 1]});
assertObjectsEqual({},{});