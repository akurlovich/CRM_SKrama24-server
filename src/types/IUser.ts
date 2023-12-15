import { Document } from "mongoose";

export interface IUser extends Document {
  email: string,
  password: string,
  firstname: string,
  lastname: string,
  surname: string,
  position: string,
  avatar: string,
  isAdmin: boolean,
}