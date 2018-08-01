import * as helper from './helper';
import { logLevel } from "./enums";
import { logToConsole } from './loggerDefaultMethod';

export interface IMessage {
    namespace: string;
    date: Date;
    level: logLevel;
    message: string;
}
/* ************************************************** */

class BaseLogger {
    namespace: string;
    minLevelToLog: logLevel;

    constructor(namespace: string, minLevelToLog = logLevel.Trace) {
        this.namespace = helper.clear_Text(namespace);
        this.minLevelToLog = minLevelToLog;
    }

    setNamespace(newNamespace: string) {
        this.namespace = newNamespace;
        return this;
    }
    setMinLevelLog(minLevelLogInput: logLevel) {
        this.minLevelToLog = minLevelLogInput;
        return this;
    }

    getNamespace(): string {
        return this.namespace;
    }

    getMinLevelLog(): logLevel {
        return this.minLevelToLog;
    }

    protected createMessage(text: string, level: logLevel): IMessage {
        return {
            namespace: this.namespace,
            level,
            date: new Date(),
            message: text
        }
    }

    toString() {
        return JSON.stringify({
            name: this.namespace,
            minLevelToLog: this.minLevelToLog
        }, null, 4);
    }
}

export class Logger extends BaseLogger {
    logMethods: Function[] = [];
    constructor(namespace: string, minLevelToLog = logLevel.Trace, logMethod?: Function) {
        super(namespace, minLevelToLog);
        if (logMethod) this.logMethods.push(logMethod);
    }

    clearLogMethod() {
        this.logMethods = [];
        return this;
    }
    addLogMethod(newLogMethod: Function) {
        if (typeof newLogMethod !== 'function') {
            throw new Error("New method must be function!");
        }
        this.logMethods.push(newLogMethod);
        return this;
    }
    setLogMethod(newLogMethod: Function) {
        if (typeof newLogMethod !== 'function') {
            throw new Error("New method must be function!");
        }
        this.logMethods = [];
        this.logMethods.push(newLogMethod);
        return this;
    }

    getLogMethod(): Function[] {
        return this.logMethods;
    }

    /* ************************************************** */
    log(logText: string, level: logLevel = logLevel.Info) {
        return new Promise((resolve, reject) => {
            try {
                if (this.minLevelToLog <= level) {
                    logText = logText ? logText : ''; // can be undefined?
                    const message = this.createMessage(logText, level);
                    this.logMethods.forEach(logMethod => {
                        new Promise((resolve, reject) => {
                            try {
                                resolve(logMethod(message));
                            } catch (err) {
                                reject(err);
                            }
                        });
                    });
                    resolve(message);
                }
            } catch (e) {
                reject(e);
            }
        });
    }

    logTrace(text: string) {
        return this.log(text, logLevel.Trace)
    }
    logDebug(text: string) {
        return this.log(text, logLevel.Debug)
    }
    logInfo(text: string) {
        return this.log(text, logLevel.Info)
    }
    logWarning(text: string) {
        return this.log(text, logLevel.Warning)
    }
    logError(text: string) {
        return this.log(text, logLevel.Error)
    }
}