import React from 'react';
import {  SyncLoader } from 'react-spinners';

const LoadingSpinner = () => {
    return (
        <div className='flex justify-center items-center min-h-screen'>
           <SyncLoader/>
        </div>
    );
};

export default LoadingSpinner;