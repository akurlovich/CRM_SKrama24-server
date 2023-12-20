import { Schema, model } from "mongoose";
import { IProduct } from "../types/IProduct";

const ProductSchema: Schema = new Schema<IProduct>({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  price: {
    type: Number,
    default: 1,
  },
  dimension: {
    type: String,
    required: true,
  },
  count: {
    type: Number,
    default: 1,
  },
},
{ timestamps: true },
);

export default model<IProduct>('Product', ProductSchema);