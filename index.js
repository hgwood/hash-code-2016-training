const io = require("./io")
const black = require("./black")

io.write("logo.out.txt", black(io.read("logo.in.txt")))