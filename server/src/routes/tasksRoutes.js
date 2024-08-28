import express from 'express';
import { createTask, getTasksByStatus, getTaskById, deleteTaskById } from '../controllers/tasksController.js';
import { authenticateToken } from '../utils/authUtils.js';

const router = express.Router();

router.get('/tasks/:status', authenticateToken, getTasksByStatus);
router.get('/tasks/:id', authenticateToken, getTaskById);

router.post('/tasks', authenticateToken, createTask);

router.delete('/tasks/:id', authenticateToken, deleteTaskById);

export default router;