import React from 'react';
import { useAuth } from '../Hooks/useAuth';
import { Navigate } from 'react-router';
import LoadingSpinner from '../Components/LoadingSpinner/LoadingSpinner';

const PrivateRoute = ({children}) => {

    const {user, loading} = useAuth()

    if(loading){
        return <LoadingSpinner></LoadingSpinner>
    }
    if(!user){
        return <Navigate to={'/auth/login'}></Navigate>
    }
    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoute;