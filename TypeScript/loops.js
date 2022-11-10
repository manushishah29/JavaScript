"use strict";
//for loop
var n = 5;
var i;
var factorial = 1;
for (i = n; i >= 1; i--) {
    factorial *= i;
}
console.log(factorial);
//for in loop
var j;
var n1 = "a b c";
for (j in n1) {
    console.log(n1[j]);
}
//while loop
var factnum = 5;
var fact = 1;
while (factnum > 1) {
    fact *= factnum;
    factnum--;
}
console.log(fact);
// do while loop
var nm = 10;
do {
    console.log(nm);
    nm--;
} while (nm > 0);
//# sourceMappingURL=loops.js.map