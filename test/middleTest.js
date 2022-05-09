const middle = require(`../middle`);
const assertArraysEqual = require(`../assertArraysEqual`);

middle([1]); // => []
middle([1, 2]); // => []

middle([1, 2, 3]); // => [2]
middle([1, 2, 3, 4, 5]); // => [3]

middle([1, 2, 3, 4]); // => [2, 3]
middle([1, 2, 3, 4, 5, 6]); // => [3, 4]

assertArraysEqual(middle(["one", "Two", "Three"]), ["Two"]);
assertArraysEqual(middle(["one", "Two", "Three", "Four"]), ["Two", "Three"]);
assertArraysEqual(middle(["one", "Two", "Three", "Four", "Five"]), ["Three"]);
assertArraysEqual(middle(["one", "Two", "Three", "Four", "Five", "Six"]), ["Three", "Four"]);



