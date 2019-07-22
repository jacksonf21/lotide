const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅️✅️✅️ Assertion Passed: "${actual}" === "${expected}"`);
  } else {
    console.log(`🛑️🛑️🛑️ Assertion Failed: "${actual}" !== "${expected}"`);
  }
};

const tail = function(arr) {
  let newArr = [];
  for (let i = 1; i < arr.length; i++) {
    newArr.push(arr[i]);
  }
  return newArr;
};

//testing validity of tail
const result = tail(['Hello', 'Lighthouse', 'Labs']);
assertEqual(result[0], 'Lighthouse');
assertEqual(result[1], 'Labs');

//testing non modification of original array
const words = ['Yo yo', 'Lighthouse', 'Labs'];
tail(words);
assertEqual(words.length, 3);

//testing for a single element
const single = ['Yes'];
assertEqual(tail(single).length, 0);

//testing for an empty array
const empty = [];
assertEqual(tail(empty)[0], undefined);