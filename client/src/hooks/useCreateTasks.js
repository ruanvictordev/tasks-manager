import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import toast from 'react-hot-toast';

export default function useCreateTask() {
  const navigate = useNavigate();
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskStatus, setTaskStatus] = useState('pending'); // Valor padrão
  const [taskPriority, setTaskPriority] = useState(1);

  const handleTaskNameChange = (e) => setTaskName(e.target.value);
  const handleTaskDescriptionChange = (e) => setTaskDescription(e.target.value);
  const handleTaskStatusChange = (e) => setTaskStatus(e.target.value);
  const handleTaskPriorityChange = (e) => setTaskPriority(e.target.value);

  const handleCreateTask = async (e) => {
    e.preventDefault();

    try {
      const newTask = {
        title: taskName,
        description: taskDescription,
        status: taskStatus,
        priority: parseInt(taskPriority),
      };
      const response = await api.post('/tasks', newTask);

      if (response.data.error) {
        toast.error(response.data.error);
      } else {
        toast.success(response.data.message);

        setTimeout(() => {
          navigate('/userpage');
        }, 1000);
        
        setTaskName('');
        setTaskDescription('');
        setTaskStatus('pending');
        setTaskPriority(1);
      }
    } catch (error) {
      console.error('Error creating task:', error);
      toast.error('Failed to create task.');
    }
  };

  return {
    taskName,
    taskDescription,
    taskStatus,
    taskPriority,
    handleTaskNameChange,
    handleTaskDescriptionChange,
    handleTaskStatusChange,
    handleTaskPriorityChange,
    handleCreateTask,
  };
}
