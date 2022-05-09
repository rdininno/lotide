const chai = require('chai');
const eqArrays = require('../eqArrays.js');
const assert = chai.assert;

const eqObjects = require('../eqArrays.js');

describe('eqArrays', function () {
  it("Should return true if arrays are equal", function() {
    let array1 = ['a'];
    let array2 = ['a'];

    assert.isTrue(eqArrays(array1, array2));
  });
  it("Should return false if arrays are not equal", function() {
    let array1 = ['b'];
    let array2 = ['a'];

    assert.isFalse(eqArrays(array1, array2));
  });
  it("Should return true if arrays are equal with nested arrays", function() {
    let array1 = ['a', ['b']];
    let array2 = ['a', ['b']];

    assert.isTrue(eqArrays(array1, array2));
  });
  it("Should return false if arrays are not equal with nested arrays", function() {
    let array1 = ['a', ['b']];
    let array2 = ['a', ['c']];

    assert.isFalse(eqArrays(array1, array2));
  });
  it("Should return true if arrays are equal with multiple nested arrays", function() {
    let array1 = ['a', ['b'], ['c', ['d']]];
    let array2 = ['a', ['b'], ['c', ['d']]];

    assert.isTrue(eqArrays(array1, array2));
  });
  it("Should return false if arrays are not equal with multiple nested arrays", function() {
    let array1 = ['a', ['b'], ['c', ['d']]];
    let array2 = ['a', ['e'], ['c', ['d']]];

    assert.isFalse(eqArrays(array1, array2));
  });

});