import { PrismaClient } from '@prisma/client';
import { generateWebToken, throwResError, validateUserData } from '../utils/utils.js';
import { hashPassword , comparePassword } from '../utils/utils.js';

const prisma = new PrismaClient();

export const registerUser = async (res, userData) => {
    try {
        const validation = validateUserData(userData);

        if (!validation.isValid) return throwResError(validation.message, res);;

        const hashedPassword = await hashPassword(userData.passwordHash);

        const userWithHashedPassword = { ...userData, passwordHash: hashedPassword };

        const user = await prisma.user.create({ data: userWithHashedPassword });
        res.status(201).json({ message: 'Account Created!', user });
    } catch (error) {
        return res.status(500).json({ error: 'Error When Create User' });
    }
};

export const loginUser = async (res, userData) => {
    try {
        const user = await prisma.user.findUnique({ where: { email: userData.email } });

        if (!user) return throwResError('Email or Password Incorrect!', res);

        const isPasswordValid = await comparePassword(userData.passwordHash, user.passwordHash);

        if (!isPasswordValid) return throwResError('Email or Password Incorrect!', res);

        await generateWebToken(user, res);
        res.status(200).json({ message: 'Logged Successfully!', user });
    } catch (error) {
        throwResError('Login Error', res);
    }
};



export const logoutUser = async (res) => {
    try {
        res.clearCookie('jwt');
        res.status(200).json({ message: 'Logged Out Successfully!' });
    } catch (error) {
        throwResError('Logout Error', res);
    }
};