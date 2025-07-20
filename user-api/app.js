// app.js
const express = require("express");
const app = express();
const userRouter = require("./routes/users");

app.use(express.json());
app.use("/users", userRouter);

app.get("/", (req, res) => {
  res.send("Welcome to the Simple User API!");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
