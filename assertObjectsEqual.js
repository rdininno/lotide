const eqArrays = (a, b) => {
  let isEqual = false;

  if (a.length !== b.length) {
    return false;
  }

  for (let i = 0; i < a.length; i++) {


    if (a[i] === b[i]) {
      isEqual = true;
    } else if (a[i] !== b[i]) {
      return false;
    }
  }

  return isEqual;
};

const eqObjects = (object1, object2) => {
  const keysObject1 = Object.keys(object1);
  const keysObject2 = Object.keys(object2);

  //compare array length, if different return false
  if (keysObject1.length !== keysObject2.length) {
    return false;
  }

  //compare values of keys in each object
  for (let key of keysObject1) {
    //if both arrays, compare
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      return eqArrays(object1[key], object2[key]);
    }

    // if key values are different return false
    if (object1[key] !== object2[key]) {
      return false;
    }
  }

  return true;
};

const assertObjectsEqual = (actual, expected) => {
  const inspect = require('util').inspect;

  if (eqObjects(actual, expected)) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🚩🚩🚩 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};


assertObjectsEqual({ a: "1", b: "2", c: "3" }, { a: "1", b: "2", c: "3" }); // true
assertObjectsEqual({ a: "1", b: "2", c: 3 }, { a: "1", b: "2", c: "3" }); // false
assertObjectsEqual({ a: "1", b: "2", c: "3" }, { a: "1", b: "2" }); // false
assertObjectsEqual({ a: "1", b: "2" }, { a: "1", b: "2" }); //true
assertObjectsEqual({ a: "one", b: 2, c: true }, { a: "one", b: 2, c: true }); //true
assertObjectsEqual({ a: "one", b: 2, c: false }, { a: "one", b: 2, c: true }); //false
assertObjectsEqual({ a: "1", b: "2" }, { b: "2", a: "1" }); //true