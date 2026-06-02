import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

import contactRoutes from "./routes/contactRoutes.js";

const app = express();

// ---------------- FIX __dirname ----------------
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ---------------- MIDDLEWARE ----------------
app.use(cors({ origin: "*" }));
app.use(express.json());

// ---------------- MONGODB ----------------
mongoose
  .connect(process.env.MONGO_URI, { serverSelectionTimeoutMS: 5000 })
  .then(() => console.log("MongoDB Connected Successfully"))
  .catch((err) => {
    console.error("MongoDB Error:", err.message);
    console.log("Attempting to connect to Local MongoDB...");
    mongoose.connect("mongodb://127.0.0.1:27017/contact_db")
      .then(() => console.log("Local MongoDB Connected Successfully"))
      .catch((localErr) => console.error("Local MongoDB Error:", localErr.message));
  });

import downloadRoutes from "./routes/downloadRoutes.js";

// ---------------- CONTACT ROUTES ----------------
app.use("/contact", contactRoutes);

// ---------------- DOWNLOAD ROUTES ----------------
app.use("/api/download", downloadRoutes);

// ---------------- STATIC FILES ----------------
app.use("/public", express.static(path.join(__dirname, "public")));

// ---------------- ROOT ROUTE ----------------
app.get("/", (req, res) => {
  res.send("Backend running 🚀");
});

// ---------------- START SERVER ----------------
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});