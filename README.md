# 🌐 Aayushi Portfolio (Full Stack MERN)

![React](https://img.shields.io/badge/Frontend-React-blue?logo=react)
![Node](https://img.shields.io/badge/Backend-Node.js-green?logo=node.js)
![Express](https://img.shields.io/badge/Framework-Express-black?logo=express)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-brightgreen?logo=mongodb)
![Vite](https://img.shields.io/badge/Bundler-Vite-purple?logo=vite)
![Status](https://img.shields.io/badge/Status-Deployed-success)

---

## 🚀 Live Links

- 🌐 Frontend: https://aayushi-portfolio-one.vercel.app/
- ⚙️ Backend: https://aayushi-portfolio-1.onrender.com

---

## 📌 Project Overview

This is a **full-stack personal portfolio website** built using the MERN stack.  
It showcases projects, skills, certifications, and includes a working contact form connected to MongoDB.

Frontend is built using **React (Vite)** and deployed on **Vercel**,  
Backend is built using **Node.js + Express** and deployed on **Render**,  
Database is managed using **MongoDB Atlas**.

---

## ✨ Features

- 🎨 Modern responsive UI
- ⚡ Smooth animations (Framer Motion)
- 📬 Contact form with backend API
- 🗄 MongoDB database integration
- 📄 Resume view & download
- 🌐 Fully deployed full-stack project
- 📱 Mobile responsive design

---

## 🛠 Tech Stack

### 🎯 Frontend
- React (Vite)
- HTML5 / CSS3
- JavaScript (ES6+)
- Framer Motion

### ⚙️ Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- CORS
- dotenv

### ☁️ Deployment
- Frontend → Vercel
- Backend → Render
- Database → MongoDB Atlas

---

## 📁 Project Structure

```text
Aayushi_Portfolio/
│
├── client/                 # 🎨 Frontend (React + Vite)
│   ├── public/
│   │   ├── Infosys.jpeg
│   │   ├── Kaggle.jpeg
│   │   └── sabrang.jpeg
│   │
│   ├── src/
│   │   ├── assets/
│   │   │   └── aayushi_pic.png
│   │   │
│   │   ├── components/
│   │   │   ├── Hero.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── ContactFooter.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── About.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Certifications.jsx
│   │   │   └── Contact.jsx
│   │   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
├── server/                 # ⚙️ Backend (Node + Express)
│   ├── models/
│   │   └── contact.js
│   │
│   ├── routes/
│   │   └── contactRoutes.js
│   │
│   ├── uploads/
│   │   └── Aayushi_Sharma_Resume.pdf
│   │
│   ├── server.js
│   ├── package.json
│   └── .env   # (NOT pushed to GitHub)
│
├── .gitignore
└── README.md
```

---

## ⚙️ Local Setup Instructions

### 1️⃣ Clone Repository
```bash
git clone https://github.com/AayushiSharma2005/Aayushi_Portfolio.git
cd Aayushi_Portfolio
```

---

### 2️⃣ Install Frontend + Backend

```bash
# Frontend
cd client
npm install
npm run dev

# Backend
cd ../server
npm install
node server.js
```

---

## 🔐 Environment Variables

### 📌 Backend (.env inside /server)

```env
PORT=10000
MONGO_URI=your_mongodb_connection_string
```

---

### 📌 Frontend (.env inside /client)

```env
VITE_API_URL=https://your-backend.onrender.com
```

---

## 📬 API Endpoint

### Contact Form
```http
POST /contact
```

Stores user messages in MongoDB database.

---

## 👩‍💻 Author

**Aayushi Sharma**

- GitHub: https://github.com/AayushiSharma2005

---

## ⭐ Project Status

✔ Fully Deployed  
✔ Full Stack Working  
✔ Responsive UI  
✔ Production Ready  

---

## 🎯 Future Improvements

- Add admin dashboard for messages
- Add email notifications
- Improve UI animations
- Add dark/light theme toggle

---

🔥 Thank you for visiting this project!
