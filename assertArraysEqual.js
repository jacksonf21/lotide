const eqArrays = require('./eqArrays');

const assertArraysEqual = (arr1, arr2) => {
  if (eqArrays(arr1, arr2) === true) {
    console.log(`✅️✅️✅️ Array Assertion Passed: "${arr1}" === "${arr2}"`);
  }
  else if (eqArrays(arr1, arr2) !== true) {
    console.log(`🛑️🛑️🛑️ Array Assertion Failed: "${arr1}" !== "${arr2}"`);
  }
};

module.exports = assertArraysEqual;
//TEST CASES

