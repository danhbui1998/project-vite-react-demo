import React from 'react';
import { Navigate, Outlet } from 'react-router-dom/dist';

import { useAuth } from '../AuthContext';

const AuthRouter = ({ redirect = '/' }) => {
    const { user } = useAuth();

    if (user) return <Navigate to={redirect} />;
    return <Outlet />;
};

export default AuthRouter;
