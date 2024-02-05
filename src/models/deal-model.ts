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
  dealTitleID: {
    type: Schema.Types.ObjectId,
    ref: 'DealTitle',
    required: true,
  },
  description: {
    type: String,
    default: '',
  },
  dayEnd: {
    type: String,
    required: true,
  },
  monthEnd: {
    type: String,
    required: true,
  },
  yearEnd: {
    type: String,
    required: true,
  },
  minuteEnd: {
    type: String,
    required: true,
  },
  hourEnd: {
    type: String,
    required: true,
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