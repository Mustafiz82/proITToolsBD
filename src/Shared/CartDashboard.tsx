import Link from 'next/link';
import React from 'react';
import { FaCartPlus } from 'react-icons/fa';

const CartDashboard = ({handleLogout}:{handleLogout : () => void}) => {
    return (
        <>
            
          <button 
              onClick={handleLogout}
              className="hidden md:block cursor-pointer text-sm font-medium text-gray-300 hover:text-white transition-colors"> Logout</button> 
              <Link href={"/cart"} 
              // onClick={handleLogout}
              className="flex  gap-2 items-center cursor-pointer text-sm font-medium text-gray-300 hover:text-white transition-colors"> 
               <FaCartPlus/> 
              Cart
              </Link>


              <button className="bg-primary  hover:bg-violet-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all shadow-[0_0_15px_rgba(139,92,246,0.5)] cursor-pointer active:scale-95">
                Dashboard
              </button>
        
        </>
    );
};

export default CartDashboard;