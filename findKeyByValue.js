const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚩🚩🚩 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = (shows, val) => {
  for (const property in shows) {
    if (shows[property] === val) {
      return property;
    }
  }

}


const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
  action: "24",
  reality: "To Hot To Handle",
  sports: "Superbowl"
};

// findKeyByValue(bestTVShowsByGenre, "The Wire")
// findKeyByValue(bestTVShowsByGenre, "That '70s Show")

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "Superbowl"), "sports");
assertEqual(findKeyByValue(bestTVShowsByGenre, "Superbowl"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "24"), "action");
assertEqual(findKeyByValue(bestTVShowsByGenre, "maid"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "maid"), "dramma");

