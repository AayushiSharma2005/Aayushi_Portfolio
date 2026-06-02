import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

router.get("/pdf", (req, res) => {
  const filePath = path.join(__dirname, "../public/resume.pdf");
  res.download(filePath, "Aayushi_Sharma_Resume.pdf", (err) => {
    if (err) {
      console.error("Error downloading PDF:", err);
      res.status(500).send("File not found or error occurred.");
    }
  });
});

router.get("/view/pdf", (req, res) => {
  const filePath = path.join(__dirname, "../public/resume.pdf");
  res.sendFile(filePath, (err) => {
    if (err) {
      console.error("Error viewing PDF:", err);
      res.status(500).send("File not found or error occurred.");
    }
  });
});

router.get("/docx", (req, res) => {
  const filePath = path.join(__dirname, "../public/resume.docx");
  res.download(filePath, "Aayushi_Sharma_Resume.docx", (err) => {
    if (err) {
      console.error("Error downloading DOCX:", err);
      res.status(500).send("File not found or error occurred.");
    }
  });
});

export default router;
