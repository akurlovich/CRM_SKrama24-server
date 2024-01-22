import { Document, Schema } from "mongoose";

export interface IDeal extends Document {
  companyID: Schema.Types.ObjectId,
  userID: Schema.Types.ObjectId,
  dealTitleID: Schema.Types.ObjectId,
  description: string,
  dateEnd: string,
  timeEnd: string,
  isDone: boolean,
}

export interface IDealUpdate {
  userID: Schema.Types.ObjectId,
  description: string,
  dateEnd: string,
  timeEnd: string,
  isDone: boolean,
}