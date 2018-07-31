import { colorText } from "./_colors";

export const fgRawColors = {
    Black: "\x1b[30m",
    Red: "\x1b[31m",
    Green: "\x1b[32m",
    Yellow: "\x1b[33m",
    Blue: "\x1b[34m",
    Magenta: "\x1b[35m",
    Cyan: "\x1b[36m",
    White: "\x1b[37m",
}

const fgBlack = (text: string): string => {
    return colorText(text, fgRawColors.Black);
}
const fgRed = (text: string): string => {
    return colorText(text, fgRawColors.Red);
}
const fgGreen = (text: string): string => {
    return colorText(text, fgRawColors.Green);
}
const fgYellow = (text: string): string => {
    return colorText(text, fgRawColors.Yellow);
}
const fgBlue = (text: string): string => {
    return colorText(text, fgRawColors.Blue);
}
const fgMagenta = (text: string): string => {
    return colorText(text, fgRawColors.Magenta);
}
const fgCyan = (text: string): string => {
    return colorText(text, fgRawColors.Cyan);
}
const fgWhite = (text: string): string => {
    return colorText(text, fgRawColors.White);
}

export default {
    Black: fgBlack,
    Red: fgRed,
    Green: fgGreen,
    Yellow: fgYellow,
    Blue: fgBlue,
    Magneta: fgMagenta,
    Cyan: fgCyan,
    White: fgWhite
}