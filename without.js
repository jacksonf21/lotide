const assertArraysEqual = require('./assertArraysEqual');

const without = (source, itemsToRemove) => {
  let newArr = [];

  //check each element in source against each element in itemsToRemove
  source.forEach(i => {
    if (!itemsToRemove.includes(i) && !newArr.includes(i)) {
      newArr.push(i);
    }
  });

  return newArr; 

};

module.exports = without;
/*
console.log(without([1,2,3],['1']));
console.log(without([1,2,3],['1']));
*/

//TEST CASES
/*
assertArraysEqual(without([1,2,3],[1]), [2,3]);
assertArraysEqual(without([1,2,3],[1,2,3]), []);
assertArraysEqual(without([1,2,3],['1',2,3]), [1]); 
assertArraysEqual(without([1,2,3],['1',2,3]), []); 
*/