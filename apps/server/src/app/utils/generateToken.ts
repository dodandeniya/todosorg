import * as jwt from 'jsonwebtoken';

const generateToken = (id: String) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};

export default generateToken;
