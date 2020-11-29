import { TodosTypes } from '../actions/actionTypes';
import {
  TODOS_LIST_SUCCESS,
  TODOS_LIST_FAIL,
  TODOS_LIST_REQUEST,
  TODOS_LIST_RESET,
} from '../constants';
import { todosInitial } from '../initialStates';
import IPayloadTodos, { ITodoInfo } from '../interfaces/payloadTodo';

export const todosListReducer = (
  state = todosInitial,
  action: TodosTypes
): IPayloadTodos => {
  switch (action.type) {
    case TODOS_LIST_REQUEST:
      return { loading: true, todos: [] };
    case TODOS_LIST_SUCCESS:
      return { loading: false, todos: action.payload };
    case TODOS_LIST_FAIL:
      return { loading: false, error: action.payload };
    case TODOS_LIST_RESET:
      return todosInitial;
    default:
      return state;
  }
};
