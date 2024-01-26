import { Document, Schema } from "mongoose";

export interface IProduct extends Document {
  title: string,
  price: number,
  dimension: string,
  count: number,
}