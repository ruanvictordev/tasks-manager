export function validateTasksData(tasksData) {
    const { title, description, status, priority } = tasksData;

    if (!title || !description || !status || !priority) return { isValid: false, message: "Fill all the inputs!" };

    if (description.length > 200) return { isValid: false, message: "Description can receive only 200 caracteres!" };

    if (title.length > 40) return { isValid: false, message: "Title can receive only 40 caracteres!" };

    if (status.length > 20) return { isValid: false, message: "Status can receive only 20 caracteres!" };

    if (priority.length > 2) return { isValid: false, message: "Priority can receive only 2 caracteres!" };

    return { isValid: true };
}