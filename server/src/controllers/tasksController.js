import { createTaskService, updateTaskService, deleteTaskService, getTaskService, getTasksService } from "../services/tasksService.js";

export const createTask = async (req, res) => {
    const { title, description, status, priority } = req.body;
    const userId = req.userId;

    await createTaskService(res, {title, description, status, priority, userId});
};

export const updateTask = async (req, res) => {
    const { id } = req.params;
    const { title, description, status, priority } = req.body;
    const userId = req.userId;

    await updateTaskService(res, { id, title, description, status, priority, userId });
};

export const getTasksByStatus = async (req, res) => {
    const { status } = req.params;
    const userId = req.userId;

    await getTasksService(res, status, userId);
};

export const getTaskById = async (req, res) => {
    const { id } = req.params; 

    await getTaskService(res, id);
};

export const deleteTaskById = async (req, res) => {
    const { id } = req.params;

    await deleteTaskService(res, id);
};