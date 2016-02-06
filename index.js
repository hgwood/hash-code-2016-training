const io = require("./io")
const diviner = require("./diviner")
const cut = require("./cut")
const reduce = require("./reduce")

var _ = require("lodash");
var paint = io.read("learn_and_teach.in.txt");
var bestResult = _(_.range(1, paint.length/2).map(function(size) {
  return reduce(cut(paint, size).map(diviner))
})).minBy(function(commands) {
  return commands.length;
})
io.write("learn_and_teach.out.txt", bestResult);
