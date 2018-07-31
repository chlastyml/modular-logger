import * as defaultMethods from "./loggerDefaultMethod";
import * as helper from './helper';
import { logLevel } from "./enums";

/* ************************************************** */

export class Logger {
    namespace: string;
    logNamespace: string;
    minLevelToLog: logLevel;
    prefixMethod: Function;
    logMethod: Function;

    constructor(namespace: string, minLevelToLog = logLevel.trace) {
        this.namespace =  helper.clearText(namespace);
        this.logNamespace = namespace
        this.minLevelToLog = minLevelToLog;
        this.prefixMethod = defaultMethods.prefix;
        this.logMethod = defaultMethods.logMethod;
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
    setLogMethod(newLogMethod: Function) {
        if (typeof newLogMethod !== 'function') {
            throw new Error("New method must be function!");
        }
        this.logMethod = newLogMethod;
        return this;
    }
    setPrefixMethod(newPrefixMethod: Function) {
        if (typeof newPrefixMethod !== 'function') {
            throw new Error("New method must be function!");
        }
        this.prefixMethod = newPrefixMethod;
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

    getLogMethod(): Function {
        return this.logMethod;
    }
    getPrefixMethod(): Function {
        return this.prefixMethod;
    }
    /* ************************************************** */
    /* Log methods */
    log(text: string, level: logLevel = logLevel.info) {
        return new Promise((resolve, reject) => {
            try {
                if (this.minLevelToLog <= level) {
                    var prefixText = this.prefixMethod(level, this.logNamespace);
                    this.logMethod(prefixText, text);
                }
                resolve(true);
            } catch (e) {
                reject(e);
            }
        });
    }

    logTrace(text: string) {
        return this.log(text, logLevel.trace)
    }
    logDebug(text: string) {
        return this.log(text, logLevel.debug)
    }
    logInfo(text: string) {
        return this.log(text, logLevel.info)
    }
    logWarning(text: string) {
        return this.log(text, logLevel.warning)
    }
    logError(text: string) {
        return this.log(text, logLevel.error)
    }
    /* ************************************************** */
    toString() {
        return JSON.stringify({
            name: this.namespace,
            minLevelToLog: this.minLevelToLog
        }, null, 4);
    }
}







