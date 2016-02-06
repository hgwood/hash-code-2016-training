const _ = require("lodash")

module.exports = function black(painting) {
  const commands = []
  _.each(painting, (line, y) => {
    _.each(line, (spot, x) => {
      if (spot) commands.push({command: "PAINT_SQUARE", args: [x, y, 0]})
    })
  })
  return commands
}
