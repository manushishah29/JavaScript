"use strict";
//Number Properties
console.log("Number Properties");
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.POSITIVE_INFINITY);
console.log(Math.sqrt(-5));
//Prptptype Example
function employee(id, name) {
    this.id = id;
    this.name = name;
}
var emp = new employee(123, "Smith");
employee.prototype.email = "smith@abc.com";
console.log("Employee 's Id: " + emp.id);
console.log("Employee's name: " + emp.name);
console.log("Employee's Email ID: " + emp.email);
//Number Method
var n3 = 1234.0898;
console.log(n3.toExponential());
console.log(n3.toFixed(1));
console.log(n3.toLocaleString());
var n4 = new Number(789.2);
console.log(n4.toPrecision(1));
console.log(n4.valueOf());
//# sourceMappingURL=numbers.js.map