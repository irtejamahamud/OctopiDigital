const express = require("express");
const cors = require("cors");
const connectDB = require("./db");
const todosRouter = require("./routes/todos");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/todos", todosRouter);

const PORT = 4000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});
