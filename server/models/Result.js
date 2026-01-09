import mongoose from "mongoose";

const ResultSchema = new mongoose.Schema(
  {
    name: String,
    phone: String,
    email: String,
    mode: String,
    result: Object,
  },
  { timestamps: true }
);

export default mongoose.models.Result || mongoose.model("Result", ResultSchema);
