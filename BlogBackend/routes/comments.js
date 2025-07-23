const express = require("express");
const router = express.Router();
const Comment = require("../models/Comment"); // <-- Fixed path

// Create a new comment
router.post("/", async (req, res) => {
  try {
    const { post, user, content } = req.body;
    const comment = await Comment.create({ post, user, content });
    res.status(201).json(comment); // <-- 201 Created
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all comments
router.get("/", async (req, res) => {
  try {
    const comments = await Comment.find()
      .populate("user", "username")
      .populate("post", "title");
    res.json(comments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get comments for a specific post (optional)
router.get("/post/:postId", async (req, res) => {
  try {
    const comments = await Comment.find({ post: req.params.postId }).populate(
      "user",
      "username"
    );
    res.json(comments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get a single comment by ID
router.get("/:id", async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id)
      .populate("user", "username")
      .populate("post", "title");
    if (!comment) return res.status(404).json({ error: "Comment not found" });
    res.json(comment);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Update a comment by ID
router.put("/:id", async (req, res) => {
  try {
    const comment = await Comment.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!comment) return res.status(404).json({ error: "Comment not found" });
    res.json(comment);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete a comment by ID
router.delete("/:id", async (req, res) => {
  try {
    const comment = await Comment.findByIdAndDelete(req.params.id);
    if (!comment) return res.status(404).json({ error: "Comment not found" });
    res.json({ message: "Comment deleted" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
