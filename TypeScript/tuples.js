"use strict";
var tuple_example = [10, "Manushi"];
console.log(tuple_example[0]);
console.log(tuple_example[1]);
var tup = [];
tup[0] = 1;
tup[1] = "Manushi";
console.log("Before push:" + tup);
tup.pop();
console.log("After Pop:" + tup);
tup.push("Aangi");
console.log(tup);
tup[0] = "2";
console.log("Updating Tuples:" + tup);
//Destructuring tuples
console.log("Distructuring Tuple");
var aa = [10, "Hello"];
var [bb, cc] = aa;
console.log(bb);
console.log(cc);
//Passing a tuple in function
console.log("Passing a tuple in function");
var emp_tuple = [1, "Manushi", 2, "Aangi"];
function display_tuple(emp_tuple) {
    for (let i = 0; i < emp_tuple.length; i++) {
        console.log(emp_tuple[i]);
    }
}
display_tuple(emp_tuple);
//# sourceMappingURL=tuples.js.map