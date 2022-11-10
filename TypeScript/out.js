var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var UserUtils;
(function (UserUtils) {
    var Perent = /** @class */ (function () {
        function Perent() {
        }
        Perent.prototype.setName = function (name) {
            return this.name = name;
        };
        return Perent;
    }());
    UserUtils.Perent = Perent;
})(UserUtils || (UserUtils = {}));
/// <reference path="./Utils.ts"/>
var UserUtils;
(function (UserUtils) {
    var User = /** @class */ (function (_super) {
        __extends(User, _super);
        function User() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        User.prototype.getName = function () {
            return this.name;
        };
        return User;
    }(UserUtils.Perent));
    UserUtils.User = User;
})(UserUtils || (UserUtils = {}));
var u1 = new UserUtils.User();
u1.setName("Manushi");
console.log(u1.getName());
