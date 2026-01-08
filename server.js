import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

import resultRoutes from "./server/routes/result.js";
import pdfRoutes from "./server/routes/pdf.js";

import "./server/db.js";

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/result", pdfRoutes);
app.use("/api/result", resultRoutes);

// serve frontend build
app.use(express.static(path.join(__dirname, "dist")));
app.get("*", (_, res) =>
  res.sendFile(path.join(__dirname, "dist", "index.html"))
);

app.listen(3000, () => console.log("Server running http://localhost:3000"));
