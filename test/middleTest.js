const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

//TEST CASES
assertArraysEqual(middle([1,2]),[]);
assertArraysEqual(middle([1]),[]);
assertArraysEqual(middle([1,2,3]),[2]);
assertArraysEqual(middle([1,2,3,4]),[2,3]);
assertArraysEqual(middle([1,2,3,4,5]),[3]);
assertArraysEqual(middle([]),[]);