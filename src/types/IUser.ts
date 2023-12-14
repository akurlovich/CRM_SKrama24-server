import { Document, Schema } from "mongoose";

export interface IUser extends Document {
  email: string,
  password: string,
  firstname: string,
  lastname: string,
  positionID: Schema.Types.ObjectId,
  avatar: string,
  isAdmin: boolean,
}