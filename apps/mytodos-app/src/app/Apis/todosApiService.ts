import axios from 'axios';

/**
 * getConfig returens AxiosRequestConfig object with Authorization token
 * @param token
 */
const getConfig = (token: string) => {
  return {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };
};

/**
 * getConfigWithData returens AxiosRequestConfig object with Authorization token
 * and data object
 *
 * @param token
 * @param data
 */
const getConfigWithData = (token: string, data: any) => {
  return {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    data: data,
  };
};

/**
 * getTodosByUserId api function returns todoslist based on userid
 * @param userId
 * @param token
 */
export const getTodosByUserId = async (userId: string, token: string) => {
  const { data } = await axios.get(
    `/api/todos/getbyuser/${userId}`,
    getConfig(token)
  );

  return data;
};

/**
 * updateTodoItem api function used to update the selected todo item
 * @param item
 * @param token
 */
export const updateTodoItem = async (item: any, token: string) => {
  const { data } = await axios.put(`/api/todos`, item, getConfig(token));

  return data;
};

/**
 * removeTodoItem api used to remove todo item
 * @param id
 * @param token
 */
export const removeTodoItem = async (id: string, token: string) => {
  const { data } = await axios.delete(
    `/api/todos`,
    getConfigWithData(token, { id: id })
  );

  return data;
};

/**
 * removeCompletedTodoItems api used to remove Completed Todo Items
 * @param token
 */
export const removeCompletedTodoItems = async (token: string) => {
  const { data } = await axios.delete(
    `/api/todos/deleteMany`,
    getConfig(token)
  );
  return data;
};

/**
 * createTodoItem api function for create todo item
 * @param item
 * @param token
 */
export const createTodoItem = async (item: any, token: string) => {
  const { data } = await axios.post(`/api/todos`, item, getConfig(token));
  return data;
};

/**
 * searchTodos api function for search todo items base on user id and search key
 * @param userId
 * @param token
 * @param searchItem
 */
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
