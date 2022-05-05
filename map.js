const eqArrays = function(a, b){
  let isEqual = false;

  if(a.length !== b.length){
    return false;
  }

  for(let i = 0; i < a.length; i++){
    if(a[i] === b[i]){
      isEqual = true;
    } else if (a[i] !== b[i]){
      return false;
    }
  }

  return isEqual;
}

const assertArraysEqual = function(a, b){
  if(eqArrays(a, b)){
    console.log(" ✅ ✅ ✅  The arrays are equal");
  } else {
    console.log("🔴 🔴 🔴 The Arrays are not equal");
  }
}

const words = ["ground", "control", "to", "major", "tom"];

const map = function (arr, callback) {
  const results = [];

  for (let item of arr) {
    results.push(callback(item));
  }
  return results;
}

const results1 = map(words, word => word[0]);
console.log(assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']));

const results2 = map(words, word => word.length);
console.log(assertArraysEqual(results2, [6, 7, 2, 5, 3]));

const results3 = map(words, word => word + 's');
console.log(assertArraysEqual(results3, 
  ["grounds", "controls", "tos", "majors", "toms"]));