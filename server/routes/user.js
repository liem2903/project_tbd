import express, { Router } from 'express';
import { getFriendCode } from '../controllers/userController.js';
const router = express.Router();
import { authMiddleware, refreshMiddleware, googleAuthMiddleware } from '../middleware/middleware.js';

router.get('/get-friend-code', authMiddleware, getFriendCode);

export default router;

