const _ = require("lodash")

module.exports = function blacklines(painting) {
  const commands = []
  var startingZone = false;
  _.each(painting.zone, (line, x) => {
  	_.each(line, (spot, y) => {
  		if(!_.isNumber(startingZone) && spot) startingZone = y
  		if(!spot && _.isNumber(startingZone)) {
			commands.push({command: "PAINT_LINE", args: [x, startingZone, x, y - 1]})
			startingZone = false
		}
		if(spot && _.isNumber(startingZone) && y == line.length - 1) {
			commands.push({command: "PAINT_LINE", args: [x, startingZone, x, y]})
		}
  	})
  	startingZone = false;
  })
  return {commands, x: painting.x, y: painting.y};
}
