const assert = require('chai').assert;
const middle = require(`../middle`);
const assertArraysEqual = require(`../assertArraysEqual`);

describe("middle", () => {
  it("will return [] for [1]", () => {
    array = [1]

    assert.deepStrictEqual(middle(array), []);
  });
  it("will return [] for [1, 2]", () => {
    array = [1, 2]

    assert.deepStrictEqual(middle(array), []);
  });
  it("will return [2] for [1, 2, 3]", () => {
    array = [1, 2, 3]

    assert.deepStrictEqual(middle(array), [2]);
  });
  it("will return [3] for [1, 2, 3, 4, 5]", () => {
    array = [1, 2, 3, 4, 5]

    assert.deepStrictEqual(middle(array), [3]);
  });
  it("will return [2, 3] for [1, 2, 3, 4]", () => {
    array = [1, 2, 3, 4]

    assert.deepStrictEqual(middle(array), [2, 3]);
  });
  it("will return [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    array = [1, 2, 3, 4, 5, 6]

    assert.deepStrictEqual(middle(array), [3, 4]);
  });
  it("will return ['Two'] for ['One', 'Two', 'Three']", () => {
    array = ['One', 'Two', 'Three']

    assert.deepStrictEqual(middle(array), ['Two']);
  });
  it("will return ['Two', 'Three'] for ['One', 'Two', 'Three', 'Four']", () => {
    array = ['One', 'Two', 'Three', 'Four']

    assert.deepStrictEqual(middle(array), ['Two', 'Three']);
  });
});



