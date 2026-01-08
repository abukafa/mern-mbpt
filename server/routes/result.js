import express from "express";
import Result from "../models/Result.js";
import nodemailer from "nodemailer";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
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
      <p>Berikut adalah hasil test MBPT kamu:</p>
      <pre>${JSON.stringify(result, null, 2)}</pre>
      <p>Tampilkan Full PDF:</p>
      <p>Kamu bisa Download file nya gratis!</p>
      <a href="${process.env.BASE_URL}/api/result/${doc._id}/pdf">
        ${process.env.BASE_URL}/api/result/${doc._id}/pdf
      </a>
      `,
    });

    res.json({ success: true, id: doc._id });
  } catch (err) {
    console.error("POST /api/result ERROR:", err);
    res.status(500).json({ message: err.message });
  }
});

router.get("/:id", async (req, res) => {
  const data = await Result.findById(req.params.id);
  res.json(data);
});

export default router;
