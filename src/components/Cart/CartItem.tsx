
import { Product } from "@/Data/products";
import { Trash2 } from "lucide-react";
import React, { SetStateAction, useEffect, useState } from "react";

type Duration = 1 | 3 | 6 | 12;

interface CartItemProps {
  item: Product;
}

const CartItem = ({ item  }: CartItemProps) => {

  const [selecteDuration, setSelectedDuration] = useState<Duration>(1);

  const discountMap: Record<Duration, number> = {
    1: 0,
    3: 10,
    6: 15,
    12: 25,
  };

  const rawPrice = item.price * selecteDuration;
  const discountedPrice = rawPrice - rawPrice * (discountMap[selecteDuration] / 100);






  return (
    <div
      // key={item.cartId}
      className="relative bg-[#0F0F12] border border-white/5 rounded-3xl p-6 transition-all duration-300 hover:border-white/10 hover:shadow-[0_4px_20px_rgba(0,0,0,0.4)] group overflow-hidden"
    >
      <div
        className="absolute top-0 right-0 w-64 h-64 bg-current opacity-[0.03] blur-3xl rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2"
        style={{ color: item.brandColor }}
      />

      <div className="relative z-10 flex flex-col md:flex-row gap-6">
        <div className="flex items-start gap-5 flex-1">
          <div className="relative shrink-0 w-20 h-20 bg-white/5 rounded-2xl p-2 border border-white/10">
            <div className="w-full h-full relative rounded-xl overflow-hidden bg-black/50 flex items-center justify-center">
              <img
                src={item.logo}
                alt={item.name}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-white">{item.name}</h3>
              {item.badge && (
                <span className="bg-purple-500/20 text-purple-300 text-[10px] uppercase font-bold px-2 py-0.5 rounded-full border border-purple-500/20">
                  {item.badge}
                </span>
              )}
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              {item.shortDescription}
            </p>

            <div className="pt-4 flex flex-wrap gap-2">
              {([1, 3, 6, 12] as Duration[]).map((dur) => (
                <button
                  key={dur}
                  onClick={() => setSelectedDuration(dur)}
                  className={`relative px-4 py-1.5 rounded-lg text-xs font-semibold transition-all border
                                  ${
                                    selecteDuration === dur
                                      ? "bg-white text-black border-white shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                                      : "bg-transparent text-gray-500 border-white/10 hover:border-white/30 hover:text-gray-300"
                                  }
                                `}
                >
                  {dur} Mo
                  {dur === 12 && selecteDuration !== 12 && (
                    <span className="absolute -top-2 -right-1 flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-pink-500"></span>
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex md:flex-col items-center md:items-end justify-between md:justify-center gap-1 min-w-25]">
          {discountMap[selecteDuration] !== 0 && (
            <div className="bg-linear-to-r from-pink-500 to-rose-500 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-lg mb-1">
              SAVE {discountMap[selecteDuration]}
            </div>
          )}

          <div className="text-right">
            <div className="text-3xl font-bold text-white tracking-tight">
              ${discountedPrice.toFixed(2)}
            </div>
            <div className="text-xs text-gray-500 line-through">
              ${rawPrice.toFixed(2)}
            </div>
          </div>

          <button className="md:mt-4 text-xs text-red-400/60 hover:text-red-400 flex items-center gap-1 hover:underline transition-all">
            <Trash2 size={12} /> Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
