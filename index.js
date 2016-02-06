const io = require("./io")
const diviner = require("./diviner")
const cut = require("./cut")
const reduce = require("./reduce")

io.write("learn_and_teach.out.txt", reduce(cut(io.read("learn_and_teach.in.txt")).map(diviner)));
