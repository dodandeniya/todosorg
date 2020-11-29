import { combineReducers } from 'redux';
import { todosListReducer } from './todosReducer';
import { userReducer, userRegisterReducer } from './userReducer';

const rootReducer = combineReducers({
  userLogin: userReducer,
  userRegister: userRegisterReducer,
  todosList: todosListReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
