import React from 'react'
import { Navigate, Outlet } from "react-router-dom";
import useAuth from 'hooks/useAuth';

const UserNotLoggedInRoute: React.FC<{}> = () => {
    const { isUserLoggedIn } = useAuth();

    if (isUserLoggedIn === null) return null;

    if (!isUserLoggedIn) {
        return <Outlet />
    }

    return <Navigate to='/dashboard' />;
}

export default UserNotLoggedInRoute