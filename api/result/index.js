import connectDB from "../../server/db.js";
import Result from "../../server/models/Result.js";
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.status(405).json({ message: "Method not allowed" });

  try {
    await connectDB();

    const { name, phone, email, mode, result } = req.body;
    if (!name || !email || !result)
      return res.status(400).json({ message: "invalid payload" });

    const doc = await Result.create({
      name,
      phone,
      email,
      mode,
      result,
    });

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    await transporter.sendMail({
      to: email,
      subject: "Hasil Test MBPT Kamu",
      html: `
        <p>Hi, ${name}</p>
        <pre>${JSON.stringify(result, null, 2)}</pre>
        <a href="${process.env.BASE_URL}/api/result/${doc._id}/pdf">
          Download PDF
        </a>
      `,
    });

    res.json({ success: true, id: doc._id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
}
