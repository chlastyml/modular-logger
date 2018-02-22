const enums = require('./enums');

exports.buildPrefix = (args) => {
    return args.join(':');
}

exports.buildDatetime = () => {
    var currentdate = new Date();
    var datetime = currentdate.getDate() + "/" +
        (currentdate.getMonth() + 1) + "/" +
        currentdate.getFullYear() + " @ " +
        currentdate.getHours() + ":" +
        currentdate.getMinutes() + ":" +
        currentdate.getSeconds();
    return datetime;
}

exports.samelength = (text) => {
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

exports.getModificatorsForLevel = (level) => {
    switch (level) {
        case enums.logLevel.trace:
            return [];
        case enums.logLevel.debug:
            return [enums.fgColors.magenta];
        case enums.logLevel.info:
            return [enums.fgColors.green];
        case enums.logLevel.warning:
            return [enums.fgColors.black, enums.bgColors.yellow];
        case enums.logLevel.error:
            return [enums.fgColors.black, enums.bgColors.red, enums.specials.bright];
    }

    console.log("Error pri ziskavani modifikatoru textu u loggeru");
}

exports.colorText = (text, args) => {
    args = args ? args : [];

    var result = text;
    args.forEach(arg => {
        result = arg + result;
    });

    // jestlize konci na reset tak nic, jinak reset pridat
    if (true) {
        result += enums.colorReset;
    }
    return result;
}

exports.convertColor = (color) => {
    return enums.fgColors.get(color);
}

var maxChar = -1;

if (maxChar < 0) {
    enums.logLevel.enums.forEach(level => {
        if (level.key.length > maxChar) {
            maxChar = level.key.length;
        }
    });
}