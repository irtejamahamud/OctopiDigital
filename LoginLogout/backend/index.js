const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const cors = require("cors");

const app = express();
const SECRET = "your_jwt_secret_key";

app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/loginlogout", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

// Signup Route
app.post("/signup", async (req, res) => {
  try {
    const { fullName, email, username, password } = req.body;

    // Check if username or email already exists
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "Username or email already exists" });
    }

    const hashed = await bcrypt.hash(password, 10);
    const user = new User({ fullName, email, username, password: hashed });
    await user.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error signing up", error: err.message });
  }
});
app.post("/login", async (req, res) => {
  try {
    const { identifier, password } = req.body;
    console.log("Login request:", identifier, password);

    const user = await User.findOne({
      $or: [{ username: identifier }, { email: identifier }],
    });
    console.log("User found:", user);

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const valid = await bcrypt.compare(password, user.password);
    console.log("Password valid?", valid);

    if (!valid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const token = jwt.sign(
      {
        id: user._id,
        username: user.username,
        fullName: user.fullName,
        email: user.email,
      },
      SECRET,
      { expiresIn: "1h" }
    );
    res.json({ token });
  } catch (err) {
    res.status(500).json({ message: "Error logging in", error: err.message });
  }
});

// JWT Auth Middleware
function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) return res.sendStatus(401);

  jwt.verify(token, SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

// Protected Profile Route
app.get("/profile", authenticateToken, async (req, res) => {
  try {
    // Get user data from DB using id in token
    const user = await User.findById(req.user.id).select("-password"); // Don’t return password
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json({ message: `Welcome, ${user.username}!`, user });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching profile", error: err.message });
  }
});

app.listen(4000, () => console.log("Backend running at http://localhost:4000"));
