import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import authRouter from './routes/authRoutes.js';
import taskRouter from './routes/tasksRoutes.js';

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use(cors({
    origin: 'http://localhost:5173', 
    credentials: true 
}));

app.use('/api', authRouter);
app.use('/api', taskRouter);

app.listen(8000, () => {
    console.log('Server is running at port: 8000');
});
