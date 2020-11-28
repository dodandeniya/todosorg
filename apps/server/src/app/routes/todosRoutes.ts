import * as express from 'express';
import {
  createTodoItem,
  deleteTodoItem,
  getTodoItemtById,
  getTodosListByUserId,
  updateTodoItem,
} from '../controllers/todosController';
import { protect } from '../middleware/authMiddleware';
const router = express.Router();

router.route('/:id').get(protect, getTodoItemtById);
router.route('/getbyuser/:userId').get(protect, getTodosListByUserId);
router.delete('/', deleteTodoItem);

router.route('/').post(protect, createTodoItem).put(protect, updateTodoItem);

export default router;
