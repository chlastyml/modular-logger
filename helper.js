const enums = require('./enums');
var colors = require('colors');

exports.buildPrefix = (args) => {
    return args.join(':');
}

exports.buildDatetime = () => {
    var currentdate = new Date();

    var days = currentdate.getDate();
    var month = currentdate.getMonth() + 1;

    var hours = currentdate.getHours();
    var minutes = currentdate.getMinutes();
    var seconds = currentdate.getSeconds();

    var daysString = days.toString().length == 1 ? "0" + days : days;
    var monthString = month.toString().length == 1 ? "0" + month : month;

    var hoursString = hours.toString().length == 1 ? "0" + hours : hours;
    var minutesString = minutes.toString().length == 1 ? "0" + minutes : minutes;
    var secondsString = seconds.toString().length == 1 ? "0" + seconds : seconds;

    var datetime = daysString + "/" +
        monthString + "/" +
        currentdate.getFullYear() + " " +
        hoursString + ":" +
        minutesString + ":" +
        secondsString;
    return datetime;
}

exports.colorLevel = (level) => {
    var levelText = level.key;

    switch (level) {
        case enums.logLevel.trace:
            return levelText;
        case enums.logLevel.debug:
            return levelText.magenta;
        case enums.logLevel.info:
            return levelText.green;
        case enums.logLevel.warning:
            return levelText.yellow;
        case enums.logLevel.error:
            return levelText.bold.bgRed;
    }

    console.log("Error pri ziskavani modifikatoru textu u loggeru");
}

exports.convertColor = (textColor) => {
    var result = colors[textColor];
    if(result){
        return result;
    }
    console.log("ConvertColor ERROR: Color " + JSON.stringify(textColor, null, 4) + " not found");
    return (text) => {
        return text;
    };
}

// TODO: Smazat
// exports.getModificatorsForLevel = (level) => {
//     switch (level) {
//         case enums.logLevel.trace:
//             return [];
//         case enums.logLevel.debug:
//             return [enums.fgColors.magenta];
//         case enums.logLevel.info:
//             return [enums.fgColors.green];
//         case enums.logLevel.warning:
//             return [enums.bgColors.yellow];
//         case enums.logLevel.error:
//             return [enums.bgColors.red, enums.specials.bright];
//     }

//     console.log("Error pri ziskavani modifikatoru textu u loggeru");
// }

// exports.colorText = (text, args) => {
//     args = args ? args : [];

//     var result = text;
//     args.forEach(arg => {
//         result = arg + result;
//     });

//     // jestlize konci na reset tak nic, jinak reset pridat
//     if (true) {
//         result += enums.colorReset;
//     }
//     return result;
// }

// exports.convertColor = (color) => {
//     return enums.fgColors.get(color);
// }

// var maxChar = -1;

// if (maxChar < 0) {
//     enums.logLevel.enums.forEach(level => {
//         if (level.key.length > maxChar) {
//             maxChar = level.key.length;
//         }
//     });
// }