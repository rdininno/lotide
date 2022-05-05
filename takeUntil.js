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

const takeUntil = function (array, callback) {
  let newArr = [];
  let index = 0;

  for (let ii = 0; ii < array.length; ii++) {
    if (callback(array[ii]) === true) {
      break;
    }
    index++;
    //console.log("Index: ", ii, "Value: ", array[ii])
    //console.log("Callback: ", callback(array[ii]));
  }
  //console.log(array);
  newArr = array.slice(0, index);

  return newArr;
}

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