const assert = require("assert")

describe("black algo by col", function () {
  const blackcolumns = require("./blackcolumns")
  
  it("", function () {
    const result = blackcolumns({ zone: [
      [false, true, false],//0 1
      [true, true, false],//1 0  //1 1
      [false, true, true]//2 1 // 2 2
    ]})
    assert.deepEqual(result.commands, [
      {command: "PAINT_LINE", args: [1, 0, 1, 0]},
      {command: "PAINT_LINE", args: [0, 1, 2, 1]},
      {command: "PAINT_LINE", args: [2, 2, 2, 2]},
    ])
  })
})
