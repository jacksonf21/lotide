const eqObjects = require('./eqObjects');

const assertObjectsEqual = (actual, expected) => {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected) === true) {
    console.log(`✅️✅️✅️ Assertion Objects Passed: "${inspect(actual)}" === "${inspect(expected)}"`);
  } else {
    console.log(`🛑️🛑️🛑️ Assertion Objects Failed: "${inspect(actual)}" !== "${inspect(expected)}"`);
  }
};

module.exports = assertObjectsEqual;

/*
assertObjectsEqual({'a': 1, 'b': 2},{'a': 1, 'b': 2});
assertObjectsEqual({'a': 1, 'b': [2, 1]},{'b': [2, 1], 'a': 1});
assertObjectsEqual({'a': 1, 'b': [2, 1]},{'b': [2, 1]});

assertObjectsEqual({'a': 1, 'b': [1, 2]},{'b': [2, 1]});
assertObjectsEqual({},{});
*/