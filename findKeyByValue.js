const findKeyByValue = (shows, val) => {
  for (const property in shows) {
    if (shows[property] === val) {
      return property;
    }
  }
};

module.exports = findKeyByValue;



