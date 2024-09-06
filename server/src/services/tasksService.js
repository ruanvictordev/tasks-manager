import { PrismaClient } from '@prisma/client';
import { throwResError } from '../utils/utils.js';
import { validateTasksData } from '../utils/tasksUtils.js';

const prisma = new PrismaClient();

export const createTaskService = async (res, tasksData) => {
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
        console.error('Update Task Error:', error);
        throwResError('Error While Creating a New Task.', res);
    }
};

export const updateTaskService = async (res, taskData) => {
    const { id, title, description, status, priority, userId } = taskData;

    try {
        const validation = validateTasksData({ title, description, status, priority });
        if (!validation.isValid) return throwResError(validation.message, res);

        const task = await prisma.task.findUnique({ where: { id } });
        if (!task) return res.status(404).json({ error: 'Task not found' });
        if (task.authorId !== userId) return res.status(403).json({ error: 'Unauthorized' });

        const updatedTask = await prisma.task.update({
            where: { id },
            data: {
                title: title || task.title,
                description: description || task.description,
                status: status || task.status,
                priority: priority || task.priority
            }
        });

        res.status(200).json({ message: 'Task updated successfully', updatedTask });
    } catch (error) {
        throwResError('Error updating task', res);
    }
};

export const getTasksService = async (res, status, userId) => {
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

export const getTaskService = async (res, id) => {
    try {
        const task = await prisma.task.findUnique({ where: { id: id } });

        if (!task) return res.status(404).json({ error: 'Task not found' });

        res.status(200).json(task);
    } catch (error) {
        throwResError('Error fetching task by id', res);
    }
};

export const deleteTaskService = async (res, id) => {
    try {
        const task = await prisma.task.delete({ where: {id: id} });

        res.status(200).json({ message: 'Task deleted successfully', task });
    } catch (error) {
        if (error.code === 'P2025') return res.status(404).json({ error: 'Task not found' });
        
        throwResError('Error deleting task', res);
    }
}