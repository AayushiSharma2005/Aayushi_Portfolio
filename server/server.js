import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import path from "path";
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

// =====================================================
// 📄 RESUME STATIC FILE FIX (PRODUCTION SAFE)
// =====================================================

// This serves files from server/public folder
app.use("/resume", express.static(path.join(__dirname, "public")));

// Example URL:
// https://your-backend.onrender.com/resume/resume.pdf

// ---------------- ROOT ROUTE ----------------
app.get("/", (req, res) => {
  res.send("Backend running 🚀");
});

// ---------------- START SERVER ----------------
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});