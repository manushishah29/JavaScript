class Person
{
    name:string

    constructor(name:string)
    {
        this.name=name
    }
    display() :void{
        console.log("Name is: "+this.name)
    }
}
var ob=new Person("Manushi")
ob.display()