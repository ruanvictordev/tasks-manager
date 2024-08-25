import { PrismaClient } from '@prisma/client';
import { throwResError } from '../utils/utils.js';

const prisma = new PrismaClient();

export const createNewTask = async (res, taskData) => {
    try {
        const newTask = await prisma.task.create({
            data: {
                title: taskData.title,
                description: taskData.description,
                status: taskData.status || 'pending', 
                priority: taskData.priority || 1,     
                authorId: taskData.authorId,          
                createdAt: new Date(),                
            }
        });

        res.status(201).json(newTask);
    } catch (error) {
        throwResError('Error While Creating a New Task.', res);
    }
};
