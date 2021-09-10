const chokidar = require("chokidar");
const uibuddy = require("uibuddy");
const fileExtension = 'html';

module.exports.watch = function () {
  chokidar
    .watch(`*.${fileExtension}`, { persistent: true, ignoreInitial: true })
    .on("all", (event, filePath) => {
      uibuddy(fileExtension);
    });
};
