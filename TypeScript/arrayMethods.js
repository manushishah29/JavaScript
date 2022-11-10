"use strict";
// var namee:string[]=["A","B","C"]
// var idd:string[]=["1","2","3"]
// var Concat=idd.concat(namee)
// console.log(Concat)
//every method
function isBigEnough(element, index, array) {
    return (element <= 20);
}
var passed = [12, 6, 7, 8, 9].every(isBigEnough);
console.log(passed);
var n5 = [7, 8, 9];
n5.forEach(function (value) {
    console.log(value);
});
var n9 = [5, 6, 7, 8, 9, 8];
console.log(n9.indexOf(8));
console.log(n9.lastIndexOf(8));
console.log(n9.join('+'));
var n10 = n9.push(10);
console.log("push" + n10);
var n11 = n9.pop();
console.log("pop" + n9);
console.log("reverse" + n9.reverse());
console.log("sort" + n9.sort());
var n12 = n9.unshift(10);
console.log("unshift" + n9);
var n13 = n9.shift();
console.log("shift" + n9);
console.log(n9.slice(1, 2));
console.log("splice" + n9.splice(3, 5));
var total = [9, 3].reduceRight(function (a, b) { return a / b; });
console.log(total);
//# sourceMappingURL=arrayMethods.js.map