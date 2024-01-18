import { Document, Schema } from "mongoose";

export interface IPhone extends Document {
  companyID: Schema.Types.ObjectId,
  number: string,
  description: string,
}

export interface IPhoneUpdate{
  number: string,
  description: string,
}