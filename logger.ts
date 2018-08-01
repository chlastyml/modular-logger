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

export class Logger {
    namespace: string;
    minLevelToLog: logLevel;
    logMethods: Function[] = [];

    constructor(namespace: string, minLevelToLog = logLevel.Trace, defaultLogMethod: Function = logToConsole) {
        this.namespace = helper.clear_Text(namespace);
        this.minLevelToLog = minLevelToLog;
        this.logMethods.push(defaultLogMethod);
    }
    /* Set methods */
    setNamespace(newNamespace: string) {
        this.namespace = newNamespace;
        return this;
    }
    setMinLevelLog(minLevelLogInput: logLevel) {
        this.minLevelToLog = minLevelLogInput;
        return this;
    }

    clearLogMethod(){
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

    /* ************************************************** */

    /* Get methods */
    getNamespace(): string {
        return this.namespace;
    }

    getMinLevelLog(): logLevel {
        return this.minLevelToLog;
    }

    getLogMethod(): Function[] {
        return this.logMethods;
    }
    /* ************************************************** */

    private createMessage(text: string, level: logLevel): IMessage {
        return {
            namespace: this.namespace,
            level,
            date: new Date(),
            message: text
        }
    }

    /* Log methods */
    log(logText: string, level: logLevel = logLevel.Info) {
        return new Promise((resolve, reject) => {
            try {
                if (this.minLevelToLog <= level) {
                    logText = logText ? logText : ''; // can be undefined?
                    const message = this.createMessage(logText, level);
                    this.logMethods.forEach(logMethod => {
                        new Promise((resolve, reject)=> {
                            try{
                                resolve(logMethod(message));
                            }catch(err){
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
    /* ************************************************** */
    toString() {
        return JSON.stringify({
            name: this.namespace,
            minLevelToLog: this.minLevelToLog
        }, null, 4);
    }
}
