const eqArrays = require('./eqArrays');

const assertArraysEqual = (a, b) => {
  if (eqArrays(a, b)) {
    console.log("The arrays are equal");
  } else {
    console.log("The Arrays are not equal");
  }
};

module.exports = assertArraysEqual;
