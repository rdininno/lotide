const takeUntil = (array, callback) => {
  let newArr = [];
  let index = 0;

  for (let ii = 0; ii < array.length; ii++) {
    if (callback(array[ii]) === true) {
      break;
    }
    index++;
  }
  newArr = array.slice(0, index);

  return newArr;
};

module.exports = takeUntil;

