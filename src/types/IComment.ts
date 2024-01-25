import { Document, Schema } from "mongoose";

export interface IComment extends Document {
  companyID: Schema.Types.ObjectId,
  userID: Schema.Types.ObjectId,
  description: string,
  dealType: string,
  date: string,
  time: string,
}