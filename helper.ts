import { logLevel } from './enums';
import fgColors, { fgRawColors } from './colors/fgColors';
import common, { comonRawColor } from './colors/common';
import bgColors, { bgRawColors } from './colors/bgColors';

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

export const clear_Text = (text: string) => {
    const fgValues: string[] = (<any>Object).values(fgRawColors);
    text = replaceString(text, fgValues);
    const bgValues: string[] = (<any>Object).values(bgRawColors);
    text = replaceString(text, bgValues);
    const commonValues: string[] = (<any>Object).values(comonRawColor);
    text = replaceString(text, commonValues);
    return text;
}

const replaceString = (text: string, arrayString: Array<string>): string => {
    arrayString.forEach(val => {
        if (text.indexOf(val) > -1) text = text.replace(val, '');
    });
    return text;
}