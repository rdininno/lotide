const eqArrays = (a, b) => {
  //if lengths different return false
  if (a.length !== b.length) {
    return false;
  }

  //helper function to look through elements of array a
  for (const element in a) {
    if (Array.isArray(a[element]) && Array.isArray(b[element])) {
      if (!eqArrays(a[element], b[element])) {
        return false;
      }
    } else if (a[element] !== b[element]) {
      return false;
    }
  }

  return true;
};

module.exports = eqArrays;