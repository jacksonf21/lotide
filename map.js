const assertArraysEqual = require('./assertArraysEqual');

const map = (array, callback) => {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;

//TEST CASES
/*
assertArraysEqual(map(words, word => word[0]),['g','c','t','m','t']);
assertArraysEqual(map(words, word => word + 'y'),["groundy", "controly", "toy", "majory", "tomy"]);

assertArraysEqual(map(num, num => num * 2),[2,4,6,8,10]);
*/
// assertArraysEqual([1,2,3],[1,2,'3']);
// assertArraysEqual([1,'2',3],[1,2,3]);
// assertArraysEqual([],[]);
// assertArraysEqual([1,2,3],[4,1,2,3]);
