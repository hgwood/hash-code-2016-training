const assert = require("assert")

describe("black algo", function () {
  const black = require("./black")
  
  it("", function () {
    const result = black([
      [false, true, false],
      [true, true, false],
      [false, true, true]
    ])
    assert.deepEqual(result, [
      {command: "PAINT_SQUARE", args: [1, 0, 0]},
      {command: "PAINT_SQUARE", args: [0, 1, 0]},
      {command: "PAINT_SQUARE", args: [1, 1, 0]},
      {command: "PAINT_SQUARE", args: [1, 2, 0]},
      {command: "PAINT_SQUARE", args: [2, 2, 0]},
    ])
  })
})
