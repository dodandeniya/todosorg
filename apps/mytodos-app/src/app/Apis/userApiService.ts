import axios from 'axios';

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};

export const login = async (email: string, password: string) => {
  const { data } = await axios.post(
    '/api/users/login',
    { email, password },
    config
  );

  return data;
};

export const register = async (
  firstName: string,
  lastName: string,
  email: string,
  password: string
) => {
  const { data } = await axios.post(
    '/api/users',
    { firstName, lastName, email, password },
    config
  );

  return data;
};
