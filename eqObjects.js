const eqObjects = function(object1, object2) {
  const keysObject1 = Object.keys(object1);
  const keysObject2 = Object.keys(object2);

  //compare array length, if different return false
  if (keysObject1.length !== keysObject2.length) {
    return false;
  }

  //compare values of keys in each object
  for (let key of keysObject1) {
    //If both objects, compare
    if (typeof object1[key] === 'object' && typeof object2[key] === 'object') {
      return eqObjects(object1[key], object2[key]);
    } else if (object1[key] === object2[key]) {
      return true;
    } else if (object1[key] !== object2[key]) {
      return false;
    }

    if (object1[key] !== object2[key]) {
      return false;
    }
  }
};

module.exports = eqObjects;