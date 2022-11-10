class Greet{
    greet()
    {
        console.log("Good AfterNoon");
    }
}
var g=new Greet();
g.greet();

//Instance of operator

class note{}
var n=new note()
console.log(n instanceof note)

//Data hiding
class Encapsulate
{
    str:string="hello"
    private str2:string="World"

}
var en=new Encapsulate()
console.log(en.str)
//console.log(en.str2)


//classes and interfaces

interface iLoan
{
    interest:number
}
class agriLoan implements iLoan
{
    interest: number;
    rebate:number;

    constructor(interest:number,rebate:number)
    {
        this.interest=interest
        this.rebate=rebate
    }
}
var loan=new agriLoan(10,1)
console.log(loan.interest+" "+loan.rebate)