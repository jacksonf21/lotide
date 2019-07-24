const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅️✅️✅️ Assertion Passed: "${actual}" === "${expected}"`);
  } else {
    console.log(`🛑️🛑️🛑️ Assertion Failed: "${actual}" !== "${expected}"`);
  }
};

//i: string or array
//o: object counting each character in string or from array 

//check if string or array
  //if not string (assume array) => take array and join
  //if string remove all spaces

//check if key exists in obj, if not set key and set value to 1
//return object

const countLetters = (input) => {
  let obj = {};
  let word = '';

  if (Object.keys.length === 0) {
    return obj;
  } else if (Array.isArray(input)) {
    input = input.join('');
  } else if (typeof input !== 'string'){
    input = input.replace(/\s/g, '');
  }

  for (let item of input) {
    obj[item] ? obj[item] += 1 : obj[item] = 1;
  }
  
  return obj;
};

assertEqual(countLetters('test')['t'], 2);
assertEqual(countLetters('test')['e'], 1);
assertEqual(countLetters('test')['s'], 1);

assertEqual(countLetters(['test', 'test'])['t'], 4);
assertEqual(countLetters(['test', 'test'])['e'], 2);
assertEqual(countLetters(['test', 'test'])['s'], 2);
