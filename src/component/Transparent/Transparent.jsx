import { Check } from 'lucide-react';
import React from 'react';

const Transparent = () => {
    return (
        <div className=' space-y-6 my-28'>
            <div className='text-center'>
              <h2 className='text-3xl font-extrabold'>Simple, Transparent Pricing</h2>
            <p className='text-gray-500 '>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>
            
        <div className=' w-10/12 mx-auto grid gap-3 grid-cols-3'>
            
            <div className="card bg-base-100 shadow-sm">
  <div className="card-body shadow-2xl  border-gray-300 rounded-2xl">
    <div className="">
      <h2 className="text-2xl font-bold">Starter</h2>
      <p className='text-gray-500'>Perfect for getting started</p>
    </div>
      <p className='text-xl font-bold'>$0/ <span className='text-gray-500'>month</span></p>
      <div >
        <p className='flex items-center gap-2'><Check /> Access to 10 free tools</p>
        <p className='flex items-center gap-2'><Check /> Basic templates</p>
        <p className='flex items-center gap-2'><Check /> Community support</p>
        <p className='flex items-center gap-2'><Check /> 1 project per month</p>
      </div>
    <div className="mt-6">
      <button className="btn btn-primary w-full rounded-3xl">Get Started Free</button>
    </div>
  </div>
</div>
            <div className="card bg-[#4F39F6] shadow-sm">
  <div className="card-body shadow-2xl  border-gray-300 rounded-2xl">
    <div className="">
      <h2 className="text-2xl font-bold text-white">Pro</h2>
      <p className='text-white'>Best for professionals</p>
    </div>
      <p className='text-xl font-bold text-white'>$29/ <span className='text-gray-500'>month</span></p>
      <div >
        <p className='flex items-center gap-2 text-white'><Check /> Access to all premium tools</p>
        <p className='flex items-center gap-2 text-white'><Check /> Unlimited templates</p>
        <p className='flex items-center gap-2 text-white'><Check /> Priority support</p>
        <p className='flex items-center gap-2 text-white'><Check /> Unlimited projects</p>
        <p className='flex items-center gap-2 text-white'><Check /> Cloud sync</p>
        <p className='flex items-center gap-2 text-white'><Check />Advanced analytics</p>
      </div>
    <div className="mt-6">
      <button className="btn btn-outline bg-white text-blue-400 w-full rounded-3xl">Start Pro Trial</button>
    </div>
  </div>
</div>
            <div className="card bg-base-100 shadow-sm">
  <div className="card-body shadow-2xl  border-gray-300 rounded-2xl">
    <div className="">
      <h2 className="text-2xl font-bold">Enterprise</h2>
      <p className='text-gray-500'>For teams and businesses</p>
    </div>
      <p className='text-xl font-bold'>$99/ <span className='text-gray-500'>month</span></p>
      <div >
        <p className='flex items-center gap-2'><Check />Everything in Pro</p>
        <p className='flex items-center gap-2'><Check /> Team collaboration</p>
        <p className='flex items-center gap-2'><Check /> Custom integrations</p>
        <p className='flex items-center gap-2'><Check /> Dedicated support</p>
        <p className='flex items-center gap-2'><Check /> SLA guarantee</p>
        <p className='flex items-center gap-2'><Check /> Custom branding</p>
      </div>
    <div className="mt-6">
      <button className="btn btn-primary w-full rounded-3xl">Contact Sales</button>
    </div>
  </div>
</div>
        </div>
        </div>
    );
};

export default Transparent;