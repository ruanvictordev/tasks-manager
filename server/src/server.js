import express from 'express';
import cors from 'cors';
import authRouter from './routes/authRoutes.js';
import taskRouter from './routes/tasksRoutes.js';

const app = express();
app.use(express.json());
app.use(cors());

app.use(authRouter);
app.use(taskRouter);

app.listen(8000, () => {
    console.log('server rodando na porta 8000');
});