import React, { use } from 'react';
import Digitool from '../Digitool/Digitool';

const Digitools = ({digitoolsPromise,carts, setCarts}) => {
    const digiData = use(digitoolsPromise);
    return (
        <div className='text-3xl font-bold w-10/12 mx-auto mb-28 '>
            <h1>Digitools: {digiData.length}</h1>

            <div className='grid grid-cols-3 gap-3'>
              {
                digiData.map(tools => {
                    return <Digitool key={tools.id} tools={tools} carts={carts} setCarts={setCarts}></Digitool>
                })
            }
            </div>

            
            
        </div>
    );
};

export default Digitools;