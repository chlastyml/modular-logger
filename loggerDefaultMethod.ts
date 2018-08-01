import { IMessage } from "./logger";
import bgColors from "./colors/bgColors";
import * as helper from './helper';
import { logLevel } from "./enums";

// Max length of enum level
const maxLength = Math.max(...Object.keys(logLevel).filter(k => typeof logLevel[k as any] === "number").map(el => el.length));
export function prefix(message: IMessage, colored: boolean = false) {
    let sLevel = completeWhiteSpace(logLevel[message.level], maxLength);
    sLevel = colored ? helper.colorLevel(message.level, sLevel) : sLevel;

    const currentTime = message.date.toISOString();
    // const currentTime = helper.buildDatetime(message.date);
    const sDate = message.level == logLevel.Error && colored ? bgColors.Red(currentTime) : currentTime;

    // TODO: colored namespace?
    const sNamespace = colored ? message.namespace : message.namespace;

    const prefix = buildPrefix(sLevel, sNamespace, sDate);

    return prefix;
}

function buildPrefix(level: string, namespace: string, date: string): string {
    return !namespace && !namespace.trim() ? `${level} : ${date}` : `${level} : ${date} : ${namespace}`;
}

function completeWhiteSpace(text: string, maxLength: number): string{
    if(text.length < maxLength){
        return completeWhiteSpace(text + ' ', maxLength);
    }
    return text;
}