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
    console.log("The arrays are equal ✅ ✅ ✅");
  } else {
    console.log("The Arrays are not equal 🛑 🛑 🛑");
  }
}

const middle = function(arr){
  let middleArr = []; 
  let middleIndex = Math.floor((arr.length - 1)/ 2); // get middle index

  middleArr.push(arr[middleIndex]); // push value at middle index to middleArr

  if(arr.length % 2 === 0){
    middleArr.push(arr[middleIndex + 1]); //if length is even, push the next object to middle array
  }

  if(middleIndex === 0 ){
    middleArr = []; //If array is 0, 1, or 2 in length make empty
  }

  //console.log("MiddleIndex: ", middleIndex, "Middle Array: ", middleArr);

return middleArr;
}

middle([1]) // => []
middle([1, 2]) // => []

middle([1, 2, 3]) // => [2]
middle([1, 2, 3, 4, 5]) // => [3]

middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]

assertArraysEqual (middle(["one", "Two", "Three"]), ["Two"] )
assertArraysEqual(middle(["one", "Two", "Three", "Four"]), ["Two", "Three"])
assertArraysEqual(middle(["one", "Two", "Three", "Four", "Five"]), ["Three"])
assertArraysEqual(middle(["one", "Two", "Three", "Four", "Five", "Six"]), ["Three", "Four"])



