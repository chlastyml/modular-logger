import * as helper from './helper';
import { logLevel } from './enums';
import bgColors from './colors/bgColors';

export const prefix = (level: logLevel, namespace: string) => {
    var levelComplete = helper.colorLevel(level);
    var datetime = level == logLevel.error ? bgColors.Red(helper.buildDatetime()) : helper.buildDatetime();

    var prefix = !namespace ? helper.buildPrefix([levelComplete, datetime]) : helper.buildPrefix([levelComplete, namespace, datetime]);

    return prefix + ' - ';
}

export const prefix_Without_Color = (level: logLevel, namespace: string) => {
    var levelComplete =  logLevel[level];
    var datetime = level == logLevel.error ? bgColors.Red(helper.buildDatetime()) : helper.buildDatetime();

    var prefix = !namespace ? helper.buildPrefix([levelComplete, datetime]) : helper.buildPrefix([levelComplete, namespace, datetime]);

    return prefix + ' - ';
}

export const log_Method = (prefix: string, logText: string) => {
    logText = logText ? logText : ''; // can be undefined?
    console.log(prefix + logText);
}