import { colorText } from "./_colors";

const comonColor = {
    Bright: "\x1b[1m",
    Dim: "\x1b[2m",
    Underscore: "\x1b[4m",
    Blink: "\x1b[5m",
    Reverse: "\x1b[7m",
    Hidden: "\x1b[8m",
}

const cBringht = (text: string): string => {
    return colorText(text, comonColor.Bright);
}
const cDim = (text: string): string => {
    return colorText(text, comonColor.Dim);
}
const cUnderscore = (text: string): string => {
    return colorText(text, comonColor.Underscore);
}
const cBlink = (text: string): string => {
    return colorText(text, comonColor.Blink);
}
const cReverse = (text: string): string => {
    return colorText(text, comonColor.Reverse);
}
const cHidden = (text: string): string => {
    return colorText(text, comonColor.Hidden);
}

export default {
    Bold: cBringht,
    Dim: cDim,
    Underline: cUnderscore,
    // Blink: cBlink,
    Inverse: cReverse,
    // Hidden: cHidden
}