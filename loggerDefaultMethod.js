const helper = require("./helper");
const logLevel = require('./enums').logLevel;

exports.prefix = (level, namespace) => {
    var levelComplete = helper.colorLevel(level);
    var datetime = level == logLevel.error ? helper.buildDatetime().bgRed : helper.buildDatetime();

    var prefix = !namespace ? helper.buildPrefix([levelComplete, datetime]) : helper.buildPrefix([levelComplete, namespace, datetime]);

    return prefix + " - ";
}

exports.logMethod = (prefix, logText) => {
    logText = logText ? logText : "";
    console.log(prefix + logText);
}