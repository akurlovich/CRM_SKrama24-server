import { Document, Schema } from "mongoose";

export interface IEmail extends Document {
  companyID: Schema.Types.ObjectId,
  email: string,
  description: string,
}