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
  //console.log(results);
  return results;
};

console.log(countLetters("lighthouse in the house"));
console.log(countLetters("this is a sentence to test this function out. :)"));