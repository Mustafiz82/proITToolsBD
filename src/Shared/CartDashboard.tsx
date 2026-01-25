import Link from 'next/link';
import React from 'react';
import { FaCartPlus } from 'react-icons/fa';

const CartDashboard = () => {
    return (
        <>
            
         
              <Link href={"/cart"} 
              // onClick={handleLogout}
              className="flex  gap-2 items-center cursor-pointer text-sm font-medium text-gray-300 hover:text-white transition-colors"> 
               <FaCartPlus/> 
              Cart
              </Link>


              <Link href={"/dashboard"} className="bg-primary  hover:bg-violet-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all shadow-[0_0_15px_rgba(139,92,246,0.5)] cursor-pointer active:scale-95">
                Dashboard
              </Link>
        
        </>
    );
};

export default CartDashboard;