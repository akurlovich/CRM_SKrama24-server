import { Document, Schema } from "mongoose";

export interface IComment extends Document {
  companyID: Schema.Types.ObjectId,
  usersID: Schema.Types.ObjectId,
  description: string,
  date: string,
  time: string,
}