import { motion } from "framer-motion";
import { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const submit = async (e) => {
    e.preventDefault();

    try {
      await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 3000);
    } catch (err) {
      console.error(err);
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
          <div className="form-group">
            <input
              type="text"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="form-input"
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              placeholder="Your Email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="form-input"
            />
          </div>

          <div className="form-group">
            <textarea
              placeholder="Your Message"
              required
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={6}
              className="form-textarea"
            ></textarea>
          </div>

          <motion.button
            type="submit"
            className="btn-send"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {submitted ? "✓ Sent!" : "Send Message"}
          </motion.button>
        </form>
      </div>
    </motion.section>
  );
}