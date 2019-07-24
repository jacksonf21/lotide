const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅️✅️✅️ Assertion Passed: "${actual}" === "${expected}"`);
  } else {
    console.log(`🛑️🛑️🛑️ Assertion Failed: "${actual}" !== "${expected}"`);
  }
};

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

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
//console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
//console.log(eqObjects(cd, cd2)); // => false


assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), false);

assertEqual(eqObjects(cd, dc), true);
assertEqual(eqObjects(cd, cd2), false);
