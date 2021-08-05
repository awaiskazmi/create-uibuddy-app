const chokidar = require("chokidar");
const uibuddy = require("uibuddy");

module.exports.watch = function () {
  chokidar
    .watch("*.html", { persistent: true, ignoreInitial: true })
    .on("all", (event, filePath) => {
      uibuddy();
    });
};
