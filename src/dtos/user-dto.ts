import { Schema } from "mongoose";
import { IUser } from "../types/IUser";

export default class UserDto {
  id: string;
  email: string;
  password: string;
  firstname: string;
  lastname: string;
  positionID: Schema.Types.ObjectId;
  avatar: string;
  isAdmin: boolean;

  constructor(model: IUser) {
    this.id = model._id;
    this.email = model.email;
    this.password = model.password;
    this.lastname = model.lastname;
    this.positionID = model.positionID;
    this.avatar = model.avatar;
    this.isAdmin = model.isAdmin;
  }
}