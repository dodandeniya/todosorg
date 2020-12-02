import { importData } from '../src/app/data/seeder';
import * as express from 'express';
import connectDB from './config/db-config';
import doenv from 'dotenv';
import userRoutes from './app/routes/userRoutes';
import todoRouters from './app/routes/todosRoutes';
import { errorHandler, notFound } from './app/middleware/errorMiddleware';

doenv.config();
connectDB();

// adding seed data to db.
//importData();

const app = express();
app.use(express.json());

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to server!' });
});

app.use('/api/todos', todoRouters);
app.use('/api/users', userRoutes);

app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
