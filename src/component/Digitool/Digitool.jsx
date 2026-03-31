import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { toast } from 'react-toastify';



 const Digitool = ({tools,carts, setCarts}) => {
    const [subscribed, setSubscribed] =useState(false)
    const handleSubscribe = ()=> {
        setSubscribed(true)
          const isFound = carts.find(item => item.id === tools.id)
              if(isFound){
                toast.error('item already in cart!')
                return;
              }
        setCarts([...carts, tools])
        toast.success("Item added to cart!")
    }
    return (
        <div className="card bg-base-100 shadow-sm space-y-2 my-5">     
  <div className="card-body shadow-2xl  border-gray-300 rounded-2xl">
    <div className='flex justify-between items-center '>
   <div><img src={tools.icon} alt="" /></div>
   <div className='bg-emerald-300 rounded-4xl p-2'>{tools.tagType}</div>
    </div>
    <div className="">
      <h2 className="text-2xl font-bold">{tools.name}</h2>
      <p className='text-gray-500'>{tools.description}</p>
    </div>
      <div className='flex gap-2 items-center' >
        <h3 className='text-2xl font-bold'>${tools.price}</h3>
     <p className='text-gray-500'>/{tools.period}</p>
      </div>
      {
        tools.features.map(feature => <div key={feature} className="flex items-center gap-2 text-gray-500">
          <Check />
          <p>{feature}</p>
        </div>)
      }
    <div className="mt-6">
      <button onClick={handleSubscribe} className="btn btn-primary w-full rounded-3xl">
        {subscribed ? 'added to cart' : 'Buy Now'}
      </button>
    </div>
  </div>
</div>
    );
};

export default Digitool;