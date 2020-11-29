import {
  TODOS_LIST_FAIL,
  TODOS_LIST_REQUEST,
  TODOS_LIST_SUCCESS,
} from '../constants';
import * as api from '../../Apis/todosApiService';

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
