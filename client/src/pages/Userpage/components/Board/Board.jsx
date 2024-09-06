import React, { useState } from "react";
import Column from "./Column";
import Card from "./Card";
import useTasks from "../../../../hooks/useTasks";
import PopupModal from "../PopupModal/PopupModal";
import useEditTask from "../../../../hooks/useEditTask";
import useDeleteTask from "../../../../hooks/useDeleteTask";
import Input from "../../../../components/Inputs/Input";
import Select from "../../../../components/Inputs/Select";
import Button from "../../../../components/Buttons/Button";

export default function Board() {
  const { pendingTasks, inProgressTasks, completedTasks, loading, error, refetchTasks } = useTasks();
  const { editTask } = useEditTask();
  const deleteTask = useDeleteTask();

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);

  const openEditModal = (task) => {
    setTaskToEdit(task);
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setTaskToEdit(null);
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();

    const editSuccess = await editTask(taskToEdit.id, {
      title: taskToEdit.title,
      description: taskToEdit.description,
      status: taskToEdit.status,
      priority: taskToEdit.priority,
    });

    if (editSuccess) {
      closeEditModal();
      refetchTasks();
    }
  };

  const handleDelete = async (taskId) => {
    await deleteTask(taskId);
    refetchTasks(); 
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-full">Loading...</div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-full">
        Error loading tasks
      </div>
    );
  }

  return (
    <section className="flex w-full gap-28 justify-between min-h-80 max-lg:flex-col">
      <Column
        title="Pending"
        imageSrc="/icons/pending.svg"
        count={pendingTasks.length}
      >
        {pendingTasks.map((task) => (
          <Card
            key={task.id}
            id={task.id}
            title={task.title}
            description={task.description}
            status={task.status}
            priority={task.priority}
            createdAt={task.createdAt}
            onEdit={() => openEditModal(task)}
            onDelete={() => handleDelete(task.id)}
          />
        ))}
      </Column>

      <Column
        title="In Progress"
        imageSrc="/icons/in-progress.svg"
        count={inProgressTasks.length}
      >
        {inProgressTasks.map((task) => (
          <Card
            key={task.id}
            id={task.id}
            title={task.title}
            description={task.description}
            status={task.status}
            priority={task.priority}
            createdAt={task.createdAt}
            onEdit={() => openEditModal(task)}
            onDelete={() => handleDelete(task.id)}
          />
        ))}
      </Column>

      <Column
        title="Completed"
        imageSrc="/icons/completed.svg"
        count={completedTasks.length}
      >
        {completedTasks.map((task) => (
          <Card
            key={task.id}
            id={task.id}
            title={task.title}
            status={task.status}
            description={task.description}
            priority={task.priority}
            createdAt={task.createdAt}
            onEdit={() => openEditModal(task)}
            onDelete={() => handleDelete(task.id)}
          />
        ))}
      </Column>

      {/* Modal de Edição */}
      {taskToEdit && (
        <PopupModal
          title="Edit Task"
          isOpen={isEditModalOpen}
          onClose={closeEditModal}
        >
          <form onSubmit={handleEditSubmit} className="flex flex-col gap-4">
            <div>
              <label>
                <span className="text-red-700">*</span> Task Name:
              </label>
              <Input
                type="text"
                placeholder="Task Name"
                value={taskToEdit.title}
                onChange={(e) =>
                  setTaskToEdit({ ...taskToEdit, title: e.target.value })
                }
                className="bg-transparent"
              />
            </div>

            <div>
              <label>
                <span className="text-red-700">*</span> Task Description:
              </label>
              <Input
                type="text"
                placeholder="Task Description"
                value={taskToEdit.description}
                onChange={(e) =>
                  setTaskToEdit({ ...taskToEdit, description: e.target.value })
                }
                className="bg-transparent"
              />
            </div>

            <div>
              <label>
                <span className="text-red-700">*</span> Task Status:
              </label>
              <Select
                options={[
                  { value: "pending", label: "Pending" },
                  { value: "in-progress", label: "In Progress" },
                  { value: "completed", label: "Completed" },
                ]}
                value={taskToEdit.status}
                onChange={(e) =>
                  setTaskToEdit({ ...taskToEdit, status: e.target.value })
                }
                className="bg-transparent"
              />
            </div>

            <div>
              <label>
                <span className="text-red-700">*</span> Priority:
              </label>
              <Select
                options={[
                  { value: "1", label: "1 - Low" },
                  { value: "2", label: "2 - Medium" },
                  { value: "3", label: "3 - High" },
                ]}
                value={taskToEdit.priority}
                onChange={(e) =>
                  setTaskToEdit({ ...taskToEdit, priority: e.target.value })
                }
                className="bg-transparent"
              />
            </div>

            <Button type="submit">Save Changes</Button>
          </form>
        </PopupModal>
      )}
    </section>
  );
}
