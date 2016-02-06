var readline = require('readline');
var fs = require('fs');
var _ = require('lodash');

module.exports = {
  read: read,
  string2BooleanArray: string2BooleanArray,
  write: write
};

function read (fileName) {
  if (!fileName || typeof fileName !== 'string') {
    throw new Error('fileName is a required string');
  }

  var file = fs.readFileSync(fileName, 'utf8');
  var lines = _.tail(file.split('\n'));
  if (_.isEmpty(_.last(lines))) {
    lines = _.slice(lines, 0, lines.length - 1);
  }

  return _.map(lines, string2BooleanArray);
}

function string2BooleanArray (value) {
  return _.map(value, function (value) {
    return value === '.' ? false : true;
  });
}

function write (path, commands) {
  if (!commands || !Array.isArray(commands)) {
    throw new Error('commands array must be defined');
  }

  var stringCommands = _.map(commands, function (command) {
    return command.command + ' ' + _.join(command.args, ' ');
  });

  fs.writeFileSync(path, _.join(stringCommands, '\n'));
}
