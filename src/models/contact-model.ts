import { Schema, model } from "mongoose";
import { IContact } from "../types/IContact";

const ContactSchema: Schema = new Schema<IContact>({
  companyID: {
    type: Schema.Types.ObjectId,
    ref: 'Company',
  },
  address: {
    main: {
      type: String,
      default: '',
    },
    district: {
      type: String,
      default: '',
    }
  },
  phonesID: [{
    type: Schema.Types.ObjectId,
    ref: 'Phone',
  },],
  emailsID: [{
    type: Schema.Types.ObjectId,
    ref: 'Email',
  },],
},
{ timestamps: true },
);

export default model<IContact>('Contact', ContactSchema);