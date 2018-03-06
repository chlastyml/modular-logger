const enums = require("./enums");
const loggerModule = require("./logger");
const helper = require('./helper');
var colors = require('colors');
const logLevel = require("./enums").logLevel;

var loggers = [];
exports.Logger = new loggerModule.Logger("Logger".inverse, logLevel.info);

exports.CreateLogger = (namespace, minLevelToLog = logLevel.trace) => {
    var resultLogger = loggers[namespace];

    if (resultLogger) {
        throw new Error("Logger " + namespace + " already exist!");
    }

    resultLogger = new loggerModule.Logger(namespace, minLevelToLog);
    loggers[namespace] = resultLogger;

    this.Logger.logTrace("Logger created: " + namespace);

    return resultLogger;
}

exports.GetAllLoggers = () => {
    return loggers;
}

exports.GetLogger = (namespace) => {
    var resultLogger = loggers[namespace];

    if (!resultLogger) {
        throw new Error("Logger " + namespace + " doesn't exist!");
    }

    return resultLogger;
}

loggers[undefined] = this.CreateLogger(undefined, []);