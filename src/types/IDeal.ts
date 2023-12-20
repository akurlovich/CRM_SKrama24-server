import { Document, Schema } from "mongoose";

export interface IDeal extends Document {
  companyID: Schema.Types.ObjectId,
  userID: Schema.Types.ObjectId,
  dealTitle: string,
  description: string,
  dateEnd: string,
  timeEnd: string,
  isDone: boolean,
}