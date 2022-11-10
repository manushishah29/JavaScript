let fistName:string="Manushi";
let lastName:string="Shah";

let fullName:string="Name is "+fistName+"Last Name is"+lastName;
let fullName2:string=`Name is: ${fistName} ${lastName}`;
console.log(fullName);
console.log(fullName2);

//enum
enum Color
{
    Red,Green,Bule
};

var c=Color;
console.log(c.Red)

//Array
 
var arr1:string[]=["Hello","World"];
var arr2:Array<string>=["Hello","World"];

var arr3:any[]=["Hello",10,true];
