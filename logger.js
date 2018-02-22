const enums = require("./enums");

exports.Logger = Logger;

/* Enums */

var logLevel = enums.logLevel;
var colorReset = enums.colorReset;
var specials = enums.specials;
var fgColors = enums.fgColors;
var bgColors = enums.bgColors;

/* PRIVATE */
function Logger(namespace, color, minLevelToLog = logLevel.info) {
    this.namespace = namespace;
    this.minLevelToLog = minLevelToLog;
    this.color = convertColor(color);
    this.prefixMethod = prefix;
    this.logMethod = (prefix, text) => {
        console.log(prefix + text);
    };
}

Logger.prototype.log = function (logText, level = logLevel.info) {
    return new Promise((resolve, reject) => {
        if (this.minLevelToLog <= level) {
            var prefixText = this.prefixMethod(level, this.namespace, this.color);
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

function prefix(level, namespace, color) {
    var currentdate = new Date();
    var datetime = currentdate.getDate() + "/" +
        (currentdate.getMonth() + 1) + "/" +
        currentdate.getFullYear() + " @ " +
        currentdate.getHours() + ":" +
        currentdate.getMinutes() + ":" +
        currentdate.getSeconds();

    var text = colorText(namespace, [color]) + ":" +
        colorText(samelength(level.key), getModificatorsForLevel(level)) + ":" + datetime;
    return text + " - ";
}

function samelength(text) {
    if (text.length < maxChar) {
        var rozdil = maxChar - text.length;
        var index;
        for (index = 0; index < Math.trunc(rozdil / 2); index++) {
            text = " " + text + " ";
        }
        if (rozdil % 2) {
            text = text + " ";
        }
    }
    return text;
}

function getModificatorsForLevel(level) {
    switch (level) {
        case logLevel.trace:
            return [];
        case logLevel.debug:
            return [fgColors.magenta];
        case logLevel.info:
            return [fgColors.green];
        case logLevel.warning:
            return [fgColors.black, bgColors.yellow];
        case logLevel.error:
            return [fgColors.black, bgColors.red, specials.bright];
    }

    console.log("Error pri ziskavani modifikatoru textu u loggeru");
}

function colorText(text, args) {
    args = args ? args : [];

    var result = text;
    args.forEach(arg => {
        result = arg + result;
    });

    // jestlize konci na reset tak nic, jinak reset pridat
    if (true) {
        result += colorReset;
    }
    return result;
}

function convertColor(color) {
    return fgColors.get(color);
}

var maxChar = -1;

if (maxChar < 0) {
    logLevel.enums.forEach(function (level) {
        if (level.key.length > maxChar) {
            maxChar = level.key.length;
        }
    });
}