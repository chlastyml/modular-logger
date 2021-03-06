import { Logger } from "./logger";
import { Create_Logger } from ".";
import { logToFile, logToConsole } from "./loggerDefaultMethod";


export const CreateConsoleLogger = (namespace: string): Logger => {
    return Create_Logger(namespace).addLogMethod(logToConsole);
}

export const CreateFileLogger = (namespace: string, path: string): Logger => {
    const logger = Create_Logger(namespace);
    logToFile(logger, path)
    return logger;
}

export const CreateConsoleFileLogger = (namespace: string, path: string): Logger => {
    return CreateFileLogger(namespace, path).addLogMethod(logToConsole);;
}