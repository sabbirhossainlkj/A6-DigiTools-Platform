import React from 'react';
import userimg from '../../assets/user.png'
import packageimg from '../../assets/package.png'
import rocketimg from '../../assets/rocket.png'


const Steps = () => {
    return (
        <div className='w-10/12 mx-auto my-28 rounded-2xl space-y-5'>
            
            <h2 className='text-4xl font-bold my-4 text-center'>Get Started in 3 Steps</h2>
            <p className='text-gray-600 text-center'>Start using premium digital tools in minutes, not hours.</p>
            <div className='grid grid-cols-3 gap-3 '>
            <div className='border border-gray-300 p-6 flex flex-col items-center rounded-3xl my-6 text-center space-y-3 shadow-2xl'>
                <img src={userimg} alt="User" />
                <h4 className='font-bold text-xl'>Create Account</h4>
                <p className='text-gray-500'>Sign up for free in seconds. No credit card required to get started.</p>
            </div>
            <div className='border border-gray-300 p-6 flex flex-col items-center rounded-3xl my-6 text-center space-y-3 shadow-2xl'>
                <img src={packageimg} alt="User" />
                <h4 className='font-bold text-xl'>Create Account</h4>
                <p className='text-gray-500'>Sign up for free in seconds. No credit card required to get started.</p>
            </div>
            <div className='border border-gray-300 p-6 flex flex-col items-center rounded-3xl my-6 text-center space-y-3 shadow-2xl'>
                <img src={rocketimg} alt="User" />
                <h4 className='font-bold text-xl'>Create Account</h4>
                <p className='text-gray-500'>Sign up for free in seconds. No credit card required to get started.</p>
            </div>
            </div>
        </div>
    );
};

export default Steps;