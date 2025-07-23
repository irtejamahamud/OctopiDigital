const express = require("express");
const router = express.Router();
const Post = require("../models/Post");
const mongoose = require("mongoose");

router.get("/", async (req, res) => {
  try {
    const posts = await Post.find().populate("author", "username");
    res.json(posts);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const posts = await Post.findById(req.params.id).populate(
      "author",
      "username"
    );
    res.json(posts);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.post("/", async (req, res) => {
  const { title, content, author } = req.body;
  try {
    const post = await Post.create({ title, content, author });
    res.status(201).json(post);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.put("/:id", async (req, res) => {
  const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!post) {
    return res.status(404).json({ error: "Post not found" });
  }
  res.json(post);
});

router.delete("/:id", async (req, res) => {
  const post = await Post.findByIdAndDelete(req.params.id);
  if (!post) return res.status(404).json({ error: "Post not found" });
  res.json({ message: "Post deleted" });
});

router.post("/:id/like", async (req, res) => {
  try {
    const userId = req.body.userId; // You can use JWT auth later
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ error: "Post not found" });

    if (post.likes.includes(userId)) {
      return res.status(400).json({ error: "You already liked this post" });
    }

    post.likes.push(userId);
    await post.save();
    res.json({ message: "Post liked", likes: post.likes.length });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.post("/:id/unlike", async (req, res) => {
  try {
    const userId = req.body.userId;
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ error: "Post not found" });

    const index = post.likes.map((id) => id.toString()).indexOf(userId);
    if (index === -1) {
      return res.status(400).json({ error: "You haven't liked this post" });
    }

    post.likes.splice(index, 1);
    await post.save();
    res.json({ message: "Post unliked", likes: post.likes.length });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
