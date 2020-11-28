import * as mongoose from 'mongoose';
import { ITodoItem } from '@todosorg/common-share';

const todoSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    todoName: { type: String, required: true },
    status: { type: Number, required: true },
  },
  { timestamps: true }
);

type TodoType = ITodoItem & mongoose.Document;

const Todo = mongoose.model<TodoType>('Todos', todoSchema);

export default Todo;
