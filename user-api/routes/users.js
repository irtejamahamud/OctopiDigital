const express = require("express");
const router = express.Router();

let users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

router.use((req, res, next) => {
  console.log(`(users router) ${req.method} on ${req.baseUrl}${req.path}`);
  next();
});

router.get("/", (req, res) => {
  if (req.query.name) {
    const filtered = users.filter((user) =>
      user.name.toLowerCase().includes(req.query.name.toLowerCase())
    );
    return res.status(200).json(filtered);
  }
  res.status(200).json(users);
});

router.get("/:id", (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ error: "User not found" });
  res.status(200).json(user);
});

router.post("/", (req, res, next) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ error: "Name is required" });
  try {
    const newUser = { id: users.length + 1, name };
    users.push(newUser);
    res.status(201).json(newUser);
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", (req, res, next) => {
  try {
    const userIndex = users.findIndex((u) => u.id === parseInt(req.params.id));
    if (userIndex === -1) {
      res.status(404).send("User not found").end();
      return;
    }
    const deleted = users.splice(userIndex, 1);
    res.status(200).json({ message: "User deleted", user: deleted[0] });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
