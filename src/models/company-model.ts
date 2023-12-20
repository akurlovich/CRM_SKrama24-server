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
    required: true,
  }],
  description: {
    type: String,
    default: '',
  },
  contactID: {
    type: Schema.Types.ObjectId,
    ref: 'Contact',
    default: [],
  },
  dealsID: [{
    type: Schema.Types.ObjectId,
    ref: 'Deal',
    default: [],
  }],
  ordersID: [{
    type: Schema.Types.ObjectId,
    ref: 'Order',
    default: [],
  }],
  commentsID: [{
    type: Schema.Types.ObjectId,
    ref: 'Comment',
    default: [],
  }],
},
{ timestamps: true },
);

export default model<ICompany>('Company', CompanySchema);