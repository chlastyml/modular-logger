var Enum = require('enum');

exports.logLevel = new Enum({
    'trace': 0,
    'debug': 1,
    'info': 2,
    'warning': 3,
    'error': 4
}, {
    name: "logLevel",
    ignoreCase: true
});

exports.colorReset = "\x1b[0m";
exports.specials = new Enum({
    'bright': "\x1b[1m",
    'dim': "\x1b[2m",
    'underscore': "\x1b[4m",
    'blink': "\x1b[5m",
    'reverse': "\x1b[7m",
    'hidden': "\x1b[8m"
}, {
    ignoreCase: true
});
exports.fgColors = new Enum({
    'black': "\x1b[30m",
    'red': "\x1b[31m",
    'green': "\x1b[32m",
    'yellow': "\x1b[33m",
    'blue': "\x1b[34m",
    'magenta': "\x1b[35m",
    'cyan': "\x1b[36m",
    'white': "\x1b[37m"
}, {
    ignoreCase: true
});
exports.bgColors = new Enum({
    'black': "\x1b[40m",
    'red': "\x1b[41m",
    'green': "\x1b[42m",
    'yellow': "\x1b[43m",
    'blue': "\x1b[44m",
    'magenta': "\x1b[45m",
    'cyan': "\x1b[46m",
    'white': "\x1b[47m"
}, {
    ignoreCase: true
});