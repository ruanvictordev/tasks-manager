import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const useInfoUser = () => {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const token = Cookies.get('jwt'); 

    if (token) {
      try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        const fullName = payload.name; 
        const firstName = fullName.split(' ')[0]; 
        setUserName(firstName);
      } catch (error) {
        console.error('Failed to decode JWT:', error);
        setUserName(''); 
      }
    }
  }, []);

  return userName; 
};

export default useUserName;
