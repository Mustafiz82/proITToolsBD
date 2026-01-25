import { products } from '@/Data/products';
import React from 'react';
import ProductCard from './ProductCard';



const Featured = () => {
    return (
        <div id='featured-tools' className='max-w-7xl mx-auto my-20 mt-30'>
            <h2 className='text-4xl font-semibold text-center'>Featured Product</h2>

            <div className="grid grid-cols-4 my-20 gap-5">
            
            {
                products.map((item ,idx) => <ProductCard product={item} key={idx}/>)
            }
            </div>
            
        </div>
    );
};

export default Featured;