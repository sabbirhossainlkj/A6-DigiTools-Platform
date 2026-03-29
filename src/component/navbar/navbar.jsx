import { ShoppingCart } from 'lucide-react';
import React from 'react';

const Navbar = () => {
    return (
             <div className="navbar bg-base-100 shadow-sm w-10/12 mx-auto">
  <div className="navbar-start">
    <h2 className='text-2xl font-extrabold text-[#9514FA]'>DigiTools</h2>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Products</a></li>
      <li><a>Features</a></li>
      <li><a>Pricing</a></li>
      <li><a>Testimonials</a></li>
      <li><a>FAQ</a></li>
    </ul>
  </div>
  <div className="navbar-end gap-4">
    <ShoppingCart />
    <p>login</p>
    <button className="btn btn-primary rounded-3xl">Get Started</button>
  </div>
</div>
    );
};

export default Navbar;