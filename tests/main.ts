
import Fg from "../colors/fgColors";
import common from "../colors/common";
import { colorLevel } from "../helper";
import { logLevel } from "../enums";
import ModuleLogger from "../index";

const testHelper = () => {
    const trace = colorLevel(logLevel.trace);
    const debug = colorLevel(logLevel.debug);
    const info = colorLevel(logLevel.info);
    const warning = colorLevel(logLevel.warning);
    const error = colorLevel(logLevel.error);

    console.log(trace);
    console.log(debug);
    console.log(info);
    console.log(warning);
    console.log(error);
}

ModuleLogger.GetLogger().log('Test logovani!');

