const main = require("./index");

const helper = require("./helper");
const enums = require("./enums");

var logger = main.CreateLogger("O365", [main.GetFgColor('red')]);
var logger2 = main.GetLogger("O365");

console.log("**** START TESTS ****");
logAll(logger);
logAll(logger2);

function logAll(logger){
    logger.log("Testovaci log");
    logger.logTrace("TRACE log");
    logger.logDebug("DEBUG log");
    logger.logInfo("INFO log");
    logger.logWarning("WARNING log");
    logger.logError("ERROR log");
}