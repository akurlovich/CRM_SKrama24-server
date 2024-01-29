import { Schema, model } from "mongoose";
import { IOrderItem } from "../types/IOrderItem";

const OrderItemSchema: Schema = new Schema<IOrderItem>({
  orderID: {
    type: Schema.Types.ObjectId,
    ref: 'Order',
    required: true,
  },
  productID: {
    type: Schema.Types.ObjectId,
    ref: 'Product',
    required: true,
  },
  price: {
    type: Number,
    default: 1,
  },
  count: {
    type: Number,
    default: 1,
  },
  sum: {
    type: Number,
    default: 0,
  },
},
{ timestamps: true },
);

export default model<IOrderItem>('OrderItem', OrderItemSchema);