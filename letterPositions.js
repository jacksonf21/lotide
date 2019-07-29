const assertEqual = require('./assertEqual');

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

module.exports = letterPositions;
/*
assertEqual(letterPositions('test')['t'][0],0);
assertEqual(letterPositions('test')['t'][1],3);
*/