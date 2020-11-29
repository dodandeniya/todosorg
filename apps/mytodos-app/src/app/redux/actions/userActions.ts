import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_RESET,
  TODOS_LIST_RESET,
} from '../constants';
import * as api from '../../Apis/userApiService';

export const login = (email: string, password: string) => async (
  dispatch: any
) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });
    const data = await api.login(email, password);

    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const logout = () => (dispatch: any) => {
  localStorage.removeItem('userInfo');
  dispatch({ type: USER_LOGOUT });
  dispatch({ type: TODOS_LIST_RESET });
};

export const register = (
  firstName: string,
  lastName: string,
  email: string,
  password: string
) => async (dispatch: any) => {
  try {
    dispatch({ type: USER_REGISTER_REQUEST });

    const data = await api.register(firstName, lastName, email, password);

    dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
    localStorage.setItem('userInfo', JSON.stringify(data));
    dispatch({ type: USER_REGISTER_RESET });
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
