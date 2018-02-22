const enums = require("./enums");
const options = require("./options");
const loggerModule = require("./logger");
const helper = require('./helper');

exports.Logger = internLogger;
var internLogger = new loggerModule.Logger(helper.colorText("Logger", [enums.specials.reverse]), enums.logLevel.info);

var loggers = [];

exports.GetLogger = (namespace = options.defaultNamespace, color = 'white', minLevelToLog = enums.logLevel.trace) => {
    var resultLogger = loggers[namespace.toLowerCase()];

    if (!resultLogger) {
        resultLogger = new loggerModule.Logger(namespace, minLevelToLog);
        loggers[namespace] = resultLogger;
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