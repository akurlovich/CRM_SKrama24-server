import { Schema, model } from "mongoose";
import { IContact } from "../types/IContact";

const ContactSchema: Schema = new Schema<IContact>({
  companyID: {
    type: Schema.Types.ObjectId,
    ref: 'Company',
    required: true,
  },
  address: {
    type: String,
    default: '',
  },
  phonesID: [{
    type: Schema.Types.ObjectId,
    ref: 'Phone',
    default: [],
  }],
  emailsID: [{
    type: Schema.Types.ObjectId,
    ref: 'Email',
    default: [],
  }],
  district: {
    type: String,
    default: '',
  },
},
{ timestamps: true },
);

export default model<IContact>('Contact', ContactSchema);