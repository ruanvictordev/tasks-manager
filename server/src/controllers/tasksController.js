import { createNewTask, deleteTask, getTask, getTasks } from "../services/tasksService.js";

export const createTask = async (req, res) => {
    const { title, description, status, priority } = req.body;
    const authorId = req.authorId; // Middleware token

    await createNewTask(res, {title, description, status, priority, authorId});
};

export const getTasksByStatus = async (req, res) => {
    const { status } = req.params;

    await getTasks(res, status);
};

export const getTaskById = async (req, res) => {
    const { id } = req.params; 

    await getTask(res, id);
};

export const deleteTaskById = async (req, res) => {
    const { id } = req.params;

    await deleteTask(res, id);
};