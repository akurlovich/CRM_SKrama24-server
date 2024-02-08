import { Schema } from "mongoose";
import { IUser } from "../types/IUser";

export default class UserDto {
  id: string;
  email: string;
  firstname: string;
  lastname: string;
  position: string;
  avatar: string;
  isAdmin: boolean;

  constructor(model: IUser) {
    this.id = model._id;
    this.email = model.email;
    this.firstname = model.firstname;
    this.lastname = model.lastname;
    this.position = model.position;
    this.avatar = model.avatar;
    this.isAdmin = model.isAdmin;
  }
}