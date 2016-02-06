var _ = require("lodash");

// [{command:"", args:[]}]

module.exports = function(painting) {
  var linesNb = painting.zone.length;
  var colNb = painting.zone[0].length;
  const commands = []
  _.times(linesNb, function(n) {
    commands.push({"command": "PAINT_LINE", "args":[n, 0, n, colNb - 1]});
  });
  _.each(painting.zone, (line, y) => {
    _.each(line, (spot, x) => {
      if (!spot) commands.push({command: "ERASE_CELL", args: [y, x]})
    })
  });
  return {commands, x: painting.x, y: painting.y}

}
