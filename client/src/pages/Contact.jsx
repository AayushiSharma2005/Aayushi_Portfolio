import { motion } from "framer-motion";
import { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const API = import.meta.env.VITE_API_URL || "http://localhost:5000";

      const res = await fetch(`${API}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      if (!res.ok) {
        throw new Error("Failed to send message");
      }

      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });

      setTimeout(() => setSubmitted(false), 3000);
    } catch (err) {
      console.error("Error:", err);
      alert("Message failed to send. Try again!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.section
      className="contact-section"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="contact-container">
        <h2 className="contact-title">Contact Me</h2>
        <p className="contact-subtitle">
          Have a question or want to work together? Drop a message below!
        </p>

        <form onSubmit={submit} className="contact-form">
          {/* NAME */}
          <div className="form-group">
            <input
              type="text"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
              className="form-input"
            />
          </div>

          {/* EMAIL */}
          <div className="form-group">
            <input
              type="email"
              placeholder="Your Email"
              required
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
              className="form-input"
            />
          </div>

          {/* MESSAGE */}
          <div className="form-group">
            <textarea
              placeholder="Your Message"
              required
              rows={6}
              value={form.message}
              onChange={(e) =>
                setForm({ ...form, message: e.target.value })
              }
              className="form-textarea"
            />
          </div>

          {/* BUTTON */}
          <motion.button
            type="submit"
            className="submit-btn"
            disabled={loading}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {loading
              ? "Sending..."
              : submitted
              ? "✓ Sent!"
              : "Send Message"}
          </motion.button>
        </form>
      </div>
    </motion.section>
  );
}