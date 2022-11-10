interface person{
    name:string;
    age:number;
    display:(a:string,b:string)=>string;
}

var customer:person={
    name:"Manushi",
    age:22,
    display: (a,b) =>{return a.toString()+b.toString()} 

}

console.log(customer.name)
console.log(customer.age)
console.log(customer.display("Manushi","Shah"))