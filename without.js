const without = (a, b) => {
  let newArr = [];

  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      if (a[i] === b[j]) {
        break;
      }
      if (b.length - 1 === j) {
        newArr.push(a[i]);
      }
    }
  }
  return newArr;
};

module.exports = without;

