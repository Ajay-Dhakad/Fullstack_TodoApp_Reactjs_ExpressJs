import React, { useEffect } from 'react';
import { useAuth } from '../Contexts/authContext';
import { useNavigate } from 'react-router-dom';

function RouteProtector({ children, authentication = true }) {
  const navigate = useNavigate();
  const { userstatus, updatestatus } = useAuth();

  useEffect(() => {
    const checkAuthentication = async () => {
      // Ensure userstatus is updated before authentication checks
      // await updatestatus();

      if (authentication && !userstatus) {
        navigate('/login');
      } else if (!authentication && userstatus) {
        navigate('/');
      }
    };

    checkAuthentication();
  }, [userstatus, updatestatus, navigate, authentication]);

  return <>{children}</>;
}

export default RouteProtector;
