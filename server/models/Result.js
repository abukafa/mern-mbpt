import mongoose from "mongoose";

const ResultSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    phone: { type: String },
    email: { type: String, required: true },
    mode: { type: String },
    result: { type: Object, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Result", ResultSchema);
