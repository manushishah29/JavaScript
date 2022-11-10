"use strict";
// var firstName:string="Manushi";
// var age:number=20;
// console.log(firstName,age);
// var str='1';
// var str2:number=<number><any> str;
// console.log(typeof str);
var global_number = 12;
class Numbers {
    constructor() {
        this.number_val = 10;
    }
    storeNum() {
        var local_num = 11;
        console.log(local_num);
    }
}
Numbers.val = 10;
console.log(global_number);
console.log(Numbers.val);
var numobj = new Numbers();
console.log(numobj.number_val);
console.log(numobj.storeNum());
//# sourceMappingURL=variablesExample.js.map