import api from '../services/api';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function useDeleteTask() {
  const navigate = useNavigate();

  const deleteTask = async (id) => {
    try {
      const response = await api.delete(`/tasks/${id}`);
      
      if (response.data.error) {
        toast.error(response.data.error);
      } else {
        toast.success(response.data.message);
        navigate('/userpage');
      }
    } catch (err) {
        toast.error("Error while delete task.");
    }
  };

  return deleteTask;
}
