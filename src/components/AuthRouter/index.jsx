import React from 'react';
import { Navigate, Outlet } from 'react-router-dom/dist';

const AuthRouter = ({ user, redirect = '/' }) => {
    if (user) return <Navigate to={redirect} />;
    return <Outlet />;
};

export default AuthRouter;
