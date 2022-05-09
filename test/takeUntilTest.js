const takeUntil = require(`../takeUntil`);
const assertArraysEqual = require(`../assertArraysEqual`);

//TESTS
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(assertArraysEqual(results1, [1, 2, 5, 7, 2]));

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]));

console.log('---');

const data3 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results3 = takeUntil(data3, x => x === 7);
console.log(assertArraysEqual(results3, [1, 2, 5]));

console.log('---');

const data5 = ["This", "Array", "Should", "End", "Here", "If", "I",
  "Have", "Anything", "To", "Say", "About", "It"];
const results5 = takeUntil(data5, x => x === 'Here');
console.log(assertArraysEqual(results5, ["This", "Array", "Should", "End"]));