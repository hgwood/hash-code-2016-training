const _ = require("lodash");
const black = require("./black.js");
const white = require("./white.js");
const blacklines = require("./blacklines.js");
const blackcolumns = require("./blackcolumns.js");


module.exports = function(painting) {
  var whiteRes = white(painting);
  var blackRes = black(painting);
  var blackLinesRes = blacklines(painting);
  var blackColRes = blackcolumns(painting);

  return _.minBy([whiteRes, blackRes, blackLinesRes, blackColRes], function(element) {
  	return element.commands.length;
  })
};
