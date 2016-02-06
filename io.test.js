var assert = require('assert');
var reader = require('./io.js');
describe('Testing io', function() {
  it('should convert the string to boolean array', function () {
    var array = reader.string2BooleanArray('..##');
    assert.equal(array[0], false);
    assert.equal(array[1], false);
    assert.equal(array[2], true);
    assert.equal(array[3], true);
  });

  it('should return the structure of the file two squares', function () {
    var array = reader.read('readFile.txt');
    assert.equal(array[0][0], false);
    assert.equal(array[0][1], false);
    assert.equal(array[0][2], false);
    assert.equal(array[0][3], false);
    assert.equal(array[0][4], false);
    assert.equal(array[0][5], true);
    assert.equal(array[0][6], true);
    assert.equal(array[0][7], true);
    assert.equal(array[0][8], true);
    assert.equal(array[0][9], true);
    assert.equal(array.length, 5);
  });
});
