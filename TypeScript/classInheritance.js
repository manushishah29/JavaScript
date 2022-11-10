"use strict";
class Shape {
    constructor(a) {
        this.Area = a;
    }
}
class Circle extends Shape {
    display() {
        console.log("Area of circle is:" + this.Area);
    }
}
var circle = new Circle(10);
circle.display();
//# sourceMappingURL=classInheritance.js.map