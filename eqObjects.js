const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚩🚩🚩 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function (a, b) {
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
}

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
}

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false

const ef = { e: "1", f: "2" };
const fe = { f: "2", e: "3" };
assertEqual(eqObjects(ef, fe), false); // => false

const efg = { e: "1", f: "2", g: "3" };
const gfe = { g: "3", f: "2", e: "3" };
assertEqual(eqObjects(efg, gfe), false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false

const hi = { h: "1", i: ["2", 3] };
const ih = { 1: ["2", 3], h: "2" };
assertEqual(eqObjects(hi, ih), false); // => false

