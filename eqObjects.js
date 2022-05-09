const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚩🚩🚩 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqObjects = function(object1, object2) {
  const keysObject1 = Object.keys(object1);
  const keysObject2 = Object.keys(object2);

  //compare array length, if different return false
  if (keysObject1.length !== keysObject2.length) {
    return false;
  }

  //compare values of keys in each object
  for (let key of keysObject1) {
    //If both objects, compare
    if (typeof object1[key] === 'object' && typeof object2[key] === 'object') {
      return eqObjects(object1[key], object2[key]);
    } else if (object1[key] === object2[key]) {
      return true;
    } else if (object1[key] !== object2[key]) {
      return false
    }

    if (object1[key] !== object2[key]) {
      return false;
    }
  }
};

module.exports = eqObjects;

// console.log(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })) // => true

// console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }) )// => false
// console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 })) // => false


/*
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
*/
