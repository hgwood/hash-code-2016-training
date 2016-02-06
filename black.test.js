const assert = require("assert")

describe("black algo", function () {
  const black = require("./black")
  
  it("", function () {
    const result = black([
      [false, true, false]
    ])
    assert.deepEqual(result, [{command: "PAINT_SQUARE", args: [1, 0, 0]}])
  })
})
