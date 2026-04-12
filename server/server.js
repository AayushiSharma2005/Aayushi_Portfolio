import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

import contactRoutes from "./routes/contactRoutes.js";

dotenv.config();

const app = express();

// ---------------- FIX FOR __dirname (IMPORTANT FOR DEPLOYMENT) ----------------
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ---------------- MIDDLEWARE ----------------
app.use(cors({
  origin: "*"
}));

app.use(express.json());

// ---------------- MONGODB ----------------
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected Successfully"))
  .catch((err) => console.error("MongoDB Error:", err.message));

// ---------------- ROUTES ----------------
app.use("/contact", contactRoutes);

// ---------------- RESUME VIEW ----------------
app.get("/resume/view", (req, res) => {
  const filePath = path.join(__dirname, "uploads", "Aayushi_Sharma_Resume.pdf");

  res.setHeader("Content-Type", "application/pdf");
  res.sendFile(filePath);
});

// ---------------- RESUME DOWNLOAD ----------------
app.get("/resume/download", (req, res) => {
  const filePath = path.join(__dirname, "uploads", "Aayushi_Sharma_Resume.pdf");

  res.download(filePath, "Aayushi_Resume.pdf", (err) => {
    if (err) {
      console.log("Download error:", err);
      res.status(404).send("Resume not found");
    }
  });
});

// ---------------- ROOT ----------------
app.get("/", (req, res) => {
  res.send("Backend running 🚀");
});

// ---------------- SERVER ----------------
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});