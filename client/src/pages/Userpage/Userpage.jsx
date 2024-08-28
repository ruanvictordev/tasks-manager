import React, { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import Board from './components/Board/Board';
import Button from '../../components/Buttons/Button';
import Input from '../../components/Inputs/Input';
import useInfoUser from '../../hooks/useInfoUser';
import useCreateTask from '../../hooks/useCreateTasks';
import PopupModal from './components/PopupModal/PopupModal';

export default function Userpage() {
  const userName = useInfoUser();
  const {
    taskName,
    taskDescription,
    taskStatus,
    taskPriority,
    handleTaskNameChange,
    handleTaskDescriptionChange,
    handleTaskStatusChange,
    handleTaskPriorityChange,
    handleCreateTask,
  } = useCreateTask();

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <section className="flex flex-col gap-8 justify-center items-center">
      <div className='flex flex-col gap-4 justify-center items-center'>
        <h1 className='text-6xl text-center text-brand-tertiayColor font-bold'>Welcome, {userName}!</h1>
        <h2 className='text-slate-400 text-center text-lg'>What you do today?</h2>
        <Button onClick={openModal}>New Task</Button>
      </div>

      <Board />

      <PopupModal title={"Create New Task"} isOpen={modalIsOpen} onClose={closeModal}>
        <form onSubmit={handleCreateTask} className='flex flex-col gap-4'>
          <Input
            type="text"
            placeholder="Task Name"
            value={taskName}
            onChange={handleTaskNameChange}
            className="bg-transparent"
          />
          <Input
            type="text"
            placeholder="Task Description"
            value={taskDescription}
            onChange={handleTaskDescriptionChange}
            className="bg-transparent"
          />
          <Input
            type="text"
            placeholder="Task Status"
            value={taskStatus}
            onChange={handleTaskStatusChange}
            className="bg-transparent"
          />
          <Input
            type="number"
            placeholder="Task Priority"
            value={taskPriority}
            onChange={handleTaskPriorityChange}
            className="bg-transparent"
          />
          <Button type="submit">Create Task</Button>
        </form>
      </PopupModal>
      <Toaster />
    </section>
  );
}