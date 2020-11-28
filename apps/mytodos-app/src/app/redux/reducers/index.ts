import { combineReducers } from 'redux';
import { userReducer, userRegisterReducer } from './userReducer';

const rootReducer = combineReducers({
  userLogin: userReducer,
  userRegister: userRegisterReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
