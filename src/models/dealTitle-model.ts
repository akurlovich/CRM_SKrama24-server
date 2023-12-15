import { Schema, model } from "mongoose";
import { IDealTitle } from "../types/IDealTitle";

const DealTitleSchema: Schema = new Schema<IDealTitle>({
  title: {
    type: String,
    required: true,
    unique: true,
  },
}, {timestamps: true});

export default model<IDealTitle>('DealTitle', DealTitleSchema);