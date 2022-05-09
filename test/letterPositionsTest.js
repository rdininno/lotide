const letterPositions = require(`../letterPositions`);
const assertArraysEqual =require(`../assertArraysEqual`);

assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("lighthouse in the house").h, [3, 5, 15, 18]);