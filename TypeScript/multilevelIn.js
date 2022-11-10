"use strict";
class root {
    constructor(str) {
        this.str = str;
    }
}
class child extends root {
}
class Leaf extends child {
}
var leaf = new Leaf("Hello");
console.log(leaf.str);
//# sourceMappingURL=multilevelIn.js.map