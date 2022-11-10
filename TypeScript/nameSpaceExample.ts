/// <reference path="./Utils.ts"/>
namespace UserUtils
{
    export class User extends Perent
    {
        getName()
        {
            return this.name
        }
    }
}
let u1=new UserUtils.User()
u1.setName("Manushi")
console.log(u1.getName())