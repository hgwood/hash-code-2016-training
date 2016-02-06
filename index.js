const io = require("./io")
const black = require("./black")

io.write("learn_and_teach.out.txt", black(io.read("learn_and_teach.in.txt")))