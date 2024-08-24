import { PrismaClient } from '@prisma/client';
import { throwResError } from '../utils/utils.js';
import { hashPassword ,comparePassword } from '../utils/utils.js';

const prisma = new PrismaClient();

export const registerUser = async (res, userData) => {
    try {
        const hashedPassword = await hashPassword(userData.passwordHash);

        const userWithHashedPassword = {...userData, passwordHash: hashedPassword};

        const user = await prisma.user.create({ data: userWithHashedPassword });
        res.status(201).json(user);
    } catch (error) {
        throwResError('Error When Create User', res);
    }
};

export const loginUser = async (res, userData) => {
    try {
        const user = await prisma.user.findUnique({ where: { email: userData.email } });

        if (!user) return throwResError('User not Found', res);

        const isPasswordValid = await comparePassword(userData.passwordHash, user.passwordHash);

        if (!isPasswordValid) return throwResError('Incorrect Password', res);

        res.status(200).json({ message: 'Logged Successfuly!', user });
    } catch (error) {
        throwResError('Login Error', res);
    }
};