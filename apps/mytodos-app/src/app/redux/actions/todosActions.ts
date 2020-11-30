import {
  TODOS_LIST_FAIL,
  TODOS_LIST_REQUEST,
  TODOS_LIST_SUCCESS,
  TODOS_UPDATE_REQUEST,
  TODOS_UPDATE_SUCCESS,
  TODOS_UPDATE_FAIL,
  TODOS_UPDATE_RESET,
  TODOS_REMOVE_ITEM_REQUEST,
  TODOS_REMOVE_ITEM_SUCCESS,
  TODOS_REMOVE_ITEM_FAIL,
  TODOS_REMOVE_COMPLETED_ITEMS_REQUEST,
  TODOS_REMOVE_COMPLETED_ITEMS_SUCCESS,
  TODOS_REMOVE_COMPLETED_ITEMS_FAIL,
} from '../constants';
import * as api from '../../Apis/todosApiService';
import { ITodoInfo } from '../interfaces/payloadTodo';

export const getTodosList = () => async (dispatch: any, getState: any) => {
  try {
    dispatch({ type: TODOS_LIST_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();

    const data = await api.getTodosByUserId(userInfo.id, userInfo.token);

    dispatch({ type: TODOS_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: TODOS_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateTodoItem = (item: ITodoInfo) => async (
  dispatch: any,
  getState: any
) => {
  try {
    dispatch({ type: TODOS_UPDATE_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();
    const {
      todosList: { todos },
    } = getState();

    let temp = { _id: item.id, status: item.status };

    const data = await api.updateTodoItem(temp, userInfo.token);
    var foundItem = todos.find((x) => x.id == data.id);
    foundItem = item;

    dispatch({ type: TODOS_UPDATE_SUCCESS, payload: data });
    dispatch({ type: TODOS_UPDATE_RESET });
    //dispatch(getTodosList());
  } catch (error) {
    dispatch({
      type: TODOS_UPDATE_FAIL,
    });
  }
};

export const removeTodoItem = (id: string) => async (
  dispatch: any,
  getState: any
) => {
  try {
    dispatch({ type: TODOS_REMOVE_ITEM_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();

    const data = await api.removeTodoItem(id, userInfo.token);
    dispatch({ type: TODOS_REMOVE_ITEM_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: TODOS_REMOVE_ITEM_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const removeCompletedTodoItems = () => async (
  dispatch: any,
  getState: any
) => {
  try {
    dispatch({ type: TODOS_REMOVE_COMPLETED_ITEMS_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();

    const {
      todosList: { todos },
    } = getState();

    const data = await api.removeCompletedTodoItems(userInfo.token);

    if (data.ok)
      dispatch({
        type: TODOS_REMOVE_COMPLETED_ITEMS_SUCCESS,
        payload: todos.filter((x) => x.status !== 2),
      });
  } catch (error) {
    dispatch({
      type: TODOS_REMOVE_COMPLETED_ITEMS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
