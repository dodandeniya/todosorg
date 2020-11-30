import axios from 'axios';
import { ITodoInfo } from '../redux/interfaces/payloadTodo';

const getConfig = (token: string) => {
  return {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };
};

export const getTodosByUserId = async (userId: string, token: string) => {
  const { data } = await axios.get(
    `/api/todos/getbyuser/${userId}`,
    getConfig(token)
  );

  return data;
};

export const updateTodoItem = async (item: any, token: string) => {
  const { data } = await axios.put(`/api/todos`, item, getConfig(token));

  return data;
};
