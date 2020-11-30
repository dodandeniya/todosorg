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

const getConfigWithData = (token: string, data: any) => {
  return {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    data: data,
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

export const removeTodoItem = async (id: string, token: string) => {
  const { data } = await axios.delete(
    `/api/todos`,
    getConfigWithData(token, { id: id })
  );

  return data;
};

export const removeCompletedTodoItems = async (token: string) => {
  const { data } = await axios.delete(
    `/api/todos/deleteMany`,
    getConfig(token)
  );
  return data;
};

export const createTodoItem = async (item: any, token: string) => {
  const { data } = await axios.post(`/api/todos`, item, getConfig(token));
  return data;
};

export const searchTodos = async (
  userId: string,
  token: string,
  searchItem: string
) => {
  const { data } = await axios.post(
    `/api/todos/search/${userId}`,
    { search: searchItem },
    getConfig(token)
  );

  return data;
};
