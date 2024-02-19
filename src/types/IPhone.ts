import { Document, Schema } from "mongoose";

export interface IPhone extends Document {
  companyID: Schema.Types.ObjectId,
  number: string,
  description: string,
  isActive: boolean,
}

export interface IPhoneUpdate{
  number: string,
  description: string,
}