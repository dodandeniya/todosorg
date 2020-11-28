import doenv from 'dotenv';
import users from './users';
import todos from './todos';
import User from '../models/userModel';
import Todo from '../models/todoModel';
import connectDB from '../../config/db-config';

doenv.config();
connectDB();

export const importData = async () => {
  try {
    await User.deleteMany({});
    await Todo.deleteMany({});

    const createdUsers = await User.insertMany(users);
    const adminUser = createdUsers[0]._id;

    const sampleTodos = todos.map((item) => {
      return { ...item, user: adminUser };
    });

    await Todo.insertMany(sampleTodos);

    console.log('Data imported!');
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

const deleteData = async () => {
  try {
    await User.deleteMany({});
    await Todo.deleteMany({});

    console.log('Data deleted!');
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  deleteData();
} else {
  importData();
}
