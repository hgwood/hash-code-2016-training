const _ = require("lodash")


module.exports = function cut(painting, size) {
  return _.chunk(painting, Math.floor(painting.length / size)).map(function(zone, index) {
    return {"x": 0, "y": Math.floor(painting.length / size) * index, zone};
  })
}
