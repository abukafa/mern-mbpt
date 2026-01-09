import connectDB from "../../server/db.js";
import Result from "../../server/models/Result.js";

export default async function handler(req, res) {
  if (req.method !== "GET")
    return res.status(405).json({ message: "Method not allowed" });

  await connectDB();

  const data = await Result.findById(req.query.id);
  if (!data) return res.status(404).json({ message: "Not found" });

  res.json(data);
}
