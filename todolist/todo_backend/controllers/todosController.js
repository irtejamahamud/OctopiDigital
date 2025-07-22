const Todo = require("../models/Todo");
const { ObjectId } = require("mongodb");
const connectDB = require("../config/db");

exports.getTodos = async (req, res) => {
  const todos = await Todo.find();
  res.status(200).json(todos);
  res.status(500).json({ message: "Error fetching todos" });
};

exports.addTodo = async (req, res) => {
  const todo = new Todo(req.body);
  try {
    await todo.save();
    res.status(201).json(todo);
  } catch (err) {
    res
      .status(400)
      .json({ message: "Error creating todo", error: err.message });
  }
};

exports.updateTodo = async (req, res) => {
  const db = await connectDB();
  const { id } = req.params;
  const update = req.body;
  await db
    .collection("todos")
    .updateOne({ _id: new ObjectId(id) }, { $set: update });
  res.json({ message: "Updated", updated: update });
};

exports.deleteTodo = async (req, res) => {
  const { id } = req.params;
  try {
    await Todo.findByIdAndDelete(id);
    res.status(204).send();
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error deleting todo", error: err.message });
  }
};
