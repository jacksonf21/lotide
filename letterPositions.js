const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅️✅️✅️ Assertion Passed: "${actual}" === "${expected}"`);
  } else {
    console.log(`🛑️🛑️🛑️ Assertion Failed: "${actual}" !== "${expected}"`);
  }
};

const letterPositions = (string) => {
  const results = {};
  
  for (let char of string) {
    for (let i = 0; i < string.length; i++) {
      if (!results[char]) {
        results[char] = [];
      }
      if (char === string[i] && !results[char].includes(i)) {
        results[char].push(i);
      } 
    }
  }
  return results;
};

assertEqual(letterPositions('test')['t'][0],0);
assertEqual(letterPositions('test')['t'][1],3);