const _ = require("lodash")

module.exports = function(subZones) {
  return _.flatMap(subZones, function(subZone) {
    return subZone.commands.map(function(command) {
      if(command.command === "PAINT_LINE") {
        command.args[0]+=subZone.y;
        command.args[1]+=subZone.x;
        command.args[2]+=subZone.y;
        command.args[3]+=subZone.x;
      } else {
        command.args[0]+=subZone.y;
        command.args[1]+=subZone.x;
      }
      return command
    });
  });
}
