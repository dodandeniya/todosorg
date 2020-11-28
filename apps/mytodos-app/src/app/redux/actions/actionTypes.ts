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

export type UserTypes = IUserTypes;
