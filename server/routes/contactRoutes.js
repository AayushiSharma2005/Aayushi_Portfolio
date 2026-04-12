import express from "express";
import Contact from "../models/contact.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validate
    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields required" });
    }

    // Save to MongoDB
    const newMsg = new Contact({ name, email, message });
    await newMsg.save();

    res.json({ success: true, message: "Message saved successfully!" });
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ error: "Failed to save message" });
  }
});

export default router;