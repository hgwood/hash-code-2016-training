const io = require("./io")
const diviner = require("./diviner")
const cut = require("./cut")
const reduce = require("./reduce")

io.write("logo.out.txt", reduce(cut(io.read("logo.in.txt")).map(diviner)));
