var alphas:string[]=['1','2','3','4']
console.log(alphas[0])
console.log(alphas[1])
        //OR

var alphas1:string[]
alphas1=['1','2','3','4']
console.log(alphas1[1])
console.log(alphas1[2])

//Array object numeric value

var numm:number[]=new Array(4)
for(let i=0;i<numm.length;i++)
{
    
    numm[i]=i*2;
    console.log(numm[i])
}


//comma seperated value

var alp:string[]=["Manushi","Aangi","Krisha","Krishna","Zeel"]
for(let i=0;i<alp.length;i++)
{
    console.log(alp[i])
}

//Destructing Aray

let student=["Manushi","Shah","Female"]

let [fn,ln,gender] = student

console.log(fn)
console.log(ln)
console.log(gender)

//Passing array with functions

var arr:string[]=["ABC","XYZ","PQR"]
function displayArray(arr:string[])
{
    for(let i=0;i<arr.length;i++)
    {
        console.log(arr[i])
    }
}
displayArray(arr)

//Function Retruning the Array

function display():string[]
{
   return new Array("M","N","O")
}
var arr1:string[]=display()
{
    for(let i in arr1)
    {
        console.log(arr1[i])
    }
}