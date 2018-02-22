const main = require("./index");

const helper = require("./helper");
const enums = require("./enums");

var namespace = helper.colorText("O365", [main.GetFgColor('red')]);

var logger = main.GetLogger(namespace);

console.log("**** START TESTS ****");

logger.log("Testovaci log");
logger.logTrace("TRACE log");
logger.logDebug("DEBUG log");
logger.logInfo("INFO log");
logger.logWarning("WARNING log");
logger.logError("ERROR log");