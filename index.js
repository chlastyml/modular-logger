const enums = require("./enums");
const options = require("./options");
const loggerModule = require("./logger");
const helper = require('./helper');

exports.Logger = internLogger;
var internLogger = new loggerModule.Logger(helper.colorText("Logger", [enums.specials.reverse]), enums.logLevel.info);

var loggers = [];

exports.CreateLogger = (namespace, args, minLevelToLog = enums.logLevel.trace) => {
    var resultLogger = loggers[namespace.toLowerCase()];

    if(resultLogger){
        internLogger.logWarning("Logger " + namespace + " already exist!");
        return resultLogger;
    }

    var modificateNamespace = helper.colorText(namespace, args);

    resultLogger = new loggerModule.Logger(modificateNamespace, minLevelToLog);
    loggers[namespace.toLowerCase()] = resultLogger;
    return resultLogger;
}

exports.GetLogger = (namespace = options.defaultNamespace, minLevelToLog = enums.logLevel.trace) => {
    var resultLogger = loggers[namespace.toLowerCase()];

    if (!resultLogger) {
        internLogger.logWarning("Logger " + namespace + " doesn't exist!");        
        resultLogger = new loggerModule.Logger(namespace, minLevelToLog);
        loggers[namespace.toLowerCase()] = resultLogger;
    }

    return resultLogger;
}

exports.GetFgColor = (colorString) => {
    var color = enums.fgColors.get(colorString);
    if (!color) {
        internLogger.logWarning("Color " + colorString + " not found!");
        return "";
    }
    return color;
}
exports.GetBgColor = (colorString) => {
    var color = enums.bgColors.get(colorString);
    if (!color) {
        internLogger.logWarning("Color " + colorString + " not found!");
        return "";
    }
    return color;
}
exports.GetSpecial = (specialString) => {
    var color = enums.specials.get(specialString);
    if (!color) {
        internLogger.logWarning("Modificator " + specialString + " not found!");
        return "";
    }
    return color;
}