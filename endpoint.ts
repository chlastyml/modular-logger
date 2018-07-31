import { Create_Logger, Get_All_Loggers, Get_Logger } from "./index";
import { logLevel } from "./enums";

import fgColors from './colors/fgColors';
import common from './colors/common';
import bgColors from './colors/bgColors';

// In this file is all public method

export const CreateLogger = Create_Logger;
export const GetAllLoggers = Get_All_Loggers;
export const GetLogger = Get_Logger;

export const LogLevel = logLevel;

export const FgColors = fgColors;
export const BgColors = bgColors;
export const TextFeature = common;

export default {
    CreateLogger,
    GetAllLoggers,
    GetLogger,

    LogLevel,

    FgColors,
    BgColors,
    TextFeature
}