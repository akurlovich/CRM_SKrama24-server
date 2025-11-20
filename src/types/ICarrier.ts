import { Document, Schema } from "mongoose";

export interface ICarrier extends Document {
  title: string,
  usersID: Array<Schema.Types.ObjectId>,
  description: string,
  contactID: Schema.Types.ObjectId,
  dealsID: Array<Schema.Types.ObjectId>,
  // ordersID: Array<Schema.Types.ObjectId>,
  commentsID: Array<Schema.Types.ObjectId>,
}