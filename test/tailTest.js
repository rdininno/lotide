const assert = require('chai').assert;
const tail = require(`../tail`);
const assertEqual = require(`../assertEqual`)

describe("Tail Test", () => {
  it("Should say lighthouse labs ", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];

    assert.deepStrictEqual(tail(words), ["Lighthouse", "Labs"]);
  });
  it("Should be [2, 3, 4, 5]", () => {
    const nums = [1, 2, 3, 4, 5];

    assert.deepStrictEqual(tail(nums), [2, 3, 4, 5]);
  })
})