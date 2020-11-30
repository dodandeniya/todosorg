import { combineReducers } from 'redux';
import {
  searchReducer,
  todoItemUpdateReducer,
  todosListReducer,
} from './todosReducer';
import { userReducer, userRegisterReducer } from './userReducer';

const rootReducer = combineReducers({
  userLogin: userReducer,
  userRegister: userRegisterReducer,
  todosList: todosListReducer,
  todoUpdateItem: todoItemUpdateReducer,
  searchItems: searchReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
