const eqArrays = (a, b) => {
  let isEqual = false;

  if (a.length !== b.length) {
    return false;
  }

  for (let i = 0; i < a.length; i++) {
    if (a[i] === b[i]) {
      isEqual = true;
    } else if (a[i] !== b[i]) {
      return false;
    }
  }

  return isEqual;
};

const assertArraysEqual = (a, b) => {
  if (eqArrays(a, b)) {
    console.log("The arrays are equal ✅ ✅ ✅");
  } else {
    console.log("The Arrays are not equal 🔴 🔴 🔴");
  }
};

const letterPositions = (sentence) => {
  const results = {}; //empty object to add results to
  let index = 0; //letter position

  for (const letter of sentence) {
    if (results[letter]) {
      results[letter].push(index); // if letter present, push index position to array
    } else {
      results[letter] = [index]; //if letter not present, create an array with the index as a value
    }

    //console.log("Letter: ",letter, "Position: ", index);
    index++; //increment index
  }

  //console.log(results);

  return results;
};


assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("lighthouse in the house").h, [3, 5, 15, 18]);