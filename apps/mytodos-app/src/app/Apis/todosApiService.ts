import axios from 'axios';

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
