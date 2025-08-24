#  Job API (Express + MongoDB)

A simple RESTful API built with **Express**, **MongoDB**, and **Mongoose** for managing job listings.  
This project supports CRUD operations with search functionality and is ready to connect to a frontend application.

---

##  Features
- List all jobs with optional search
- View details of a single job
- Create new job postings
- Delete jobs by ID
- CORS enabled for frontend integration
- MongoDB connection using Mongoose

---

## 📦 Tech Stack
- [Node.js](https://nodejs.org/)  
- [Express](https://expressjs.com/)  
- [MongoDB](https://www.mongodb.com/) + [Mongoose](https://mongoosejs.com/)  
- [CORS](https://www.npmjs.com/package/cors)  

---

## ⚙️ Installation & Setup

### 1. Clone & Install
```bash
git clone https://github.com/ansari-aka/Job_Board_backend.git
cd Job_Board_backend
npm install
```
### 2. Set environment variables
```bash
PORT=4000
MONGODB=mongodb://your-mongodb-api/jobapi
```
### 3. Start the server
```
node index.js
```
