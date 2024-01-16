import { Schema, model } from "mongoose";
import { ICompany } from "../types/ICompany";

const CompanySchema: Schema = new Schema<ICompany>({
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
  ordersID: [{
    type: Schema.Types.ObjectId,
    ref: 'Order',
  }],
  commentsID: [{
    type: Schema.Types.ObjectId,
    ref: 'Comment',
  }],
},
{ timestamps: true },
);

export default model<ICompany>('Company', CompanySchema);