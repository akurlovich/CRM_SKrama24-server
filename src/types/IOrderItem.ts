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
  productTitle: string,
  productDimension: string,
  vatSum: number,
  totalSum: number
}

export interface IOrderItemNewAdd {
  orderID: string,
  productID: string,
  price: number,
  count: number,
  sum: number,
}


