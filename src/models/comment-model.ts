import { Schema, model } from "mongoose";
import { IComment } from "../types/IComment";

const CommentSchema: Schema = new Schema<IComment>({
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
  description: {
    type: String,
  },
  dealType: {
    type: String,
  },
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
},
{ timestamps: true },
);

export default model<IComment>('Comment', CommentSchema);