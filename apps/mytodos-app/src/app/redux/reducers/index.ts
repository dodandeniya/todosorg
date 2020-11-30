import { combineReducers } from 'redux';
import { todoItemUpdateReducer, todosListReducer } from './todosReducer';
import { userReducer, userRegisterReducer } from './userReducer';

const rootReducer = combineReducers({
  userLogin: userReducer,
  userRegister: userRegisterReducer,
  todosList: todosListReducer,
  todoUpdateItem: todoItemUpdateReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
