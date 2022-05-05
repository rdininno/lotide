const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚩🚩🚩 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = (sentence) => {
  // results object
  const results = {};
  //remove spaces in sentence
  let newSentence = sentence.split(" ", sentence.length).join('');

  for (const letter of newSentence) {
      if (results[letter]) {
        results[letter] += 1; //if letter present increment
      } else {
        results[letter] = 1; //if letter not present add it and initialize to 1
      }
    }
  console.log(results);
  return results;
}

countLetters("lighthouse in the house");
countLetters("this is a sentence to test this function out. :)");