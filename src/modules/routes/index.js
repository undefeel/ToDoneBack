import { Router } from 'express';
import userRoutes from './authRoutes/auth.js';
import { tokenVerif } from '../middleware/middleAuth.js';

const router = Router();

router.use('/user', userRoutes);

export default router;