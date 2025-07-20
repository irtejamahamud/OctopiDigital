const express = require("express");
const app = express();

app.use(express.text());
app.locals.title = "Express";

app.get("/", (req, res) => {
  //   console.log("GET /", req.body);
  console.log(app.locals.title);
  res.send("Listening to GET request");
});

app.post("/greet", (req, res) => {
  console.log("POST /greet body:", req.body);

  if (req.body) {
    res.send(`Hello, ${req.body}!`);
  } else {
    res.send("Listening to the POST request (no name provided)");
  }
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
