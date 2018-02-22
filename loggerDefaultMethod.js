const helper = require("./helper");
const options = require("./options");

exports.prefix = (level, namespace) => {
    var levelComplete = helper.colorText(helper.samelength(level.key), helper.getModificatorsForLevel(level));
    var datetime = helper.buildDatetime();

    var text = namespace == options.defaultNamespace ? helper.buildPrefix([levelComplete, datetime]) : helper.buildPrefix([levelComplete, namespace, datetime]);

    return text + " - ";
}

exports.logMethod = (prefix, logText) => {
    console.log(prefix + logText);
}