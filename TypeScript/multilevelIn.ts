class root
{
    str: string
    constructor(str:string)
    {
        this.str=str
    }

}
class child extends root{}
class Leaf extends child{
}
var leaf=new Leaf("Hello")

console.log(leaf.str)