import { Logger } from './logger';
import { logLevel } from './enums';
import common from './colors/common';
import { logToConsole } from './loggerDefaultMethod';

const loggers: Array<Logger> = [];
const Default_Logger: Logger = new Logger(common.Inverse("Logger")).addLogMethod(logToConsole);

export const Create_Logger = (namespace: string, minLevelToLog: logLevel = logLevel.Trace): Logger => {
    var resultLogger = loggers.find(log => log.getNamespace() === namespace);

    if (resultLogger) {
        throw new Error("Logger " + namespace + " already exist!");
    }

    resultLogger = new Logger(namespace, minLevelToLog);
    loggers.push(resultLogger);

    Default_Logger.logTrace("Logger created: " + namespace);

    return resultLogger;
}

export const Get_All_Loggers = (): Array<Logger> => {
    return loggers;
}

export const Get_Logger = (namespace?: string): Logger => {
    if (namespace) {
        var resultLogger = loggers.find(log => log.getNamespace() === namespace);

        if (!resultLogger) {
            throw new Error("Logger " + namespace + " doesn't exist!");
        }

        return resultLogger;
    }else{
        return Default_Logger;
    }
}