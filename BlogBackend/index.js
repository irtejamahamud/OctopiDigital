const express = require("express");
const mongoose = require("mongoose");

require("dotenv").config(); // Load environment variables from .env file
const cors = require("cors");
const postRoutes = require("./routes/posts");
const userRoutes = require("./routes/users");
const commentRoutes = require("./routes/comments");

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB

const uri = "mongodb://localhost:27017/blogpost";
mongoose
  .connect(uri)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

const port = 3000;
const User = require("./models/User");

app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/comments", commentRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
