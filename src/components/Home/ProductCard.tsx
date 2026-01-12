'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/Data/products';


interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group relative flex flex-col rounded-2xl border border-white/10 bg-[#13131f] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-purple-500/50 hover:shadow-[0_10px_40px_-10px_rgba(139,92,246,0.3)]">
      
      {/* Badge */}
      {product.badge && (
        <span className="absolute -right-0 -top-0 rounded-bl-xl rounded-tr-xl bg-linear-to-r from-purple-600 to-pink-600 px-3 py-1 text-xs font-bold text-white shadow-lg">
          {product.badge}
        </span>
      )}

      {/* Header / Logo */}
      <div className="mb-6 flex items-center justify-center">
        <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md transition-all group-hover:bg-white/10">
          {/* Note: In production, configure next.config.js for these image domains */}
          <div className="relative h-12 w-12">
             <Image 
              src={product.logo} 
              alt={product.name} 
              fill
              className={`object-contain rounded-lg`}
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col text-center">
        <h3 className="mb-2 text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
          {product.name}
        </h3>
        <p className="mb-6 line-clamp-2 text-sm text-gray-400">
          {product.shortDescription}
        </p>

        {/* Price */}
        <div className="mt-auto mb-6 flex items-center justify-center gap-3">
          <span className="text-2xl font-bold text-white">${product.price.toFixed(2)}</span>
          <span className="text-sm text-gray-500 line-through decoration-red-500/70">
            ${product.originalPrice.toFixed(2)}
          </span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col gap-3">
        <button 
          onClick={() => console.log('Added to cart:', product.name)}
          className="flex cursor-pointer w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-purple-600 to-indigo-600 py-3 text-sm font-semibold text-white transition-all hover:brightness-110 active:scale-95"
        >
         {
          product.upcoming ? "Upcoming" : <> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
          </svg>
          Add to Cart</>
         }
        </button>
        
        <Link 
       
          href={`/products/${product.slug}`} 
          className={` ${product.upcoming && "invisible"} text-center text-xs font-medium text-gray-500 hover:text-white transition-colors hover:underline`}
        >
          View Full Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;