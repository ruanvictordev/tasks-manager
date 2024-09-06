import { useState, useEffect, useCallback } from 'react';
import api from '../services/api';

const useTasks = () => {
  const [pendingTasks, setPendingTasks] = useState([]);
  const [inProgressTasks, setInProgressTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTasks = useCallback(async () => {
    try {
      setLoading(true);
      const [pendingResponse, inProgressResponse, completedResponse] = await Promise.all([
        api.get('/tasks/pending'),
        api.get('/tasks/in-progress'),
        api.get('/tasks/completed')
      ]);

      setPendingTasks(Array.isArray(pendingResponse.data) ? pendingResponse.data : []);
      setInProgressTasks(Array.isArray(inProgressResponse.data) ? inProgressResponse.data : []);
      setCompletedTasks(Array.isArray(completedResponse.data) ? completedResponse.data : []);
    } catch (error) {
      setError(error);
      console.error('Error fetching tasks:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  return { pendingTasks, inProgressTasks, completedTasks, loading, error, refetchTasks: fetchTasks };
};

export default useTasks;