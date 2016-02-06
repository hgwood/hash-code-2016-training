const _ = require("lodash")

module.exports = function cut(painting) {
  return _.chunk(painting, Math.floor(painting.length / 4)).map(function(zone, index) {
    return {"x": 0, "y": Math.floor(painting.length / 4) * index, zone:zone};
  })
}
