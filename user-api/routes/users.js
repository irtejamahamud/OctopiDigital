// routes/users.js
const express = require("express");
const router = express.Router();

let users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];


router.get("/", (req, res) => {
  
  if (req.query.name) {
    const filtered = users.filter((user) =>
      user.name.toLowerCase().includes(req.query.name.toLowerCase())
    );
    return res.json(filtered);
  }
  res.json(users);
});


router.get("/:id", (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ error: "User not found" });
  res.json(user);
});

router.post("/", (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ error: "Name is required" });
  const newUser = { id: users.length + 1, name };
  users.push(newUser);
  res.status(201).json(newUser);
});

router.delete("/:id", (req, res) => {
  const userIndex = users.findIndex((u) => u.id === parseInt(req.params.id));
  if (userIndex === -1) {
    return res.status(404).json({ error: "User not found" });
  }
  const deleted = users.splice(userIndex, 1);
  res.json({ message: "User deleted", user: deleted[0] });
});

module.exports = router;
