import React from 'react';

const State = () => {
    return (
        <div className='border flex justify-around p-8 w-10/12 mx-auto bg-[#9514FA] rounded-3xl my-28'>
            <div className='text-center'>
                <h2 className='font-extrabold text-3xl text-white'>50K+</h2>
                <p className='text-gray-400'>Active Users</p>
            </div>
            <div className='text-center'>
                <h2 className='font-extrabold text-3xl text-white'>200+</h2>
                <p className='text-gray-400'>Premium Tools</p>
            </div>
            <div className='text-center'>
                <h2 className='font-extrabold text-3xl text-white'>4.9</h2>
                <p className='text-gray-400'>Rating</p>
            </div>
        </div>
    );
};

export default State;