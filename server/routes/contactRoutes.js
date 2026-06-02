import express from "express";
import Contact from "../models/contact.js";
import nodemailer from "nodemailer";

const router = express.Router();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

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

    // Send Email Notification
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Portfolio Contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    try {
      await transporter.sendMail(mailOptions);
    } catch (emailErr) {
      console.error("Email send error:", emailErr);
      // We don't fail the whole request if email fails, but log it
    }

    res.json({ success: true, message: "Message saved and email sent successfully!" });
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ error: "Failed to save message" });
  }
});

export default router;