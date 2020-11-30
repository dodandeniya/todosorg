import { IPayloadTodos, ITodoInfo } from './interfaces/payloadTodo';
import IPayloadUser from './interfaces/payloadUser';

export const userDetailsInitial: IPayloadUser = {
  loading: false,
  userInfo: null,
  error: null,
};

export const todosInitial: IPayloadTodos = {
  loading: false,
  todos: [],
  error: null,
};

export const todoItemInitial: ITodoInfo = {
  todoName: '',
  status: 0,
};
