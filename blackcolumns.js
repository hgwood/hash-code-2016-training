const _ = require("lodash")

module.exports = function blackcolumns(painting) {
  const commands = []
  var startingZone = false;
  var nblines = painting.zone.length;
  var nbcol = painting.zone[0].length;

  _.reverse
  _.times(nbcol, (y) => {
    _.times(nblines, (x) => {
      var spot = painting.zone[x][y];
  		if(!_.isNumber(startingZone) && spot) startingZone = x
    		if(!spot && _.isNumber(startingZone)) {
  			commands.push({command: "PAINT_LINE", args: [startingZone, y, x - 1, y]})
  			startingZone = false
  		}
  		if(spot && _.isNumber(startingZone) && x == nblines - 1) {
  			commands.push({command: "PAINT_LINE", args: [startingZone, y, x, y]})
  		}
  	})
  	startingZone = false;
  })
  return {commands, x: painting.x, y: painting.y};
}
