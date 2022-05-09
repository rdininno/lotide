const letterPositions = (sentence) => {
  const results = {}; //empty object to add results to
  let index = 0; //letter position

  for (const letter of sentence) {
    if (results[letter]) {
      results[letter].push(index); // if letter present, push index position to array
    } else {
      results[letter] = [index]; //if letter not present, create an array with the index as a value
    }
    index++; //increment index
  }
  return results;
};

module.exports = letterPositions;


