const enums = require("./enums");
const options = require("./options");
const helper = require("./helper");
const defaultMethods = require("./loggerDefaultMethod");

exports.Logger = Logger;

/* ************************************************** */

/* LOGGER main class */
function Logger(namespace, minLevelToLog = enums.logLevel.info) {
    this.namespace = namespace;
    this.minLevelToLog = minLevelToLog;
    this.prefixMethod = defaultMethods.prefix;
    this.logMethod = defaultMethods.logMethod;
}
/* ************************************************** */

/* Set methods */
Logger.prototype.setLogMethod = (newLogMethod) => {
    this.logMethod = newLogMethod;
}
Logger.prototype.setPrefixMethod = (newPrefixMethod) => {
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