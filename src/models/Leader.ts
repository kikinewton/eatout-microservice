import mongoose, { Schema, Document } from "mongoose";

export interface ILeader extends Document {
  name: string;
  abbr: string;
  image: string;
  designation: string;
  description: string;
  features: Boolean;
}

const LeaderSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    abbr: { type: String, required: false },
    image: { type: String, required: false },
    description: { type: String, default: '' },
    designation: { type: String, required: true },
    features: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model<ILeader>("Leader", LeaderSchema);
