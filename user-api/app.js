const express = require("express");
const app = express();
const userRouter = require("./routes/users");

app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
  console.log("Query:", req.query);
  next();
});

app.use(express.json());

app.use("/users", userRouter);

app.get("/", (req, res) => {
  res.send("Welcome to the Simple User API!");
});

app.use((err, req, res, next) => {
  console.error("Error handler:", err.stack);
  res.status(500).json({ error: "Something went wrong", details: err.message });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
