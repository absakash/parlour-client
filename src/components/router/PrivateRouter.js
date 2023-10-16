import React, { useContext } from 'react';
import { AuthContexts } from '../context/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRouter = ({children}) => {
      const location=useLocation();
      const {user}=useContext(AuthContexts)
      if(!user){
            return <Navigate to="/register" state={{ from: location }} replace></Navigate>
      }
      return children;
};

export default PrivateRouter;