const _ = require("lodash")

module.exports = function black(painting) {
  const commands = []
  _.each(painting.zone, (line, x) => {
    _.each(line, (spot, y) => {
      if (spot) commands.push({command: "PAINT_SQUARE", args: [x, y, 0]})
    })
  })
  return {commands, x: painting.x, y: painting.y}
}
