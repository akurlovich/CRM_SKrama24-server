import { Schema, model } from "mongoose";
import { IDimension } from "../types/IDimension";

const DimensionSchema: Schema = new Schema<IDimension>({
  title: {
    type: String,
    required: true,
    unique: true,
  },
}, {timestamps: true});

export default model<IDimension>('Dimension', DimensionSchema);