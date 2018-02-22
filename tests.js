const main = require("./index");

var logger = main.GetLogger('Salesforce', "blue", 0);

logger.log("Testovaci log");

logger.logTrace("TRACE log");
logger.logDebug("DEBUG log");
logger.logInfo("INFO log");
logger.logWarning("WARNING log");
logger.logError("ERROR log");