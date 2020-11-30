import {
  TODOS_LIST_FAIL,
  TODOS_LIST_REQUEST,
  TODOS_LIST_RESET,
  TODOS_LIST_SUCCESS,
  TODOS_UPDATE_FAIL,
  TODOS_UPDATE_REQUEST,
  TODOS_UPDATE_RESET,
  TODOS_UPDATE_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_RESET,
  USER_REGISTER_SUCCESS,
} from '../constants';
import { IUserInfo } from '../interfaces/payloadUser';

interface IUserTypes {
  type:
    | typeof USER_LOGIN_SUCCESS
    | typeof USER_LOGIN_FAIL
    | typeof USER_LOGIN_REQUEST
    | typeof USER_LOGOUT
    | typeof USER_REGISTER_SUCCESS
    | typeof USER_REGISTER_FAIL
    | typeof USER_REGISTER_REQUEST
    | typeof USER_REGISTER_RESET;
  payload: IUserInfo | string;
}

interface ITodosTypes {
  type:
    | typeof TODOS_LIST_SUCCESS
    | typeof TODOS_LIST_FAIL
    | typeof TODOS_LIST_REQUEST
    | typeof TODOS_LIST_RESET
    | typeof TODOS_UPDATE_REQUEST
    | typeof TODOS_UPDATE_SUCCESS
    | typeof TODOS_UPDATE_FAIL
    | typeof TODOS_UPDATE_RESET;
  payload: any;
}

export type UserTypes = IUserTypes;
export type TodosTypes = ITodosTypes;
