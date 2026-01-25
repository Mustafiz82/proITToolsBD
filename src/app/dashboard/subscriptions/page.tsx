import React from 'react';
import Link from 'next/link';
import { products } from '@/Data/products';

// Mock interface for the subscription data
interface UserSubscription {
  id: string;
  productId: string;
  purchaseDate: string;
  expirationDate: string;
  price: number;
  status: 'active' | 'expired';
}

const SubscriptionsPage = () => {
  // Mock Data - In a real app, this comes from your database/API
  const userSubscriptions: UserSubscription[] = [
    {
      id: 'sub_1',
      productId: '1', // ChatGPT Plus
      purchaseDate: '2023-10-01',
      expirationDate: '2023-11-01',
      price: 5.90,
      status: 'active',
    },
  ];

  const getProductDetails = (id: string) => products.find((p) => p.id === id);

  // 1. EMPTY STATE
  if (userSubscriptions.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
        <div className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800 backdrop-blur-sm">
          <div className="text-5xl mb-4">🛍️</div>
          <h2 className="text-xl font-semibold text-white mb-2">No active subscriptions</h2>
          <p className="text-zinc-400 mb-6 max-w-xs">
            You haven't subscribed to any tool yet. Start boosting your productivity today!
          </p>
          <Link 
            href="/#featured-tools"
            className="px-6 py-3 bg-linear-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 text-white rounded-xl font-medium transition-all shadow-lg shadow-purple-500/20"
          >
            Browse Tools
          </Link>
        </div>
      </div>
    );
  }

  // 2. TABLE VIEW
  return (
    <div className="">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-3 text-white">My Subscriptions</h1>
        <p className="text-zinc-400 text-sm">Manage your active tools and billing</p>
      </div>

      <div className="overflow-x-auto rounded-xl border border-zinc-800 bg-zinc-900/30 backdrop-blur-md">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-white/20 text-zinc-400 text-xs uppercase tracking-wider">
              <th className="px-6 py-4 font-medium">Tool Name</th>
              <th className="px-6 py-4 font-medium">Purchase Date</th>
              <th className="px-6 py-4 font-medium">Expiration Date</th>
              <th className="px-6 py-4 font-medium">Price</th>
              <th className="px-6 py-4 font-medium">Status</th>
              <th className="px-6 py-4 font-medium text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-800/50">
            {userSubscriptions.map((sub) => {
              const product = getProductDetails(sub.productId);
              const isNearExpiry = new Date(sub.expirationDate).getTime() - new Date().getTime() < 259200000; // 3 days

              return (
                <tr key={sub.id} className="hover:bg-zinc-800/30 transition-colors group">
                  {/* Tool Name with Logo */}
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg overflow-hidden border border-zinc-700 bg-zinc-800">
                         <img src={product?.logo} alt={product?.name} className="w-full h-full object-cover" />
                      </div>
                      <span className="font-semibold text-zinc-100">{product?.name}</span>
                    </div>
                  </td>

                  <td className="px-6 py-4 text-zinc-300 text-sm">{sub.purchaseDate}</td>
                  
                  <td className="px-6 py-4">
                    <span className={`text-sm ${isNearExpiry ? 'text-orange-400 font-medium' : 'text-zinc-300'}`}>
                      {sub.expirationDate}
                    </span>
                  </td>

                  <td className="px-6 py-4 text-zinc-100 font-medium">
                    ${sub.price.toFixed(2)}
                  </td>

                  {/* Status Badge */}
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide
                      ${sub.status === 'active' 
                        ? 'bg-green-500/10 text-green-400 border border-green-500/20 shadow-[0_0_10px_rgba(34,197,94,0.1)]' 
                        : 'bg-zinc-800 text-zinc-500 border border-zinc-700'
                      }`}>
                      {sub.status}
                    </span>
                  </td>

                  {/* Renew Button */}
                  <td className="px-6 py-4 text-right">
                    <button className="px-4 py-2 bg-linear-to-r from-purple-600 to-violet-600 text-white text-xs font-bold rounded-lg opacity-90 hover:opacity-100 transition-all transform hover:scale-105">
                      RENEW
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SubscriptionsPage;