"use strict";
var options = {
    program: "test1",
    commandline: "Hello"
};
console.log(options.program);
console.log(options.commandline);
options = {
    program: "test1",
    commandline: ["Hello", "World"]
};
console.log(options.commandline[0]);
console.log(options.commandline[1]);
options = {
    program: "test1",
    commandline: () => { return "Hello world"; }
};
var fnn = options.commandline;
console.log(fnn());
//# sourceMappingURL=interfaceExample2.js.map