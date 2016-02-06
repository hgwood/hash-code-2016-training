const _ = require("lodash");
const black = require("./black.js");
const white = require("./white.js");

module.exports = function(painting) {
  var whiteRes = white(painting);
  var blackRes = black(painting);
  if(whiteRes.commands.length > blackRes.commands.length) return blackRes;
  return whiteRes;
};
