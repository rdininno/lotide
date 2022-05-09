const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚩🚩🚩 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = (a, b) => {
  //if lengths different return false
  if (a.length !== b.length) {
    return false;
  }

  //helper function to look through elements of array a
  for (const element in a) {
    if (Array.isArray(a[element]) && Array.isArray(b[element])) {
      if(!eqArrays(a[element], b[element])){
        return false;
      }
    } else if (a[element] !== b[element]) {
      return false;
    }
  }

  return true;
};

module.exports = eqArrays;

// console.log(eqArrays([[2, 3], [4]], [[2, 3], [4]])) // => true
// console.log(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]])) // => false
// console.log(eqArrays([[2, 3], [4]], [[2, 3], 4])) // => false


// assertEqual(eqArrays([1, [2], 3], [1, [2], 3]), true); // => should PASS
// assertEqual(eqArrays([1, [2, 3]], [1, [2, 3]]), true); // => should PASS
// assertEqual(eqArrays([1, [2, [3]]], [1, [2, [3]]]), true); // => should PASS

// assertEqual(eqArrays([1, [5], 3], [1, [2], 3]), false); // => FALSE
// assertEqual(eqArrays([1, [2, 5]], [1, [2, 3]]), false); // => FALSE
// assertEqual(eqArrays(['a', ['e'], ['c', ['d']]], ['a', ['b'], ['c', ['d']]]), false); // => FALSE


// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true);// => false
// assertEqual(eqArrays([1, 2, 3, 5], [1, 2, 3, 5]), true); // => true
// assertEqual(eqArrays([1, 2, 3, 5], [3, 2, 1]), true); // => false
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true); // => false
// assertEqual(eqArrays([1, 2, 'three'], [1, 2, 'three']), true); // => true
// assertEqual(eqArrays([1, 2, 'three'], [1, 2, 3]), true); // => false