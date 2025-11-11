import React from 'react';

const PageNotFound = () => {
    return (
        <div className='bg-[#FED3D1] flex flex-col justify-center items-center min-h-screen'>
            <div className='text-5xl text-red-700'>Opps!</div>
            <div className='text-2xl text-amber-600'>
                Page not found
            </div>
            <div className='text-7xl font-bold text-red-500'>404</div>
        </div>
    );
};

export default PageNotFound;