"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Substraction = exports.Addition = void 0;
class Addition {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    sum() {
        console.log("Sum:" + (this.x + this.y));
    }
}
exports.Addition = Addition;
class Substraction {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
    sub() {
        console.log("Sub:" + (this.a - this.b));
    }
}
exports.Substraction = Substraction;
//# sourceMappingURL=modules.js.map