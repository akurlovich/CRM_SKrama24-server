import { Schema, model } from "mongoose";
import { IEmail } from "../types/IEmail";

const EmailSchema: Schema = new Schema<IEmail>({
  companyID: {
    type: Schema.Types.ObjectId,
    ref: 'Company',
    required: true,
  },
  email: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
  isActive: {
    type: Boolean,
    default: false,
  },
},
{ timestamps: true },
);

export default model<IEmail>('Email', EmailSchema);