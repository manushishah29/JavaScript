"use strict";
//simple function
function test() {
    console.log("Hello world");
}
test();
//returning the function
function greeting() {
    return "Hello Manushi";
}
function call() {
    var msg = greeting();
    console.log(msg);
}
call();
//Parameterized Function
function para(name, num) {
    console.log(name);
    console.log(num);
}
para("Manushi", 123);
//optional parameter function
function showDetails(numm, name1, email) {
    console.log(numm + " " + name1 + " " + email);
}
showDetails(123, "Manushi");
showDetails(234, "AAngi", "aangi@gmail.com");
//Default parameter function
function defalutExample(name2, greetings = "Hello") {
    console.log(greetings + " " + name2);
}
defalutExample("Manushi");
defalutExample("Aangi", "Hi");
//Rest Parameter function
function sum(n1, ...n2) {
    let ans = 0;
    for (var i = 0; i < n2.length; i++) {
        ans += n2[i];
    }
    console.log(ans);
}
sum(2, 3);
sum(4, 5, 6, 7, 8);
//function constructor
var myFunction = new Function("a", "b", "return a * b");
var x = myFunction(3, 4);
console.log(x);
//Lamda function
var lamdaExample = (x) => 10 + x;
console.log(lamdaExample(10));
//Recursion Function
function factoriall(number) {
    if (number <= 0) {
        return 1;
    }
    else {
        return (number * factoriall(number - 1));
    }
}
console.log(factoriall(6));
//Parameter type Inference
var func = (x) => {
    if (typeof x == "number") {
        console.log(x + " " + "is numeric");
    }
    else if (typeof x == "string") {
        console.log(x + " " + "is String");
    }
};
func(12);
func("Manushi");
function addition(a, b) {
    return a + b;
}
console.log(addition(2, 3));
console.log(addition("Hello", "World"));
//# sourceMappingURL=functions.js.map