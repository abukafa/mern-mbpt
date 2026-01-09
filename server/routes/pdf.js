import express from "express";
import puppeteer from "puppeteer";
import Result from "../models/Result.js";

const router = express.Router();

router.get("/:id/pdf", async (req, res) => {
  try {
    const data = await Result.findById(req.params.id);
    if (!data) return res.status(404).send("Result not found");

    const browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });

    const page = await browser.newPage();

    // Navigate the page to a URL.
    await page.goto(`${process.env.BASE_URL}/result/${req.params.id}`, {
      waitUntil: "networkidle0",
    });

    // Set screen size.
    await page.setViewport({ width: 1080, height: 1024 });

    const pdf = await page.pdf({ printBackground: true });

    await browser.close();

    res.writeHead(200, {
      "Content-Type": "application/pdf",
      "Content-Length": pdf.length,
      "Content-Disposition": "inline; filename=result.pdf",
    });
    res.end(pdf);
  } catch (err) {
    console.error(err);
    res.status(500).send("Failed to generate PDF");
  }
});

export default router;
