const enums = require("./enums");

var loggers = [];

exports.GetLogger = (namespace, color = 'white', minLevelToLog = logLevel.info) => {
    var resultLogger = loggers[namespace.toLowerCase()];

    if (!resultLogger) {
        resultLogger = new Logger(namespace, color, minLevelToLog);
        loggers[namespace] = resultLogger;
    }

    return resultLogger;
}