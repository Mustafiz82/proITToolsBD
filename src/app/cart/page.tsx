"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import CartItem from "@/components/Cart/CartItem";
import { products } from "@/Data/products";
import CartSummary from "@/components/Cart/CartSummary";

type Duration = 1 | 3 | 6 | 12;

export default function CartPage() {


  const [durations, setDurations] = useState<Record<string, Duration>>(() => {
    const init: Record<string, Duration> = {};
    for (const p of products) init[p.id] = 1; // default 1 month
    return init;
  });

  const handleChangeDuration = (id: string, dur: Duration) => {
    setDurations((prev) => ({ ...prev, [id]: dur }));
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-purple-500/30">


        {/* <div className="fixed top-0 left-0  w-125 h-125 bg-blue-900/30 rounded-full blur-[120px] pointer-events-none" /> */}

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        {/* Breadcrumb / Header */}
        <div className="mt-20 mb-14">
          <Link
            href="/"
            className="inline-flex items-center text-sm text-gray-500 hover:text-white mb-4 transition-colors"
          >
            <ArrowLeft size={16} className="mr-2" /> Continue Shopping
          </Link>
          <h1 className="text-4xl font-extrabold tracking-tight text-white mb-2">
            Your Shopping Cart
          </h1>
          <p className="text-gray-400 pt-2">
            {products.length} items in your cart
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
          {/* --- LEFT COLUMN: ITEMS --- */}
          <div className="lg:col-span-2 space-y-5">
            {products.length === 0 ? (
              <div className="text-center py-24 bg-[#0F0F12] border border-white/10 rounded-3xl">
                <p className="text-gray-400 text-lg">Your cart is empty.</p>
                <Link
                  href="/"
                  className="mt-4 inline-block bg-white/10 hover:bg-white/20 px-6 py-2 rounded-xl transition-all"
                >
                  Browse Products
                </Link>
              </div>
            ) : (
              products.map((item) => <CartItem item={item} />)
            )}
          </div>

          {/* --- RIGHT COLUMN: SUMMARY --- */}
          <div className="lg:col-span-1">
            <CartSummary />
          </div>
        </div>
      </main>
    </div>
  );
}
