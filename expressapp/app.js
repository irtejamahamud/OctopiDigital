const express = require("express");
const { MongoClient, ServerApiVersion } = require("mongodb");
const app = express();

app.use(express.json()); // For parsing JSON bodies

const uri =
  "mongodb+srv://irtejaoctopidigital:Sw9SW8u0CrDVvA9A@cluster1.cr2ozx0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

let todosCollection;

// Connect to MongoDB Atlas and set up the collection
async function main() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Connected to MongoDB Atlas!");

    // Use your database and collection
    const db = client.db("SampleTodo");
    todosCollection = db.collection("Todo");

    // Start the server only after DB is ready
    const PORT = 3000;
    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  }
}
main();

// --- ROUTES ---

app.get("/", (req, res) => {
  res.send("Express + MongoDB Atlas API Running!");
});

// Get all todos
app.get("/todos", async (req, res) => {
  try {
    const todos = await todosCollection.find({}).toArray();
    res.json(todos);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch todos" });
  }
});

// Add a new todo
app.post("/todos", async (req, res) => {
  try {
    const { task, done } = req.body;
    if (!task) return res.status(400).json({ error: "Task is required" });
    const newTodo = { task, done: !!done };
    const result = await todosCollection.insertOne(newTodo);
    res.status(201).json({ insertedId: result.insertedId, ...newTodo });
  } catch (err) {
    res.status(500).json({ error: "Failed to add todo" });
  }
});
