//i: two arrays
//o: true or false
//each index at value must be a perfect match ===
const eqArrays = (arr1, arr2) => {
  
  //test array1 array2 values are the same as per index
  let bool = arr1.every((value, index) => {
    if (Array.isArray(arr1[index]) && Array.isArray(arr2[index])) {
      return eqArrays(arr1[index], arr2[index]);
    } else {
      return arr1[index] === arr2[index] &&
      arr1.length === arr2.length;
    }
  });
  return bool;
};

module.exports = eqArrays;
/*
assertEqual(eqArrays([], []), true);
assertEqual(eqArrays([1,2,3], [1,2,'3']), false);
assertEqual(eqArrays([1,'2',3], [1,2,'3']), false);
assertEqual(eqArrays([1,2,3], [1,2,3,4]), false);
assertEqual(eqArrays([1,2,3,4], [1,2,3]), false);
*/