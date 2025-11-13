import React from 'react';
import { useAuth } from '../Hooks/useAuth';
import { Navigate, useLocation } from 'react-router';
import LoadingSpinner from '../Components/LoadingSpinner/LoadingSpinner';

const PrivateRoute = ({children}) => {

    const {user, loading} = useAuth()
    const location = useLocation()

    if(loading){
        return <LoadingSpinner></LoadingSpinner>
    }
    if(!user){
        return <Navigate state={location.pathname} to={'/auth/login'}></Navigate>
    }
    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoute;