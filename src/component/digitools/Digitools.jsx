import React, { use } from 'react';
import Digitool from '../Digitool/Digitool';

const Digitools = ({digitoolsPromise}) => {
    const digiData = use(digitoolsPromise);
    return (
        <div className='text-3xl border font-bold w-10/12 mx-auto my-24 '>
            <h1>Digitools: {digiData.length}</h1>
            <div className='text-center space-y-2'>
                <h2 className='text-5xl font-extrabold'>Premium Digital Tools</h2>
                <p className='text-gray-500 text-sm'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
            </div>

            <div className='grid grid-cols-3 gap-3'>
              {
                digiData.map(tools => {
                    return <Digitool key={tools.id} tools={tools}></Digitool>
                })
            }
            </div>

            
            
        </div>
    );
};

export default Digitools;