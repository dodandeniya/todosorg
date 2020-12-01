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
  TODOS_REMOVE_COMPLETED_ITEMS_SUCCESS,
  TODOS_REMOVE_COMPLETED_ITEMS_FAIL,
  TODOS_REMOVE_COMPLETED_ITEMS_REQUEST,
  TODOS_CREATE_FAIL,
  TODOS_CREATE_REQUEST,
  TODOS_CREATE_SUCCESS,
  TODOS_SEARCH_REQUEST,
  TODOS_SEARCH_FAIL,
  TODOS_SEARCH_SUCCESS,
  TODOS_SEARCH_RESET,
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
      return { ...state, loading: false, error: action.payload };

    case TODOS_LIST_RESET:
      return todosInitial;

    case TODOS_REMOVE_ITEM_REQUEST:
    case TODOS_REMOVE_COMPLETED_ITEMS_REQUEST:
      return state;

    case TODOS_REMOVE_ITEM_SUCCESS:
      return {
        ...state,
        todos: state.todos.filter((x) => x.id !== action.payload.id),
      };

    case TODOS_REMOVE_COMPLETED_ITEMS_SUCCESS:
      return { loading: false, todos: action.payload };

    case TODOS_REMOVE_COMPLETED_ITEMS_FAIL:
      return { error: action.payload, ...state };

    case TODOS_REMOVE_ITEM_FAIL:
      return { error: action.payload, ...state };

    case TODOS_CREATE_REQUEST:
      return state;
    case TODOS_CREATE_SUCCESS:
      return { ...state, todos: [...state.todos, action.payload] };
    case TODOS_CREATE_FAIL:
      return { error: action.payload, ...state };
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

export const searchReducer = (
  state = todosInitial,
  action: TodosTypes
): IPayloadTodos => {
  switch (action.type) {
    case TODOS_SEARCH_REQUEST:
      return { loading: true, todos: [] };

    case TODOS_SEARCH_SUCCESS:
      return { loading: false, todos: action.payload };

    case TODOS_SEARCH_FAIL:
      return { loading: false, error: action.payload };

    case TODOS_SEARCH_RESET:
      return todosInitial;

    default:
      return state;
  }
};

/*export const searchReducer = (
  state = todosSearchInitial,
  action: TodosTypes
): IPayloadTodos => {
  switch (action.type) {
    case TODOS_SEARCH_REQUEST:
      return { loading: true, todos: [] };

    case TODOS_SEARCH_SUCCESS:
      return { loading: false, todos: action.payload };

    case TODOS_SEARCH_FAIL:
      return { loading: false, error: action.payload };

    default:
      state;
  }
};*/
