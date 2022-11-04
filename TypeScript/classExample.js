var Greet = /** @class */ (function () {
    function Greet() {
    }
    Greet.prototype.greet = function () {
        console.log("Good AfterNoon");
    };
    return Greet;
}());
var g = new Greet();
g.greet();
