import * as express from 'express';
import { authUser, registerUser } from '../controllers/userController';
import { protect } from '../middleware/authMiddleware';
const router = express.Router();

router.route('/').post(registerUser);
router.post('/login', authUser);

export default router;
