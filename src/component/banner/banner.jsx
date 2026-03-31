import React from 'react';
import bannerimg from '../../assets/banner.png'
import frameimg from '../../assets/Frame.png'
import { Play } from 'lucide-react';

const Banner = () => {
    return (
       <div className='w-10/12 flex justify-center items-center gap-4 mx-auto my-28'>
            <div className='space-y-4'>
            <img src={frameimg} alt="Frame" />
            <h1 className='text-3xl font-extrabold'>Supercharge Your <br /> Digital Workflow</h1>
            <p className='text-gray-500'>Access premium AI tools, design assets, templates, and productivity <br /> software—all in one place. Start creating faster today. <br />Explore Products</p>
            <div className='grid grid-cols-1 md:grid-cols-2 justify-start gap-2'>
                <button className='btn btn-primary rounded-4xl'>Explore Products</button>
                <button className='btn btn-outline rounded-4xl flex items-center gap-2'> <Play /> Watch Demo</button>
            </div>
            </div>
            <div>
                <img className='h-[370px]' src={bannerimg} alt="Banner" />
            </div>
        </div>
    );
};

export default Banner; 