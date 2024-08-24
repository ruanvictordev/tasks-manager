import express from 'express';
import { login, logout, register } from '../controllers/authController.js';

const router = express.Router();

router.get('/login', login);
router.post('/logout', logout);
router.post('/register', register);

export default router;