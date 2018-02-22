const helper = require("./helper");
const options = require("./options");

exports.prefix = (level, namespace, color) => {
    var namespaceComplete = helper.colorText(namespace, [color]);
    var levelComplete = helper.colorText(helper.samelength(level.key), helper.getModificatorsForLevel(level));
    var datetime = helper.buildDatetime();

    var text = namespace == options.defaultNamespace ? helper.buildPrefix([levelComplete, datetime]) : helper.buildPrefix([levelComplete, namespaceComplete, datetime]);

    return text + " - ";
}

exports.logMethod = (prefix, logText) => {
    console.log(prefix + logText);
}