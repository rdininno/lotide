const findKeyByValue = require(`../findKeyByValue`);
const assertEqual = require(`../assertEqual`);

const bestTVShowsByGenre = {
  'sci_fi': "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
  action: "24",
  reality: "To Hot To Handle",
  sports: "Superbowl"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "Superbowl"), "sports");
assertEqual(findKeyByValue(bestTVShowsByGenre, "Superbowl"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "24"), "action");
assertEqual(findKeyByValue(bestTVShowsByGenre, "maid"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "maid"), "dramma");