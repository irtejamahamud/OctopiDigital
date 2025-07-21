const { ObjectId } = require("mongodb");
const connectDB = require("../db");

exports.getTodos = async (req, res) => {
  const db = await connectDB();
  const todos = await db.collection("todos").find().toArray();
  res.json(todos);
};

exports.addTodo = async (req, res) => {
  const db = await connectDB();
  const todo = req.body;
  await db.collection("todos").insertOne(todo);
  res.status(201).json(todo);
};

exports.updateTodo = async (req, res) => {
  const db = await connectDB();
  const { id } = req.params;
  const update = req.body;
  await db
    .collection("todos")
    .updateOne({ _id: new ObjectId(id) }, { $set: update });
  res.json({ message: "Updated" });
};

exports.deleteTodo = async (req, res) => {
  const db = await connectDB();
  const { id } = req.params;
  await db.collection("todos").deleteOne({ _id: new ObjectId(id) });
  res.json({ message: "Deleted" });
};
