import { Document, Schema } from "mongoose";

export interface IProduct extends Document {
  title: string,
  price: number,
  dimension: Schema.Types.ObjectId,
  count: number,
}