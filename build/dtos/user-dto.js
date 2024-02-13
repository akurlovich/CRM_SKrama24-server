"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserDto = /** @class */ (function () {
    function UserDto(model) {
        this.id = model._id;
        this.email = model.email;
        this.firstname = model.firstname;
        this.lastname = model.lastname;
        this.position = model.position;
        this.avatar = model.avatar;
        this.isAdmin = model.isAdmin;
    }
    return UserDto;
}());
exports.default = UserDto;
