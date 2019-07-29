const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');

console.log(eqArrays([1,[2,3],4], [1,[2,3],4]));
console.log(eqArrays([1,[2,[3,4]],4], [1,[2,[3,4]],4]));
console.log(eqArrays([[[[1]]]], [[[[1]]]]));
assertEqual(eqArrays([1,[2,[3,4]],4], [1,[2,[3,4]],4]), true);