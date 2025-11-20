import { Schema, model } from "mongoose";
import { ICarrier } from "../types/ICarrier";
// import { ICompany } from "../types/ICompany";

const CarrierSchema: Schema = new Schema<ICarrier>({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  usersID: [{
    type: Schema.Types.ObjectId,
    ref: 'User',
  }],
  description: {
    type: String,
    default: '',
  },
  contactID: {
    type: Schema.Types.ObjectId,
    ref: 'Contact',
  },
  dealsID: [{
    type: Schema.Types.ObjectId,
    ref: 'Deal',
  }],
  commentsID: [{
    type: Schema.Types.ObjectId,
    ref: 'Comment',
  }],
},
{ timestamps: true },
);

export default model<ICarrier>('Carrier', CarrierSchema);