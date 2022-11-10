"use strict";
function addition(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    else {
        return a.toString() + b.toString();
    }
}
console.log(addition(10, 20));
console.log(addition("Manushi", "Shah"));
//function type arrays
function display_union(name) {
    if (typeof name == "string") {
        console.log(name);
    }
    else {
        var i;
        for (i = 0; i < name.length; i++) {
            console.log(name[i]);
        }
    }
}
display_union("Manushi");
display_union(["Manushi", "Aangi", "Zeel", "Krisha"]);
//# sourceMappingURL=union.js.map