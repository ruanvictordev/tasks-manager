import { PrismaClient } from '@prisma/client';
import { throwResError } from '../utils/utils.js';

const prisma = new PrismaClient();

export const createUser = async (res, userData) => {
    try {
        const user = await prisma.user.create({ data: userData });
        res.status(201).json(user);
    } catch (error) {
        throwResError('Error Create User', res)
    }
};
