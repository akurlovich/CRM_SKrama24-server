import { Schema, model } from "mongoose";
import { IOrder } from "../types/IOrder";

const OrderSchema: Schema = new Schema<IOrder>({
  orderNumber: {
    type: Number,
    required: true,
    unique: true,
  },
  companyID: {
    type: Schema.Types.ObjectId,
    ref: 'Company',
    required: true,
  },
  usersID: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  orderItemID: [{
    type: Schema.Types.ObjectId,
    ref: 'OrderItem',
  }],
  totalSum: {
    type: Number,
    default: 0,
  },
  description: {
    type: String,
    default: '',
  },
  fileName: [{
    type: String,
    default: [],
  }],
  status: {
    type: String,
    default: 'processing',
  },
},
{ timestamps: true },
);

export default model<IOrder>('Order', OrderSchema);