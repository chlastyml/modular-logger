
export enum logLevel {
    trace = 0,
    debug = 1,
    info = 2,
    warning = 3,
    error = 4
}

// exports.logLevel = new Enum({
//     'trace': 0,
//     'debug': 1,
//     'info': 2,
//     'warning': 3,
//     'error': 4
// }, {
//         name: "logLevel",
//         ignoreCase: true
//     });

// function convertEnum(input, enumInput, throwError = false) {
//     var result = enumInput.get(input);

//     if (!result && throwError) {
//         throw new Error(input + " not found in " + enumInput.name + " enum");
//     }

//     return result;
// }