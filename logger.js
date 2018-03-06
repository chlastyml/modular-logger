const helper = require("./helper");
const defaultMethods = require("./loggerDefaultMethod");

const logLevel = require("./enums").logLevel;

const colors = require('colors');

exports.Logger = Logger;

/* ************************************************** */

/* LOGGER main class */
function Logger(namespace, minLevelToLog = logLevel.trace) {
    this.namespace = namespace;
    this.logNamespace = namespace
    this.minLevelToLog = minLevelToLog;
    this.prefixMethod = defaultMethods.prefix;
    this.logMethod = defaultMethods.logMethod;
}
/* ************************************************** */

/* Set methods */
Logger.prototype.setNamespace = function (newNamespace) {
    this.namespace = newNamespace;
    return this;
}

Logger.prototype.colorNamespace = function (modifics) {
    if (Array.isArray(modifics)) {

    } else {
        var color = helper.convertColor(modifics);

        this.logNamespace = color(this.namespace);
    }
    return this;
}

Logger.prototype.setMinLevelLog = function (minLevelLogInput) {
    this.minLevelToLog = enums.convertLevelLog(minLevelLogInput);;
    return this;
}

Logger.prototype.setLogMethod = function (newLogMethod) {
    if (typeof newLogMethod !== 'function') {
        throw new Error("New method must be function!");
    }
    this.logMethod = newLogMethod;
    return this;
}
Logger.prototype.setPrefixMethod = function (newPrefixMethod) {
    if (typeof newPrefixMethod !== 'function') {
        throw new Error("New method must be function!");
    }
    this.prefixMethod = newPrefixMethod;
    return this;
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
Logger.prototype.log = function (logText, level = logLevel.info) {
    return new Promise((resolve, reject) => {
        if (this.minLevelToLog <= level) {
            var prefixText = this.prefixMethod(level, this.logNamespace, this.color);
            this.logMethod(prefixText, logText);
        }
        resolve(true);
    });
}

Logger.prototype.logTrace = function (text) {
    return this.log(text, logLevel.trace)
}
Logger.prototype.logDebug = function (text) {
    return this.log(text, logLevel.debug)
}
Logger.prototype.logInfo = function (text) {
    return this.log(text, logLevel.info)
}
Logger.prototype.logWarning = function (text) {
    return this.log(text, logLevel.warning)
}
Logger.prototype.logError = function (text) {
    return this.log(text, logLevel.error)
}
/* ************************************************** */

Logger.prototype.toString = function () {
    var result = new Object;
    result.name = this.namespace;
    result.minLevelToLog = this.minLevelToLog;
    return JSON.stringify(result);
}