export  class Addition
{
   
    constructor(private x:number,private y:number)
    {
     
    }
    public sum()
    {
        console.log("Sum:"+(this.x+this.y))
    }
}

export  class Substraction
{
   
    
    constructor(private a:number,private b:number)
    {
       
    }
    public sub()
    {
        console.log("Sub:"+(this.a-this.b))
    }
}