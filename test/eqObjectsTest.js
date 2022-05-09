const chai = require('chai');
const assert = chai.assert;

const eqObjects = require('../eqObjects.js');

describe('eqObjects', function () {
  it("Should return true is the objects are equal", function() {
    let obj1 = {a: 'test'};
    let obj2 = {a: 'test'};

    assert.isTrue(eqObjects(obj1, obj2));
  });
  it("should return false if the objects are not equal", function() {
    let obj1 = {a: 'test'};
    let obj2 = {a: 'carrotcake'}

    assert.isFalse(eqObjects(obj1, obj2));
  });
  it("should return true if there are objects nested inside and are equal", function () {
    let obj1 = {a: {b: 'test'}};
    let obj2 = {a: {b: 'test'}};

    assert.isTrue(eqObjects(obj1, obj2));
  });
  it("should return false if there are objects nested inside and are not equal", function () {
    let obj1 = {a: {b: 'test'}};
    let obj2 = {a: {b: 'carrotcake'}};

    assert.isFalse(eqObjects(obj1, obj2));
  });
  it("Should return false if objects are different sizes", function () {
    const object1 = {a: 'test'}
    const object2 = {a: 'carrotcake', b: 'stringCheese'}

    assert.isFalse(eqObjects(object1, object2))
  });

});