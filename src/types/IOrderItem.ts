import { Document, Schema } from "mongoose";

export interface IOrderItem extends Document {
  orderID: Schema.Types.ObjectId,
  productID: Schema.Types.ObjectId,
  price: number,
  count: number,
  sum: number,
}