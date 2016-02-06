var _ = require("lodash");

// [{command:"", args:[]}]

module.exports = function(painting) {
  var linesNb = painting.length;
  var colNb = painting[0].length;
  const commands = []
  _.times(linesNb, function(n) {
    commands.push({"command": "PAINT_LINE", "args":[n, 0, n, colNb - 1]});
  });
  _.each(painting, (line, y) => {
    _.each(line, (spot, x) => {
      if (!spot) commands.push({command: "ERASE_CELL", args: [y, x]})
    })
  });
  return commands;

}
