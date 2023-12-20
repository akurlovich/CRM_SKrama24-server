import { Schema, model } from "mongoose";
import { IDeal } from "../types/IDeal";

const DealSchema: Schema = new Schema<IDeal>({
  companyID: {
    type: Schema.Types.ObjectId,
    ref: 'Company',
    required: true,
  },
  userID: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  dealTitle: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: '',
  },
  dateEnd: {
    type: String,
    required: true,
  },
  timeEnd: {
    type: String,
    required: true,
  },
  isDone: {
    type: Boolean,
    default: false,
  },
},
{ timestamps: true },
);

export default model<IDeal>('Deal', DealSchema);