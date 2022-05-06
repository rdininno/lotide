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

assertArraysEqual([1, 2, 3], [1, 2, 3,]);
assertArraysEqual([1, 2, 3], [1, 2, '3',]);
assertArraysEqual([1, 2, 'three'], [1, 2, '3',]);
assertArraysEqual([1, 2, 'three'], [1, 2, 'three',]);
