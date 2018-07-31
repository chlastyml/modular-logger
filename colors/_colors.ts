const Reset = "\x1b[0m";

export const colorText = (text: string, color: string): string => {
    if (text.endsWith(Reset)) {
        return `${color}${text}`;
    } else {
        return `${color}${text}${Reset}`;
    }
}