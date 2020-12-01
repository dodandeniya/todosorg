import axios from 'axios';

/**
 * Axios Request config
 */
const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};

/**
 * login api function
 * @param email
 * @param password
 * @returns Promis
 */
export const login = async (email: string, password: string) => {
  const { data } = await axios.post(
    '/api/users/login',
    { email, password },
    config
  );

  return data;
};

/**
 * User registaretion api funcion
 * @param firstName
 * @param lastName
 * @param email
 * @param password
 * @returns Promis
 */
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
