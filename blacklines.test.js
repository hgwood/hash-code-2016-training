const assert = require("assert")

describe("black algo by lines", function () {
  const blacklines = require("./blacklines")
  
  it("", function () {
    const result = blacklines([
      [false, true, false],//0 1
      [true, true, false],//1 0  //1 1
      [false, true, true]//2 1 // 2 2
    ])
    assert.deepEqual(result, [
      {command: "PAINT_LINE", args: [0, 1, 0, 1]},
      {command: "PAINT_LINE", args: [1, 0, 1, 1]},
      {command: "PAINT_LINE", args: [2, 1, 2, 2]},
    ])
  })
})
