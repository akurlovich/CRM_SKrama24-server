import { Document, Schema } from "mongoose";

export interface IOrderItem extends Document {
  orderID: Schema.Types.ObjectId,
  productID: Schema.Types.ObjectId,
  price: number,
  count: number,
  sum: number,
}

export interface IOrderItemNew {
  productID: string,
  price: number,
  count: number,
  sum: number,
}

export interface IOrderItemNewAdd {
  orderID: Schema.Types.ObjectId,
  productID: string,
  price: number,
  count: number,
  sum: number,
}