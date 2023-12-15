import { Schema, model } from "mongoose";
import { IUser } from "../types/IUser";

const UserSchema: Schema = new Schema<IUser>({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    default: '',
  },
  position: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    default: '',
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  
},
{ timestamps: true },
);

export default model<IUser>('User', UserSchema);