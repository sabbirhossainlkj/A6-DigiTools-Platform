
import { Suspense } from 'react'
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

  return (
    <>
   <Navbar></Navbar>
   <Banner></Banner>
   <State></State>
   {/* daisi tab */}
   {/* name of each tab group should be unique */}
<div className="tabs border tabs-box justify-center w-10/12 mx-auto bg-transparent">
  <input type="radio" name="my_tabs_1" className="tab rounded-full bg-purple-500 text-white w-28 font-bold" aria-label="Products " defaultChecked />
  <input type="radio" name="my_tabs_1" className="tab rounded-full btn btn-outline w-24 text-black" aria-label="Cart (2)"  />
</div>
   <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
  <Digitools digitoolsPromise={digitoolsPromise}></Digitools>
   </Suspense>
   <Cart></Cart>
   
   <Steps></Steps>
   <Transparent></Transparent>
    </>
  )
}

export default App
