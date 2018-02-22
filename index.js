const enums = require("./enums");
const loggerModule = require("./logger");

var loggers = [];

exports.GetLogger = (namespace, color = 'white', minLevelToLog = enums.logLevel.info) => {
    var resultLogger = loggers[namespace.toLowerCase()];

    if (!resultLogger) {
        resultLogger = new loggerModule.Logger(namespace, color, minLevelToLog);
        // resultLogger = new Logger(namespace, color, minLevelToLog);
        loggers[namespace] = resultLogger;
    }

    return resultLogger;
}