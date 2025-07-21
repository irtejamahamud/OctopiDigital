const User = require("../models/User");

// Get all users
exports.getAllUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

// Get single user
exports.getUserById = async (req, res) => {
  const user = await User.findById(req.params.id);
  user ? res.json(user) : res.status(404).json({ error: "User not found" });
};

// Add new user
exports.addUser = async (req, res) => {
  try {
    const user = new User(req.body);
    const saved = await user.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update user
exports.updateUser = async (req, res) => {
  try {
    const updated = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    updated
      ? res.json(updated)
      : res.status(404).json({ error: "User not found" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete user
exports.deleteUser = async (req, res) => {
  const deleted = await User.findByIdAndDelete(req.params.id);
  deleted
    ? res.json({ message: "User deleted" })
    : res.status(404).json({ error: "User not found" });
};
