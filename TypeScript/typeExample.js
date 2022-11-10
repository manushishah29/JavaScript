"use strict";
let fistName = "Manushi";
let lastName = "Shah";
let fullName = "Name is " + fistName + "Last Name is" + lastName;
let fullName2 = `Name is: ${fistName} ${lastName}`;
console.log(fullName);
console.log(fullName2);
//enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Bule"] = 2] = "Bule";
})(Color || (Color = {}));
;
var c = Color;
console.log(c.Red);
//Array
var arr1 = ["Hello", "World"];
var arr2 = ["Hello", "World"];
var arr3 = ["Hello", 10, true];
//# sourceMappingURL=typeExample.js.map