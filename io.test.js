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
    assert.equal(array.length, 5);
  });
});
