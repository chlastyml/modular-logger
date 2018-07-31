import { colorText } from "./_colors";

export const bgRawColors = {
    Black: "\x1b[40m",
    Red: "\x1b[41m",
    Green: "\x1b[42m",
    Yellow: "\x1b[43m",
    Blue: "\x1b[44m",
    Magenta: "\x1b[45m",
    Cyan: "\x1b[46m",
    White: "\x1b[47m",
}

const bgBlack = (text: string): string => {
    return colorText(text, bgRawColors.Black);
}
const bgRed = (text: string): string => {
    return colorText(text, bgRawColors.Red);
}
const bgGreen = (text: string): string => {
    return colorText(text, bgRawColors.Green);
}
const bgYellow = (text: string): string => {
    return colorText(text, bgRawColors.Yellow);
}
const bgBlue = (text: string): string => {
    return colorText(text, bgRawColors.Blue);
}
const bgMagenta = (text: string): string => {
    return colorText(text, bgRawColors.Magenta);
}
const bgCyan = (text: string): string => {
    return colorText(text, bgRawColors.Cyan);
}
const bgWhite = (text: string): string => {
    return colorText(text, bgRawColors.White);
}

export default {
    Black: bgBlack,
    Red: bgRed,
    Green: bgGreen,
    Yellow: bgYellow,
    Blue: bgBlue,
    Magneta: bgMagenta,
    Cyan: bgCyan,
    White: bgWhite
}