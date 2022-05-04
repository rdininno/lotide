const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚩🚩🚩 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(a, b){
  let isEqual = false;

  for(let i = 0; i < a.length; i++){
    if(a.length !== b.length){
      return false;
    }

    if(a[i] === b[i]){
      isEqual = true;
    } else if (a[i] !== b[i]){
      return false;
    }
  }

  return isEqual;
}

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS


assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true) // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true) // => false

assertEqual(eqArrays([1, 2, 3, 5], [1, 2, 3, 5]), true) // => true
assertEqual(eqArrays([1, 2, 3, 5], [3, 2, 1]), true) // => false

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true) // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true) // => false

assertEqual(eqArrays([1, 2, 'three'], [1, 2, 'three']), true) // => true
assertEqual(eqArrays([1, 2, 'three'], [1, 2, 3]), true) // => false