const middle = (arr) => {
  let middleArr = [];
  let middleIndex = Math.floor((arr.length - 1) / 2); // get middle index

  middleArr.push(arr[middleIndex]); // push value at middle index to middleArr

  if (arr.length % 2 === 0) {
    middleArr.push(arr[middleIndex + 1]); //if length is even, push the next object to middle array
  }

  if (middleIndex === 0) {
    middleArr = []; //If array is 0, 1, or 2 in length make empty
  }

  return middleArr;
};

module.exports = middle;

