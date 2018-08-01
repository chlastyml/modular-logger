import { Create_Logger, Get_All_Loggers, Get_Logger } from "./index";
import { logLevel } from "./enums";

import fgColors from './colors/fgColors';
import common from './colors/common';
import bgColors from './colors/bgColors';
import { clear_Text } from "./helper";
import { prefix } from "./loggerDefaultMethod";

// In this file is all public method

const CreateLogger = Create_Logger;
const GetAllLoggers = Get_All_Loggers;
const GetLogger = Get_Logger;

const LogLevel = logLevel;

const FgColors = fgColors;
const BgColors = bgColors;
const TextFeature = common;

const clearText = clear_Text;

const prefixMethod = prefix;


export default {
    Loggers: {
        CreateLogger,
        GetAllLoggers,
        GetLogger
    },

    LogLevel,

    Text: {
        FgColors,
        BgColors,
        TextFeature,
    },

    Methods: {
        clearText,
        loggers: {
            prefixMethod
        }
    }
}