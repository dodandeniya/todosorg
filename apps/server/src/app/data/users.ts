import * as bcrypt from 'bcryptjs';

const users = [
  {
    firstName: 'Chamara',
    lastName: 'Dodandeniya',
    email: 'c@abc.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
