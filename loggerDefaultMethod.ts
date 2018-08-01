import * as endOfLine from 'os';
import * as fs from 'fs';
import { IMessage, Logger } from "./logger";
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
    return !namespace && !namespace.trim() ? `${level} : ${date} : ${process.getgid()}` : `${level} : ${date} : ${process.getgid()} : ${namespace}`;
}

function completeWhiteSpace(text: string, maxLength: number): string {
    if (text.length < maxLength) {
        return completeWhiteSpace(text + ' ', maxLength);
    }
    return text;
}

export function logToConsole(message: IMessage): void {
    const sPrefix = prefix(message, true);
    console.log(`${sPrefix} => ${message.message}`);
}

export function logToFile(logger: Logger, path: string) {
    const aaab = new FileLog(path);
    logger.addLogMethod(((message: any) => {
        aaab.logToFile(message)
    }));
}
class FileLog {
    path: string;

    constructor(path: string) {
        this.path = path;
    }

    logToFile(message: IMessage): void {
        const sMessage = `${prefix(message)} - ${message.message}${endOfLine.EOL}`;

        fs.appendFile(this.path, sMessage, function (err) {
            if (err) {
                return console.log(err);
            }
        });
    }
}