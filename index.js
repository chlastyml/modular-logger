const enums = require("./enums");
const options = require("./options");
const loggerModule = require("./logger");

var loggers = [];

exports.GetLogger = (namespace = options.defaultNamespace, color = 'white', minLevelToLog = enums.logLevel.trace) => {
    var resultLogger = loggers[namespace.toLowerCase()];

    if (!resultLogger) {
        resultLogger = new loggerModule.Logger(namespace, color, minLevelToLog);
        loggers[namespace] = resultLogger;
    }

    return resultLogger;
}