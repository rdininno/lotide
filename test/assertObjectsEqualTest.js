const assertObjectsEqual = require(`../assertObjectsEqual`);

assertObjectsEqual({ a: "1", b: "2", c: "3" }, { a: "1", b: "2", c: "3" }); // true
assertObjectsEqual({ a: "1", b: "2", c: 3 }, { a: "1", b: "2", c: "3" }); // false
assertObjectsEqual({ a: "1", b: "2", c: "3" }, { a: "1", b: "2" }); // false
assertObjectsEqual({ a: "1", b: "2" }, { a: "1", b: "2" }); //true
assertObjectsEqual({ a: "one", b: 2, c: true }, { a: "one", b: 2, c: true }); //true
assertObjectsEqual({ a: "one", b: 2, c: false }, { a: "one", b: 2, c: true }); //false
assertObjectsEqual({ a: "1", b: "2" }, { b: "2", a: "1" }); //true