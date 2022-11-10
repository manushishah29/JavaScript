//single inharitance
interface Person{
    age:number
}
interface Musician extends Person
{
    instrument:string
}
var manushi:Musician={
    age:22,
    instrument:"drummer"
}
console.log(manushi.age)
console.log(manushi.instrument)