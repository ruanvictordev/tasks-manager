import api from '../services/api';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function useEditTask() {
  const navigate = useNavigate();

  const editTask = async (id, updatedTaskData) => {
    
    try {
      const response = await api.put(`/tasks/${id}`, updatedTaskData);
      
      if (response.data.error) {
        toast.error(response.data.error);
      } else {
        toast.success(response.data.message);
        setTimeout(() => {
          navigate('/userpage');
        }, 1000);
      }
      
    } catch (err) {
      toast.error("Error while edit task.");
    }
  };

  return { editTask };
}
