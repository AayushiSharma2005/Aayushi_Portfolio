import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

import contactRoutes from "./routes/contactRoutes.js";

dotenv.config();

const app = express();

// ---------------- FIX __dirname ----------------
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ---------------- MIDDLEWARE ----------------
app.use(cors({ origin: "*" }));
app.use(express.json());

// ---------------- MONGODB ----------------
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected Successfully"))
  .catch((err) => console.error("MongoDB Error:", err.message));

// ---------------- CONTACT ROUTES ----------------
app.use("/contact", contactRoutes);


const resumePath = path.join(__dirname, "public", "resume.pdf");

// 🔍 VIEW RESUME
app.get("/resume/view", (req, res) => {
  if (!fs.existsSync(resumePath)) {
    return res.status(404).send("Resume not found");
  }

  res.setHeader("Content-Type", "application/pdf");
  res.sendFile(resumePath);
});

// 📥 DOWNLOAD RESUME
app.get("/resume/download", (req, res) => {
  if (!fs.existsSync(resumePath)) {
    return res.status(404).send("Resume not found");
  }

  res.download(resumePath, "Aayushi_Resume.pdf");
});

// ---------------- ROOT ROUTE ----------------
app.get("/", (req, res) => {
  res.send("Backend running 🚀");
});

// ---------------- START SERVER ----------------
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});