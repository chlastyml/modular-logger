const enums = require('./enums');
const helper = require("./helper");

exports.prefix = (level, namespace) => {
    var levelComplete = helper.colorText(helper.samelength(level.key), helper.getModificatorsForLevel(level));
    var datetime = level == enums.logLevel.error ? helper.colorText(helper.buildDatetime(), [enums.bgColors.red]) : helper.buildDatetime();

    var text = !namespace ? helper.buildPrefix([levelComplete, datetime]) : helper.buildPrefix([levelComplete, namespace, datetime]);

    return text + " - ";
}

exports.logMethod = (prefix, logText) => {
    console.log(prefix + logText);
}