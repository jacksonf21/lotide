const assert = require('chai').assert;
const tail = require('../tail');


describe('tail test', () => {
  it('returns b, c for [a, b, c]', () => {
    assert.deepEqual(tail(['a','b','c']),['b','c']);
  });
  it('returns a, b, c for [a, b, c]', () => {
    const data = ['a', 'b', 'c'];
    tail(data);
    assert.deepEqual(data,['a', 'b','c']);
  });

  it('returns "" for [a]', () => {
    assert.deepEqual(tail(['a']),[]);
  });

  it('returns undefined for []', () => {
    assert.deepEqual(tail([]),[]);
  });

});