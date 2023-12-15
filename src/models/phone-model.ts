import { Schema, model } from "mongoose";
import { IPhone } from "../types/IPhone";

const PhoneSchema: Schema = new Schema<IPhone>({
  companyID: {
    type: Schema.Types.ObjectId,
    ref: 'Company',
    required: true,
  },
  number: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
},
{ timestamps: true },
);

export default model<IPhone>('Phone', PhoneSchema);