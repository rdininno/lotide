const map = require(`../map`);
const assertArraysEqual = require(`../assertArraysEqual`);

const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
console.log(assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']));

const results2 = map(words, word => word.length);
console.log(assertArraysEqual(results2, [6, 7, 2, 5, 3]));

const results3 = map(words, word => word + 's');
console.log(assertArraysEqual(results3,
  ["grounds", "controls", "tos", "majors", "toms"]));