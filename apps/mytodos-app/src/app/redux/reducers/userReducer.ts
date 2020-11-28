import { UserTypes } from '../actions/actionTypes';
import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_RESET,
  USER_REGISTER_SUCCESS,
} from '../constants';
import { userDetailsInitial } from '../initialStates';
import IPayloadUser, { IUserInfo } from '../interfaces/payloadUser';

export const userReducer = (
  state = userDetailsInitial,
  action: UserTypes
): IPayloadUser => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };
    case USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: <IUserInfo>action.payload };
    case USER_LOGIN_FAIL:
      return { loading: false, error: <string>action.payload };
    case USER_LOGOUT:
      return userDetailsInitial;
    default:
      return state;
  }
};

export const userRegisterReducer = (
  state = userDetailsInitial,
  action: UserTypes
): IPayloadUser => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true };
    case USER_REGISTER_SUCCESS:
      return { loading: false, userInfo: <IUserInfo>action.payload };
    case USER_REGISTER_FAIL:
      return { loading: false, error: <string>action.payload };
    case USER_REGISTER_RESET:
      return { loading: false, error: null };
    default:
      return state;
  }
};
