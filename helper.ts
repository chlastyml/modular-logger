import { logLevel } from './enums';
import fgColors from './colors/fgColors';
import common from './colors/common';
import bgColors from './colors/bgColors';

export const buildPrefix = (args: Array<string>) => {
    return args.join(':');
}

export const buildDatetime = () => {
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

export const colorLevel = (level: logLevel) => {
    let levelText = logLevel[level];

    switch (level) {
        case logLevel.trace:
            return levelText;
        case logLevel.debug:
            return fgColors.Magneta(levelText);
        case logLevel.info:
            return fgColors.Green(levelText);
        case logLevel.warning:
            return fgColors.Yellow(levelText);
        case logLevel.error:
            return common.Bold(bgColors.Red(levelText));
    }

    console.log("Error pri ziskavani modifikatoru textu u loggeru");
}
