import { TodosTypes } from '../actions/actionTypes';
import {
  TODOS_LIST_SUCCESS,
  TODOS_LIST_FAIL,
  TODOS_LIST_REQUEST,
  TODOS_LIST_RESET,
  TODOS_UPDATE_REQUEST,
  TODOS_UPDATE_SUCCESS,
  TODOS_UPDATE_FAIL,
  TODOS_UPDATE_RESET,
  TODOS_REMOVE_ITEM_REQUEST,
  TODOS_REMOVE_ITEM_FAIL,
  TODOS_REMOVE_ITEM_SUCCESS,
} from '../constants';
import { todoItemInitial, todosInitial } from '../initialStates';
import { IPayloadTodos, ITodoInfo } from '../interfaces/payloadTodo';

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
    case TODOS_REMOVE_ITEM_REQUEST:
      return state;
    case TODOS_REMOVE_ITEM_SUCCESS:
      const item = action.payload;
      const itemList = state.todos.filter((x) => x.id !== action.payload.id);
      console.log(item);
      console.log(itemList);
      return {
        ...state,
        todos: state.todos.filter((x) => x.id !== action.payload.id),
      };
    case TODOS_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const todoItemUpdateReducer = (
  state = todoItemInitial,
  action: TodosTypes
): ITodoInfo => {
  switch (action.type) {
    case TODOS_UPDATE_REQUEST:
      return state;
    case TODOS_UPDATE_SUCCESS:
      return action.payload;
    case TODOS_UPDATE_FAIL:
      return todoItemInitial;
    case TODOS_UPDATE_RESET:
      return todoItemInitial;
    default:
      return state;
  }
};
