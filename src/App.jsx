
import { Suspense, useState } from 'react'
import './App.css'
import Banner from './component/banner/banner'
import Digitools from './component/digitools/Digitools'
import Navbar from './component/navbar/navbar'
import State from './component/state/state'
import Steps from './component/Steps/Steps'
import Transparent from './component/Transparent/Transparent'
import Cart from './component/cart/cart'

const getDigitools = async() => {
   const res = await fetch("/digitools.json")
   return res.json()
}

function App() {
  const digitoolsPromise = getDigitools();
  const [activeTab, setActiveTab] = useState('Products');
  const [carts, setCarts] = useState([]);
  return (
    <>
   <Navbar></Navbar>
   <Banner></Banner>
   <State></State>
   {/* daisi tab */}
   {/* name of each tab group should be unique */}
   <div className=' w-10/12 mx-auto space-y-4'>
    <div className='text-center space-y-2'>
                <h2 className='text-5xl font-extrabold'>Premium Digital Tools</h2>
                <p className='text-gray-500 text-sm'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
            </div>
<div className="tabs tabs-box justify-center bg-transparent">
  <input type="radio" name="my_tabs_1" className="tab rounded-full bg-purple-500 text-white w-28 font-bold" aria-label="Products " defaultChecked onClick={() => setActiveTab('Products')} />
  <input type="radio" name="my_tabs_1" className="tab rounded-full btn btn-outline w-24 text-black" aria-label={`Cart (${carts.length})`} onClick={() => setActiveTab('Cart')} />
   </div>
   </div>
   <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
   {activeTab === 'Products' && <Digitools digitoolsPromise={digitoolsPromise} carts={carts} setCarts={setCarts}></Digitools>}
   </Suspense>
   {activeTab === 'Cart' && <Cart carts={carts} setCarts={setCarts}></Cart>}
   
   <Steps></Steps>
   <Transparent></Transparent>
    </>
  )
}

export default App
