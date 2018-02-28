const enums = require('./enums');
const helper = require("./helper");

exports.prefix = (level, namespace) => {
    var levelComplete = helper.colorText(level.key, helper.getModificatorsForLevel(level));
    var datetime = level == enums.logLevel.error ? helper.colorText(helper.buildDatetime(), [enums.bgColors.red]) : helper.buildDatetime();

    var prefix = !namespace ? helper.buildPrefix([levelComplete, datetime]) : helper.buildPrefix([levelComplete, namespace, datetime]);

    return prefix + " - ";
}

exports.logMethod = (prefix, logText) => {
    logText = logText ? logText : "";
    console.log(prefix + logText);
}