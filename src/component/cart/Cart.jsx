import { Trash } from 'lucide-react';
import React from 'react';
import { toast } from 'react-toastify';

const Cart = ({carts,setCarts}) => {
    const totalPrice = carts.reduce((sum, item)=> sum + item.price, 0);
    const handlePayment = ( ) => {
        setCarts([])
        toast.success('success Proceed to Checkout!')
    }
      const handleDelete = (item) => {
        const filteredArry = carts.filter(c => c.id !== item.id)
        setCarts(filteredArry)
        toast.success('Item deleted from cart!')
      }

    return (
        <div className=' w-10/12 mx-auto rounded-2xl text-4xl p-4  space-y-4'>
            <h2 className='font-bold text-2xl'>Your Cart ({carts.length})</h2>
            {
                carts.length === 0 ? <p className='text-center text-3xl text-gray-400 p-5'>cart is empty</p> :
                <>
                {
                carts.map(item => <div key={item.id} className='border border-gray-300 shadow-2xl flex justify-between items-center p-4 rounded-3xl  '>
                <div className='flex items-center gap-2'>
                     <img src={item.icon} alt={item.name} />
                     <div>
                        <h3 className='text-xl font-bold'>{item.name}</h3>
                        <p className='text-gray-500 text-lg'>${item.price}</p>
                     </div>
                </div>
                <button onClick={()=>handleDelete(item)}><Trash /></button>
            </div> )
            }

            <div className='flex justify-between items-center text-white font-bold p-4 rounded-2xl bg-black'>
                <h3>total</h3>
                <p>$ {totalPrice}</p>
            </div>
            <button onClick={handlePayment} className='btn w-full rounded-3xl font-bold bg-indigo-400 text-white'>Proceed to Checkout</button>
                </>
            }

            
            
        </div>
    );
};

export default Cart;