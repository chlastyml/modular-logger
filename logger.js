const enums = require("./enums");
const helper = require("./helper");
const defaultMethods = require("./loggerDefaultMethod");

exports.Logger = Logger;

/* ************************************************** */

/* LOGGER main class */
function Logger(namespace, minLevelToLog = enums.logLevel.trace) {
    this.namespace = namespace;
    this.minLevelToLog = minLevelToLog;
    this.prefixMethod = defaultMethods.prefix;
    this.logMethod = defaultMethods.logMethod;
}
/* ************************************************** */

/* Set methods */
Logger.prototype.setNamespace = function (newNamespace) {
    this.namespace = newNamespace;
}

Logger.prototype.setMinLevelLog = function (minLevelLogInput) {
    var minLevelLog = enums.convertLevelLog(minLevelLogInput);
    this.minLevelToLog = minLevelLog;
}

Logger.prototype.setLogMethod = function (newLogMethod) {
    this.logMethod = newLogMethod;
}
Logger.prototype.setPrefixMethod = function (newPrefixMethod) {
    this.prefixMethod = newPrefixMethod;
}
/* ************************************************** */
/* Get methods */
Logger.prototype.getNamespace = function () {
    return this.namespace;
}

Logger.prototype.getMinLevelLog = function () {
    return this.minLevelToLog;
}

Logger.prototype.getLogMethod = function () {
    this.logMethod = newLogMethod;
}
Logger.prototype.getPrefixMethod = function () {
    this.prefixMethod = newPrefixMethod;
}
/* ************************************************** */

/* Log methods */
Logger.prototype.log = function (logText, level = enums.logLevel.info) {
    return new Promise((resolve, reject) => {
        if (this.minLevelToLog <= level) {
            var prefixText = this.prefixMethod(level, this.namespace, this.color);
            this.logMethod(prefixText, logText);
        }
        resolve(true);
    });
}

Logger.prototype.logTrace = function (text) {
    return this.log(text, enums.logLevel.trace)
}
Logger.prototype.logDebug = function (text) {
    return this.log(text, enums.logLevel.debug)
}
Logger.prototype.logInfo = function (text) {
    return this.log(text, enums.logLevel.info)
}
Logger.prototype.logWarning = function (text) {
    return this.log(text, enums.logLevel.warning)
}
Logger.prototype.logError = function (text) {
    return this.log(text, enums.logLevel.error)
}
/* ************************************************** */

Logger.prototype.show = function (){
    var result = new Object;
    result.name = this.namespace;
    result.minLevelToLog = this.minLevelToLog;
    return JSON.stringify(result);
}

Logger.prototype.toString = function () {
    var result = new Object;
    result.name = this.namespace;
    result.minLevelToLog = this.minLevelToLog;
    return JSON.stringify(result);
}