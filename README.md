# PR_6_Movie_Project

🎬 Movie Management System — Project Documentation
📘 Overview

The Movie Management System is a web application built with Node.js, Express.js, and EJS template engine.
It allows users or administrators to add, view, edit, and delete movie records, including movie details and uploaded poster images.

📁 Project Structure
movie-project/
│
├── configs/             # Configuration files (e.g., database connection)

├── controllers/         # Route controller logic (client & admin side)

├── middlewares/         # Custom middleware (e.g., file upload handling)

├── models/              # Mongoose or ORM models (Movie schema, User schema)

├── node_modules/        # Installed dependencies

├── public/              # Static files (CSS, JS, images)

├── routers/             # Express route definitions

├── uploads/             # Uploaded movie posters or images

├── views/               # EJS templates (frontend and admin views)

│
├── .env                 # Environment variables (DB URL, PORT, etc.)

├── bun.lock             # Bun dependency lock file (if using Bun instead of npm)

├── index.js             # Application entry point

├── package.json         # Project dependencies and scripts

├── package-lock.json    # Dependency lock file (npm)

⚙️ Technologies Used
Category	Technology
Backend Framework	Express.js
Template Engine	EJS
Database	MongoDB / Mongoose
Middleware	Multer for image uploads
Environment Config	dotenv
Runtime	Node.js or Bun
🚀 Features

✅ Add Movie – Add new movies with title, description, genre, and image.

🎥 View Movies – Display all added movies with posters.

✏️ Edit Movie – Update movie details.

❌ Delete Movie – Remove unwanted movies.

🖼️ Image Upload – Upload and store movie posters.

📁 Structured MVC Design – Code organized into Models, Views, and Controllers.

🧠 Folder Details
configs/

Contains configuration files like:

db.js — MongoDB connection using Mongoose.

controllers/

Handles logic for different routes:

server/adminPanel.controller.js — Admin pages logic (add, edit, delete movie).

client/index.js — Client-side pages like home, about, reviews, etc.

middlewares/

imageUpload.js — Uses Multer to handle poster uploads.

models/

movie.model.js — Defines the Movie schema with fields like title, description, image, createdAt.

routers/

adminPanel.routes.js — Routes for admin pages.

client.routes.js — Routes for client-facing pages.

views/

Contains .ejs templates:

/server/pages/ — Admin views (addMovie, viewMovies, editMovie).

/client/pages/ — Client views (home, about, contact, etc.).

/partials/ — Reusable header/footer files.

public/

CSS, JS, and image assets.

uploads/

Stores uploaded movie posters.

🧩 Environment Variables (.env)
PORT=5000
MONGO_URI=mongodb://localhost:27017/movieDB

🏃 How to Run the Project
1️⃣ Install Dependencies
npm install

2️⃣ Create .env file

Add your environment variables (see above).

3️⃣ Start Server
npm start


or if using Bun:

bun run start

4️⃣ Open in Browser
http://localhost:5000

👩‍💻 Future Enhancements

User authentication for admin panel.

Search and filter movies.

Movie rating & reviews.

Cloud image storage (e.g., Cloudinary).
