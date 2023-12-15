import { Document, Schema } from "mongoose";

export interface IContact extends Document {
  companyID: Schema.Types.ObjectId,
  address: string,
  phonesID: Array<Schema.Types.ObjectId>,
  emailsID: Array<Schema.Types.ObjectId>,
  district: string,
}