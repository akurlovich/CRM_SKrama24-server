import { Document, Schema } from "mongoose";

export interface IOrder extends Document {
  orderNumber: number,
  companyID: Schema.Types.ObjectId,
  usersID: Schema.Types.ObjectId,
  orderItemID: Array<Schema.Types.ObjectId>,
  totalSum: number,
  description: string,
  fileName: string[],
  status: StatusType,
}

type StatusType = 'processing' | 'done' | 'cansel';
  
