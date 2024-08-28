import { createNewTask, deleteTask, getTask, getTasks } from "../services/tasksService.js";

export const createTask = async (req, res) => {
    const { title, description, status, priority } = req.body;
    const userId = req.userId; // Middleware token

    await createNewTask(res, {title, description, status, priority, userId});
};

export const getTasksByStatus = async (req, res) => {
    const { status } = req.params;
    const userId = req.userId;

    await getTasks(res, status, userId);
};

export const getTaskById = async (req, res) => {
    const { id } = req.params; 

    await getTask(res, id);
};

export const deleteTaskById = async (req, res) => {
    const { id } = req.params;

    await deleteTask(res, id);
};