'use client';

import React, { useState, useMemo } from 'react';
import { Search, Filter, ChevronDown, Download, MoreHorizontal, Eye } from 'lucide-react';

// --- MOCK DATA ---
const INITIAL_ORDERS = [
  {
    id: 'ORD-7829',
    createdAt: '2024-01-20',
    email: 'user@example.com',
    product: 'Pro Plan (Yearly)',
    duration: '1 Year',
    coupon: 'WELCOME20',
    amount: 120.00,
    transactionId: 'txn_1029384',
    status: 'Paid',
  },
  {
    id: 'ORD-7830',
    createdAt: '2024-01-21',
    email: 'john.doe@test.com',
    product: 'Basic Plan',
    duration: '1 Month',
    coupon: '-',
    amount: 15.00,
    transactionId: 'txn_9988776',
    status: 'Failed',
  },
  {
    id: 'ORD-7831',
    createdAt: '2024-01-22',
    email: 'sarah@design.io',
    product: 'Enterprise Bundle',
    duration: 'Lifetime',
    coupon: 'BLACKFRIDAY',
    amount: 299.00,
    transactionId: 'txn_5566443',
    status: 'Refunded',
  },
  {
    id: 'ORD-7832',
    createdAt: '2024-01-23',
    email: 'dev@studio.net',
    product: 'Pro Plan (Monthly)',
    duration: '1 Month',
    coupon: '-',
    amount: 25.00,
    transactionId: 'txn_1122334',
    status: 'Paid',
  },
  {
    id: 'ORD-7833',
    createdAt: '2024-01-24',
    email: 'mike@agency.com',
    product: 'Add-on Pack',
    duration: 'N/A',
    coupon: 'AGENCY10',
    amount: 45.00,
    transactionId: 'txn_4433221',
    status: 'Paid',
  },
];

export default function page() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  // --- FILTER LOGIC ---
  const filteredOrders = useMemo(() => {
    return INITIAL_ORDERS.filter((order) => {
      const matchesSearch = 
        order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.transactionId.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesStatus = statusFilter === 'All' || order.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [searchTerm, statusFilter]);

  // --- STATUS BADGE COMPONENT ---
  const StatusBadge = ({ status }: { status: string }) => {
    const styles = {
      Paid: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
      Refunded: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
      Failed: 'bg-red-500/10 text-red-400 border-red-500/20',
    };

    const currentStyle = styles[status as keyof typeof styles] || 'bg-gray-500/10 text-gray-400';

    return (
      <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium border ${currentStyle}`}>
        {status}
      </span>
    );
  };

  return (
    <div className="w-full h-full flex flex-col p-6 text-gray-200">
      
      {/* HEADER SECTION */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white mb-1">Manage Orders</h1>
          <p className="text-sm text-gray-400">View and manage customer transactions</p>
        </div>
        
        {/* ACTION BAR: SEARCH & FILTER */}
        <div className="flex flex-col sm:flex-row gap-3">
          
          {/* SEARCH */}
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-purple-400 transition-colors" />
            <input 
              type="text" 
              placeholder="Search ID, Email..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full sm:w-64 bg-[#1A1A1A] border border-white/10 rounded-xl py-2 pl-10 pr-4 text-sm text-gray-200 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all placeholder:text-gray-600"
            />
          </div>

          {/* DROPDOWN */}
          <div className="relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
              <Filter className="w-4 h-4 text-gray-400" />
            </div>
            <select 
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="appearance-none bg-[#1A1A1A] border border-white/10 rounded-xl py-2 pl-10 pr-10 text-sm text-gray-200 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all cursor-pointer hover:bg-white/5"
            >
              <option value="All">All Status</option>
              <option value="Paid">Paid</option>
              <option value="Refunded">Refunded</option>
              <option value="Failed">Failed</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
          </div>

        </div>
      </div>

      {/* TABLE SECTION */}
      <div className="flex-1 overflow-hidden bg-[#121212]/50 border border-white/5 rounded-2xl flex flex-col shadow-xl shadow-black/20">
        <div className="overflow-x-auto custom-scrollbar">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/5 bg-white/[0.02]">
                <th className="p-4 text-xs font-medium text-gray-400 uppercase tracking-wider">Order ID</th>
                <th className="p-4 text-xs font-medium text-gray-400 uppercase tracking-wider">Created At</th>
                <th className="p-4 text-xs font-medium text-gray-400 uppercase tracking-wider">User Email</th>
                <th className="p-4 text-xs font-medium text-gray-400 uppercase tracking-wider">Product</th>
                <th className="p-4 text-xs font-medium text-gray-400 uppercase tracking-wider">Duration</th>
                <th className="p-4 text-xs font-medium text-gray-400 uppercase tracking-wider">Coupon</th>
                <th className="p-4 text-xs font-medium text-gray-400 uppercase tracking-wider text-right">Amount</th>
                <th className="p-4 text-xs font-medium text-gray-400 uppercase tracking-wider">Status</th>
                <th className="p-4 text-xs font-medium text-gray-400 uppercase tracking-wider text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {filteredOrders.length > 0 ? (
                filteredOrders.map((order) => (
                  <tr key={order.id} className="group hover:bg-white/[0.03] transition-colors">
                    <td className="p-4 text-sm font-medium text-white">{order.id}</td>
                    <td className="p-4 text-sm text-gray-400 whitespace-nowrap">{order.createdAt}</td>
                    <td className="p-4 text-sm text-gray-300">
                      <div className="flex flex-col">
                        <span>{order.email}</span>
                        <span className="text-[10px] text-gray-300 font-mono mt-0.5">{order.transactionId}</span>
                      </div>
                    </td>
                    <td className="p-4 text-sm text-gray-300">{order.product}</td>
                    <td className="p-4 text-sm text-gray-400">{order.duration}</td>
                    <td className="p-4 text-sm">
                      {order.coupon !== '-' ? (
                        <span className="px-2 py-0.5 rounded bg-purple-500/10 text-purple-400 text-xs border border-purple-500/20 font-mono">
                          {order.coupon}
                        </span>
                      ) : (
                        <span className="text-gray-600">-</span>
                      )}
                    </td>
                    <td className="p-4 text-sm text-white font-medium text-right">${order.amount.toFixed(2)}</td>
                    <td className="p-4">
                      <StatusBadge status={order.status} />
                    </td>
                    <td className="p-4 text-center">
                      <button className="p-2 hover:bg-white/10 rounded-lg text-gray-500 hover:text-white transition-all">
                        <MoreHorizontal className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={9} className="p-12 text-center text-gray-500">
                    <div className="flex flex-col items-center gap-2">
                      <Search className="w-8 h-8 opacity-20" />
                      <p>No orders found matching your criteria.</p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        
        {/* PAGINATION / FOOTER */}
        <div className="p-4 border-t border-white/5 flex items-center justify-between text-xs text-gray-500 bg-white/[0.01]">
           <span>Showing {filteredOrders.length} results</span>
           <div className="flex gap-2">
             <button disabled className="px-3 py-1 rounded bg-white/5 disabled:opacity-50 cursor-not-allowed">Prev</button>
             <button className="px-3 py-1 rounded bg-white/5 hover:bg-white/10 text-gray-300">Next</button>
           </div>
        </div>
      </div>
    </div>
  );
}