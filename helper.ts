import { logLevel } from './enums';
import fgColors, { fgRawColors } from './colors/fgColors';
import common, { comonRawColor } from './colors/common';
import bgColors, { bgRawColors } from './colors/bgColors';

export const buildPrefix = (args: Array<string>) => {
    return args.join(':');
}

export const buildDatetime = (currentdate: Date) => {
    const days = currentdate.getDate();
    const month = currentdate.getMonth() + 1;

    const hours = currentdate.getHours();
    const minutes = currentdate.getMinutes();
    const seconds = currentdate.getSeconds();

    const daysString = days.toString().length == 1 ? "0" + days : days;
    const monthString = month.toString().length == 1 ? "0" + month : month;

    const hoursString = hours.toString().length == 1 ? "0" + hours : hours;
    const minutesString = minutes.toString().length == 1 ? "0" + minutes : minutes;
    const secondsString = seconds.toString().length == 1 ? "0" + seconds : seconds;

    const datetime = daysString + "/" +
        monthString + "/" +
        currentdate.getFullYear() + " " +
        hoursString + ":" +
        minutesString + ":" +
        secondsString;
    return datetime;
}

export const colorLevel = (level: logLevel, sLevel: string) => {
    // let levelText = logLevel[level];

    switch (level) {
        case logLevel.Trace:
            return sLevel;
        case logLevel.Debug:
            return fgColors.Magneta(sLevel);
        case logLevel.Info:
            return fgColors.Green(sLevel);
        case logLevel.Warning:
            return fgColors.Yellow(sLevel);
        case logLevel.Error:
            return common.Bold(bgColors.Red(sLevel));
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