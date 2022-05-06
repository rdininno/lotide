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

const assertArraysEqual = (a, b) => {
  if (eqArrays(a, b)) {
    console.log("The arrays are equal");
  } else {
    console.log("The Arrays are not equal");
  }
};

const without = (a, b) => {
  let newArr = [];

  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      if (a[i] === b[j]) {
        break;
      }
      if (b.length - 1 === j) {
        newArr.push(a[i]);
      }
    }
  }
  return newArr;
};

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
console.log(without(["1", "2", "3"], [1, "2", 3])); // => ["1", "3"]
console.log(without([1, "2", "3"], [1, 3])); // => ["2", "3"]
console.log(without([1, "2", 3], [1, 3])); // => ["2"]


const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
