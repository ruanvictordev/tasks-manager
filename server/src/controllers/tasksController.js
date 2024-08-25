import { createNewTask } from "../services/tasksService.js";

export const createTask = async (req, res) => {
    const { title, description, status, priority } = req.body;
    const authorId = req.authorId; // Middleware token

    await createNewTask(res, {title, description, status, priority, authorId});
};