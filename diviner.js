const _ = require("lodash");
const black = require("./black.js");
const white = require("./white.js");
const blacklines = require("./blacklines.js");

module.exports = function(painting) {
  var whiteRes = white(painting);
  var blackRes = black(painting);
  var blackLinesRes = blacklines(painting);
  return _.minBy([whiteRes, blackRes, blackLinesRes], function(element) {
  	return element.commands.length;
  })
};
