import { PrismaClient } from '@prisma/client';
import { throwResError } from '../utils/utils.js';
import { validateTasksData } from '../utils/tasksUtils.js';

const prisma = new PrismaClient();

export const createNewTask = async (res, tasksData) => {
    try {
        const validation = validateTasksData(tasksData);

        if(!validation.isValid) return throwResError(validation.message, res);

        const newTask = await prisma.task.create({
            data: {
                title: tasksData.title,
                description: tasksData.description,
                status: tasksData.status || 'pending', 
                priority: tasksData.priority || 1,     
                authorId: tasksData.userId,          
                createdAt: new Date(),                
            }
        });

        res.status(201).json({ message: 'Task Created!', newTask });
    } catch (error) {
        throwResError('Error While Creating a New Task.', res);
    }
};

export const getTasks = async (res, status, userId) => {
    const validStatuses = ['pending', 'in-progress', 'completed'];

    if (!validStatuses.includes(status)) {
        return res.status(400).json({ error: 'Invalid Status Provided!' });
    }

    try {
        const tasks = await prisma.task.findMany({
            where: { status: status, authorId: userId },
            orderBy: { createdAt: 'desc' }
        });
        res.status(200).json(tasks);
    } catch (error) {
        throwResError('Error Fetching Tasks by Status', res);
    }
};

export const getTask = async (res, id) => {
    try {
        const task = await prisma.task.findUnique({ where: { id: id } });

        if (!task) return res.status(404).json({ error: 'Task not found' });

        res.status(200).json(task);
    } catch (error) {
        throwResError('Error fetching task by id', res);
    }
};

export const deleteTask = async (res, id) => {
    try {
        const task = await prisma.task.delete({ where: {id: id} });

        res.status(200).json({ message: 'Task deleted successfully', task });
    } catch (error) {
        if (error.code === 'P2025') return res.status(404).json({ error: 'Task not found' });
        
        throwResError('Error deleting task', res);
    }
}