# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @jacksonf21/lotide`

**Require it:**

`const _ = require('@jacksonf21/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

*  `assertArraysEqual(array1, array2)`  : returns a more verbose statement of the comparison of array1 and array2 
*  `assertEqual(value1, value2)`        : returns a more verbose statement of the comparison of value1 and value2
*  `assertObjectsEqual(obj1, obj2)`     : returns a more verbose statement of the comparison of object1 and object2
*  `countLetters(string)`               : returns an object with key and value pairs counting each letter 
*  `countOnly(object1, object2)`        : returns an object tallying the values of object1 based on object2's same value as a key with its value=true 
*  `eqArrays(array1, array2)`           : returns boolean value after comparing array1 and array2
*  `eqObjects(object1, object2)`        : returns boolean value after comparing object1 and object2
*  `findkey(object, function)`          : returns key from the object based off the function's logic statement
*  `findKeyByValue(object, value)`      : returns key from the object based off the properties value
*  `flatten(array)`                     : returns an array that flattens one level of array nesting per element
*  `head(array)`                        : returns the first element in an array
*  `letterPositions(string)`            : returns an object with key pair values, where values are arrays counting the indexes of each key in the string 
*  `map(array, function)`               : returns an array's elements based off the callback function
*  `middle(array)`                      : returns an array with only middle values, one element if odd, two elements if even
*  `tail(array)`                        : returns a new array without the first element of the array
*  `takeUntil(array, function)`         : returns an array with each element until the first match of the callback function
*  `without(array1, array2)`            : returns an array by taking array1 and including any values that are not within array2