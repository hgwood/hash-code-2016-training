const assert = require("assert")

describe("white algo", function () {
  const white = require("./white")

  it("", function () {
    const result = white([
      [false, true, false],
      [true, true, false]
    ])
    assert.deepEqual(result, [
      {command: "PAINT_LINE", args: [0, 0, 0, 2]},
      {command: "PAINT_LINE", args: [1, 0, 1, 2]},
      {command: "ERASE_CELL", args: [0, 0]},
      {command: "ERASE_CELL", args: [0, 2]},
      {command: "ERASE_CELL", args: [1, 2]},
    ])
  })
})
