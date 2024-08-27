import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import api from '../services/api';

export function useRegister() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/register", {
        email,
        name,
        password,
      });

      if (response.data.error) {
        toast.error(response.data.error);
      } else{
        toast.success(response.data.message);
        setTimeout(() => {
          navigate('/login');
        }, 1000);
      }
    } catch (error) {
      toast.error("Failed to register account");
    }
  };

  return {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    handleRegister,
  };
}
