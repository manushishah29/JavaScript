"use strict";
/// <reference path="./Utils.ts"/>
var UserUtils;
(function (UserUtils) {
    class User extends UserUtils.Perent {
        getName() {
            return this.name;
        }
    }
    UserUtils.User = User;
})(UserUtils || (UserUtils = {}));
let u1 = new UserUtils.User();
u1.setName("Manushi");
console.log(u1.getName());
//# sourceMappingURL=nameSpaceExample.js.map