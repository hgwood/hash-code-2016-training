const _ = require("lodash")

module.exports = function cut(painting) {
  return _.chunk(painting, Math.floor(painting.length / 4))
}