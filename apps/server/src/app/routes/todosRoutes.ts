import * as express from 'express';
import {
  createTodoItem,
  deleteCompletedItems,
  deleteTodoItem,
  getTodoItemtById,
  getTodosListByUserId,
  searchTodoItem,
  updateTodoItem,
} from '../controllers/todosController';
import { protect } from '../middleware/authMiddleware';
const router = express.Router();

router.route('/deleteMany').delete(protect, deleteCompletedItems);
router.route('/:id').get(protect, getTodoItemtById);
router.route('/getbyuser/:userId').get(protect, getTodosListByUserId);
router.route('/').delete(protect, deleteTodoItem);
router.route('/search/:userId').post(protect, searchTodoItem);

router.route('/').post(protect, createTodoItem).put(protect, updateTodoItem);

export default router;
