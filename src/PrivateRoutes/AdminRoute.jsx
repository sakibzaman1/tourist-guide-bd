import React, { useContext } from 'react';
import useAdmin from '../CustomHooks/useAdmin';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const AdminRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin();
    if (loading || isAdminLoading) {
        return (
         <div className='min-h-screen flex items-center justify-center'>
            <span className="loading loading-ring loading-lg"></span>
         </div>
        );
      }
    
      if (user & isAdmin) {
        return children;
      }
    
      return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default AdminRoute;