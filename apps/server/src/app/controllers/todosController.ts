import Todo from '../models/todoModel';
import * as asyncHandler from 'express-async-handler';
import * as mongoose from 'mongoose';
import User from '../models/userModel';

export const createTodoItem = asyncHandler(async (req, res) => {
  const { userId, todoName } = req.body;

  const temp = new Todo({
    user: userId,
    todoName,
    status: 0,
  });

  const todoItem = await Todo.create(temp);

  if (todoItem) {
    res.status(201).json({
      id: todoItem._id,
      todoName: todoItem.todoName,
      status: todoItem.status,
    });
  } else {
    res.status(400);
    throw new Error('Invalid todo item');
  }
});

export const searchTodoItem = asyncHandler(async (req, res) => {
  const userId = req.params.userId;
  const { search } = req.body;

  const todoItemList = await Todo.find({
    todoName: new RegExp('^' + search),
    user: userId,
  });

  const result = todoItemList.map((item) => ({
    id: item._id,
    todoName: item.todoName,
    status: item.status,
  }));
  res.json(result);
});

export const updateTodoItem = asyncHandler(async (req: any, res) => {
  const todo = req.body;
  const todoItem = await Todo.findById(todo._id);

  if (todoItem) {
    todoItem.todoName = todo.todoName || todoItem.todoName;
    todoItem.status = todo.status || todoItem.status;

    const updateTodo = await todoItem.save();

    res.json({
      id: updateTodo._id,
      todoName: updateTodo.todoName,
      status: updateTodo.status,
    });
  } else {
    res.status(400);
    throw new Error('Not Authenticated!');
  }
});

export const getTodosListByUserId = asyncHandler(async (req, res) => {
  const userId = req.params.userId;
  const todosList = await Todo.find({ user: userId });
  const result = todosList.map((item) => ({
    id: item._id,
    todoName: item.todoName,
    status: item.status,
  }));
  res.json(result);
});

export const deleteTodoItem = asyncHandler(async (req, res) => {
  const item = await Todo.findById(req.body.id);

  if (item) {
    try {
      const result = await Todo.findByIdAndDelete(item._id);
      res.json({
        id: result._id,
        todoName: result.todoName,
        status: result.status,
      });
    } catch (error) {
      res.status(404);
      throw new Error('Todo item not found');
    }
  } else {
    res.status(404);
    throw new Error('Todo item not found');
  }
});

export const deleteCompletedItems = asyncHandler(async (req, res) => {
  try {
    const result = await Todo.deleteMany({ status: 2 });
    res.json(result);
  } catch (error) {
    res.status(404);
    throw new Error('Todo items not found');
  }
});

export const getTodoItemtById = asyncHandler(async (req, res) => {
  const item = await Todo.findById(req.params.id);

  if (item) {
    res.json({ id: item._id, todoName: item.todoName, status: item.status });
  } else {
    res.status(404);
    throw new Error('Todo item not found');
  }
});
