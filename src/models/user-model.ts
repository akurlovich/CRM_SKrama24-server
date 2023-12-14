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
  positionID: {
    type: Schema.Types.ObjectId,
    ref: 'Position',
    default: '',
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