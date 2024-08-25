import express from 'express';
import { createTask } from '../controllers/tasksController.js';
import { authenticateToken } from '../utils/utils.js';

const router = express.Router();

router.post('/createTask', authenticateToken, createTask);

export default router;