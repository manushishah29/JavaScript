class Shape
{
    Area:number

    constructor(a:number)
    {
        this.Area=a
    }
}
class Circle extends Shape
{
    display()
    {
        console.log("Area of circle is:"+this.Area)
    }
}
var circle=new Circle(10)
circle.display()