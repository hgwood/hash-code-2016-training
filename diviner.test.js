const assert = require("assert")

describe("diviner algo", function () {
  const diviner = require("./diviner")

  it("", function () {
    const result = diviner([
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

  it("", function () {
    const result = diviner([
      [true, true, true],
      [true, true, false]
    ])
    assert.deepEqual(result, [
      {command: "PAINT_LINE", args: [0, 0, 0, 2]},
      {command: "PAINT_LINE", args: [1, 0, 1, 2]},
      {command: "ERASE_CELL", args: [1, 2]},
    ])
  })
})
