"use strict";
class Greet {
    greet() {
        console.log("Good AfterNoon");
    }
}
var g = new Greet();
g.greet();
//Instance of operator
class note {
}
var n = new note();
console.log(n instanceof note);
//Data hiding
class Encapsulate {
    constructor() {
        this.str = "hello";
        this.str2 = "World";
    }
}
var en = new Encapsulate();
console.log(en.str);
class agriLoan {
    constructor(interest, rebate) {
        this.interest = interest;
        this.rebate = rebate;
    }
}
var loan = new agriLoan(10, 1);
console.log(loan.interest + " " + loan.rebate);
//# sourceMappingURL=classExample.js.map