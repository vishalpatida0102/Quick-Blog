

### ✅ `README.md` for Full Stack MERN Blog Project (Frontend + Backend)

```markdown
# 📝 QuickBlog — AI Powered Full Stack MERN Blog Platform

A full-featured blogging platform built with the **MERN stack (MongoDB, Express.js, React, Node.js)** that allows users/admins to create, publish, and manage blogs. The project integrates **Generative AI (GenAI)** to assist in blog content creation — one of the most powerful and unique features!

---

## 🚀 Features

### 🔮 AI-Powered Blog Creation (GenAI)
- Auto-generate blog content using GenAI.
- Suggests headlines, subheadings, and full paragraphs.
- Saves time and boosts productivity for writers.

### 🧠 Admin Features
- Secure login with JWT authentication.
- Create, edit, delete blogs.
- Toggle publish/draft status.
- Dashboard with blog stats and recent posts.

### 🌐 User Features
- View published blogs.
- Filter by category.
- Live search functionality.
- Responsive design for all screen sizes.

---

## 🧱 Tech Stack

| Layer      | Technology              |
|------------|-------------------------|
| Frontend   | React.js, Tailwind CSS  |
| Backend    | Node.js, Express.js     |
| Database   | MongoDB + Mongoose      |
| Auth       | JWT (JSON Web Tokens)   |
| AI         | Generative AI (OpenAI or similar) |
| Image Host | ImageKit                |
| Dev Tools  | Vite, Axios, Toast, Nodemon |

---

## 📁 Project Structure

```

## 🔧 How to Run the Project Locally

### ✅ Backend (Express + MongoDB)

```bash
cd server
npm install
# Add .env file with DB & JWT info
npm run dev


### ✅ Frontend (React + Vite)

```bash
cd QuickBlog
npm install
npm run dev
```

---

## 🔑 .env File Example

Create a `.env` file in your `server/` folder:

```env

#MongoDb
mongodb_url="your_URL"



#login credentials
EMAIL_ID="admin01@gmail.com"
PASSWORD="Admin@12"


#secret key for token
SECRET_KEY="jwt@123"

#imagekit

PUBLIC_KIT="your_id"
PRIVATE_KIT="your_id"
URL_ENDPOINT="your_id"

#gemini Api Key
GEMINI_API_KEY="your_id"
```

---

 

## 🤖 Future Scope

* ✨ Add AI summarizer for long blogs
* 🌍 Add multi-language support
* 📧 Newsletter integration
* 💬 Comment system for readers

---

## 🙌 Author

**Vishal Patidar**
🧑‍💻 MERN Stack Developer

---

  
