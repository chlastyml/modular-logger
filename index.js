const enums = require("./enums");
const loggerModule = require("./logger");
const helper = require('./helper');

var loggers = [];
exports.Logger =  new loggerModule.Logger(helper.colorText("Logger", [enums.specials.reverse]), enums.logLevel.info);

exports.CreateLogger = (namespace, args, minLevelToLog = enums.logLevel.trace) => {
    var resultLogger = loggers[namespace];

    if(resultLogger){
        this.Logger.logWarning("Logger " + namespace + " already exist!");
        return resultLogger;
    }

    var modificateNamespace = helper.colorText(namespace, args);

    //console.log(modificateNamespace, minLevelToLog)
    resultLogger = new loggerModule.Logger(modificateNamespace, minLevelToLog);
    loggers[namespace] = resultLogger;

    this.Logger.logTrace("Logger created: " + namespace);

    return resultLogger;
}

exports.GetAllLoggers = () => {
    return loggers;
}

exports.GetLogger = (namespace, minLevelToLog = enums.logLevel.trace) => {
    var resultLogger = loggers[namespace];

    if (!resultLogger) {
        this.Logger.logWarning("Logger " + namespace + " doesn't exist!");        
        resultLogger = new loggerModule.Logger(namespace, minLevelToLog);
        loggers[namespace] = resultLogger;
    }

    return resultLogger;
}

exports.GetFgColor = (colorString) => {
    var color = enums.fgColors.get(colorString);
    if (!color) {
        this.Logger.logWarning("Color " + colorString + " not found!");
        return "";
    }
    return color;
}
exports.GetBgColor = (colorString) => {
    var color = enums.bgColors.get(colorString);
    if (!color) {
        this.Logger.logWarning("Color " + colorString + " not found!");
        return "";
    }
    return color;
}
exports.GetSpecial = (specialString) => {
    var color = enums.specials.get(specialString);
    if (!color) {
        this.Logger.logWarning("Modificator " + specialString + " not found!");
        return "";
    }
    return color;
}

loggers[undefined] = this.CreateLogger(undefined, []);