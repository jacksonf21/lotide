const assertArraysEqual = require('./assertArraysEqual');

const flatten = (nestedArray) => {
  return nestedArray.reduce((a, b) => a.concat(b), []);
};

module.exports = flatten;
/*
assertArraysEqual(flatten([1,2,[3]]),[1,2,3]);
assertArraysEqual(flatten([1,2,[3,3,4]]),[1,2,3,3,4]);
assertArraysEqual(flatten([]),[]);
assertArraysEqual(flatten([1,2,[3]]),[1,2,3]);
*/

/*
const flatten = (nestedArray) => {
  let newArray = [];

  nestedArray.forEach(value => {
    if (value.isArray() === true) {
      newArray.push(value);
    }
    return newArray;
  });
  //read each element, if it is an object, or check isArray?
    //
  return 
};
*/
