import { Schema, model } from "mongoose";
import { IPosition } from "../types/IPosition";

const PositionSchema: Schema = new Schema<IPosition>({
  title: {
    type: String,
    required: true,
    unique: true,
  },
}, {timestamps: true});

export default model<IPosition>('Position', PositionSchema);