import { importData } from '../src/app/data/seeder';
import * as express from 'express';
import connectDB from './config/db-config';

connectDB();

// adding seed data to db.
//importData();

const app = express();

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to server!' });
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
