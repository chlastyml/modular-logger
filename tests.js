const main = require("./index");

var logger = main.GetLogger();

logger.log("Testovaci log");
logger.logTrace("TRACE log");
logger.logDebug("DEBUG log");
logger.logInfo("INFO log");
logger.logWarning("WARNING log");
logger.logError("ERROR log");