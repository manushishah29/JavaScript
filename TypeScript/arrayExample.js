"use strict";
var alphas = ['1', '2', '3', '4'];
console.log(alphas[0]);
console.log(alphas[1]);
//OR
var alphas1;
alphas1 = ['1', '2', '3', '4'];
console.log(alphas1[1]);
console.log(alphas1[2]);
//Array object numeric value
var numm = new Array(4);
for (let i = 0; i < numm.length; i++) {
    numm[i] = i * 2;
    console.log(numm[i]);
}
//comma seperated value
var alp = ["Manushi", "Aangi", "Krisha", "Krishna", "Zeel"];
for (let i = 0; i < alp.length; i++) {
    console.log(alp[i]);
}
//Destructing Aray
let student = ["Manushi", "Shah", "Female"];
let [fn, ln, gender] = student;
console.log(fn);
console.log(ln);
console.log(gender);
//Passing array with functions
var arr = ["ABC", "XYZ", "PQR"];
function displayArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
displayArray(arr);
//Function Retruning the Array
function display() {
    return new Array("M", "N", "O");
}
var arr1 = display();
{
    for (let i in arr1) {
        console.log(arr1[i]);
    }
}
//# sourceMappingURL=arrayExample.js.map