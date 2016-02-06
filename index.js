const io = require("./io")
const diviner = require("./diviner")

io.write("learn_and_teach.out.txt", diviner(io.read("learn_and_teach.in.txt")))
