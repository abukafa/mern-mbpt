import connectDB from "../../server/db.js";
import Result from "../../server/models/Result.js";
import { reviewHTML } from "../../server/templates/reviewHTML.js";

import puppeteer from "puppeteer-core";
import chromium from "@sparticuz/chromium";

export default async function handler(req, res) {
  try {
    await connectDB();

    const data = await Result.findById(req.query.id).lean();
    if (!data) return res.status(404).json({ error: "Data not found" });

    const isVercel = !!process.env.VERCEL;

    const browser = await puppeteer.launch({
      headless: true,
      executablePath: isVercel
        ? await chromium.executablePath()
        : "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
      args: isVercel ? chromium.args : [],
    });

    const page = await browser.newPage();

    await page.setContent(reviewHTML(data), {
      waitUntil: "networkidle0",
    });

    const pdf = await page.pdf({
      format: "A4",
      printBackground: true,
    });

    await browser.close();

    res.writeHead(200, {
      "Content-Type": "application/pdf",
      "Content-Length": pdf.length,
      "Content-Disposition": "inline; filename=result.pdf",
    });
    res.end(pdf);
  } catch (err) {
    console.error("PDF ERROR:", err);
    res.status(500).json({ error: err.message });
  }
}
