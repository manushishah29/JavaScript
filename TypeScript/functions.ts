//simple function
function test()
{
    console.log("Hello world");
}
test()

//returning the function
function greeting():string
{
    return "Hello Manushi";
}
function call()
{
    var msg=greeting();
    console.log(msg);
}
call();

//Parameterized Function

function para(name:String,num:number)
{
    console.log(name);
    console.log(num);
}
para("Manushi",123)

//optional parameter function
function showDetails(numm:number,name1:string,email?:string)
{
    console.log(numm+" "+name1+" "+email);
}
showDetails(123,"Manushi")
showDetails(234,"AAngi","aangi@gmail.com")

//Default parameter function
function defalutExample(name2:string,greetings:string="Hello")
{
    console.log(greetings+" "+name2)
}
defalutExample("Manushi")
defalutExample("Aangi","Hi")

//Rest Parameter function

function sum(n1:number,...n2:number[])
{
    let ans=0;
    for(var i=0;i<n2.length;i++)
    {
        ans+=n2[i];

    }
    console.log(ans);
}
sum(2,3)
sum(4,5,6,7,8)

//function constructor

var myFunction=new Function("a","b","return a * b");
var x:number=myFunction(3,4)
console.log(x)

//Lamda function
var lamdaExample=(x:number)=>10+x
console.log(lamdaExample(10))

//Recursion Function
function factoriall(number:number):any
{
    if(number<=0)
    {
        return 1;
    }
    else
    {
        return(number*factoriall(number-1))
    }
}
console.log(factoriall(6))

//Parameter type Inference
var func=(x:any)=>{
    if(typeof x=="number")
    {
        console.log(x+" "+"is numeric");
    }
    else if(typeof x=="string")
    {
        console.log(x+" "+"is String");
    }
}
func(12)
func("Manushi")

//function overloading

function addition(a:number,b:number):number
function addition(a:string,b:string):string

function addition(a:any,b:any):any
{
    return a+b;
}
console.log(addition(2,3))
console.log(addition("Hello","World"))
