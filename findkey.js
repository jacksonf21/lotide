const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅️✅️✅️ Assertion Passed: "${actual}" === "${expected}"`);
  } else {
    console.log(`🛑️🛑️🛑️ Assertion Failed: "${actual}" !== "${expected}"`);
  }
};

const findKey = (obj, callback) => {
  let keys = Object.keys(obj);

  for (let key of keys) {
    if (callback(obj[key])) {
      return key;
    }
  }
};

const obj1 = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

assertEqual(findKey(obj1, x => x.stars === 2), 'noma');
assertEqual(findKey(obj1, x => x.stars === 3), 'Akaleri');
assertEqual(findKey(obj1, x => x.stars < 2), 'Blue Hill');
assertEqual(findKey(obj1, x => x), 'Blue Hill');
