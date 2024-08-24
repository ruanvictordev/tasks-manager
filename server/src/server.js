const { PrismaClient } = require('@prisma/client')
import express from 'express';
import cors from 'cors';

const prisma = new PrismaClient()
const app = express();
app.use(express.json());
app.use(cors())