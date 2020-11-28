import Todo from '../models/todoModel';
import * as asyncHandler from 'express-async-handler';
import * as mongoose from 'mongoose';
import User from '../models/userModel';

export const createTodoItem = asyncHandler(async (req, res) => {
  const { userId, todoName } = req.body;
  let objectId = mongoose.Schema.Types.ObjectId;

  const temp = new Todo({
    user: userId,
    todoName,
    status: 0,
  });

  const todoItem = await Todo.create(temp);

  if (todoItem) {
    res.status(201).json({
      todoItem,
    });
  } else {
    res.status(400);
    throw new Error('Invalid todo item');
  }
});

export const updateTodoItem = asyncHandler(async (req: any, res) => {
  const todo = req.body;
  const todoItem = await Todo.findById(todo._id);

  if (todoItem) {
    todoItem.todoName = todo.todoName || todoItem.todoName;
    todoItem.status = todo.status || todoItem.status;

    const updateTodo = await todoItem.save();

    res.json({
      updateTodo,
    });
  } else {
    res.status(400);
    throw new Error('Not Authenticated!');
  }
});

export const getTodosListByUserId = asyncHandler(async (req, res) => {
  const userId = req.params.userId;
  let objectId = mongoose.Schema.Types.ObjectId;
  const todosList = await Todo.find({ user: userId });
  res.json(todosList);
});

export const deleteTodoItem = asyncHandler(async (req, res) => {
  const item = await Todo.findById(req.body.id);

  if (item) {
    try {
      const result = await Todo.findByIdAndDelete(item._id);
      res.json(result);
    } catch (error) {
      res.status(404);
      throw new Error('Todo item not found');
    }
  } else {
    res.status(404);
    throw new Error('Todo item not found');
  }
});

export const getTodoItemtById = asyncHandler(async (req, res) => {
  const item = await Todo.findById(req.params.id);

  if (item) {
    res.json(item);
  } else {
    res.status(404);
    throw new Error('Todo item not found');
  }
});
