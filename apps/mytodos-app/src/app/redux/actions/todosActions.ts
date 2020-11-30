import {
  TODOS_LIST_FAIL,
  TODOS_LIST_REQUEST,
  TODOS_LIST_SUCCESS,
  TODOS_UPDATE_REQUEST,
  TODOS_UPDATE_SUCCESS,
  TODOS_UPDATE_FAIL,
  TODOS_UPDATE_RESET,
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

    let temp = { _id: item.id, status: item.status };

    const data = await api.updateTodoItem(temp, userInfo.token);

    dispatch({ type: TODOS_UPDATE_SUCCESS, payload: data });
    dispatch({ type: TODOS_UPDATE_RESET });
    dispatch(getTodosList());
  } catch (error) {
    dispatch({
      type: TODOS_UPDATE_FAIL,
    });
  }
};
