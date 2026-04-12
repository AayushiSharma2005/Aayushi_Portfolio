import Contact from "../pages/Contact";
import Footer from "./Footer";
import "./ContactFooter.css";

export default function ContactFooter() {
  return (
    <section id="contact" className="contact-footer-wrapper">
        <div className="footer-left">
        <Footer />
      </div>
      <div className="contact-right">
        <Contact />
      </div>

      
    </section>
  );
}