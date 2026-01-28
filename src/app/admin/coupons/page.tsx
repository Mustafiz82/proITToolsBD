"use client";

import React, { useState } from "react";
import {
  Search,
  Plus,
  Copy,
  Check,
  Ticket,
  Clock,
  Sparkles,
  MoreHorizontal,
} from "lucide-react";

// Mock Data for the UI
const COUPONS = [
  {
    id: 1,
    code: "PROIT-LAUNCH",
    discount: "50% OFF",
    desc: "Launch special for all premium tools",
    expiry: "2 days left",
    color: "from-purple-500 to-indigo-500",
    bgGlow: "bg-purple-500/10",
    status: "Active",
  },
  {
    id: 2,
    code: "GPT-PLUS-25",
    discount: "$25 OFF",
    desc: "Flat discount on ChatGPT subscriptions",
    expiry: "Expires Dec 31",
    color: "from-emerald-400 to-teal-500",
    bgGlow: "bg-emerald-500/10",
    status: "Active",
  },
  {
    id: 3,
    code: "CANVA-PRO",
    discount: "FREE TRIAL",
    desc: "1 Month access to Canva Pro features",
    expiry: "Unlimited",
    color: "from-blue-400 to-cyan-400",
    bgGlow: "bg-blue-500/10",
    status: "Active",
  },
  {
    id: 4,
    code: "NETFLIX-10",
    discount: "10% OFF",
    desc: "Recurring discount for annual plans",
    expiry: "Expired",
    color: "from-gray-500 to-gray-600",
    bgGlow: "bg-gray-500/10",
    status: "Expired",
  },
];

export default function CouponsContent() {
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const handleCopy = (id: number, code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="w-full h-full p-6 flex flex-col gap-8">
      {/* --- Header Section --- */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
            <Ticket className="text-purple-400" size={24} />
            Active Coupons
          </h2>
          <p className="text-gray-400 text-sm mt-1">
            Manage discounts and promo codes for your customers.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {/* Search Bar */}
          <div className="relative group">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-purple-400 transition-colors"
              size={16}
            />
            <input
              type="text"
              placeholder="Search coupons..."
              className="bg-[#15151a] border border-white/10 text-white text-sm rounded-xl pl-10 pr-4 py-2.5 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all w-48 md:w-64"
            />
          </div>

          {/* Create Button */}
          <button className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-sm font-medium px-4 py-2.5 rounded-xl shadow-lg shadow-purple-900/20 transition-all active:scale-95">
            <Plus size={18} />
            <span>Create New</span>
          </button>
        </div>
      </div>

      {/* --- Stats Row (Optional, adds depth) --- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          {
            label: "Total Active",
            val: "12",
            icon: Sparkles,
            color: "text-yellow-400",
          },
          {
            label: "Redeemed This Month",
            val: "843",
            icon: Ticket,
            color: "text-purple-400",
          },
          {
            label: "Total Savings",
            val: "$2.4k",
            icon: Check,
            color: "text-emerald-400",
          },
        ].map((stat, i) => (
          <div
            key={i}
            className="bg-white/[0.02] border border-white/5 p-4 rounded-2xl flex items-center gap-4"
          >
            <div className={`p-3 rounded-xl bg-white/5 ${stat.color}`}>
              <stat.icon size={20} />
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase font-semibold tracking-wider">
                {stat.label}
              </p>
              <p className="text-xl font-bold text-white">{stat.val}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-[#131318] border border-white/5 rounded-2xl overflow-hidden shadow-2xl shadow-black/20">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/5 bg-white/[0.01]">
                <th className="py-4 px-6 text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Campaign Details
                </th>
                <th className="py-4 px-6 text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Discount
                </th>
                <th className="py-4 px-6 text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Code
                </th>
                <th className="py-4 px-6 text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Status
                </th>
                <th className="py-4 px-6 text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Usage
                </th>
                <th className="py-4 px-6 text-xs font-medium text-gray-400 uppercase tracking-wider text-right">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {COUPONS.map((coupon) => (
                <tr
                  key={coupon.id}
                  className="group hover:bg-white/[0.02] transition-colors duration-200"
                >
                  {/* Campaign Info */}
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-lg bg-gradient-to-br ${coupon.color} p-[1px]`}
                      >
                        <div className="w-full h-full bg-[#131318] rounded-[7px] flex items-center justify-center">
                          <Ticket size={16} className="text-gray-300" />
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white line-clamp-1">
                          {coupon.desc}
                        </p>
                        <div className="flex items-center gap-1.5 mt-0.5 text-xs text-gray-500">
                          <Clock size={10} />
                          <span>{coupon.expiry}</span>
                        </div>
                      </div>
                    </div>
                  </td>

                  {/* Discount Value */}
                  <td className="py-4 px-6">
                    <span className="text-sm font-bold text-white bg-white/5 px-2 py-1 rounded border border-white/5">
                      {coupon.discount}
                    </span>
                  </td>

                  {/* Copyable Code Pill */}
                  <td className="py-4 px-6">
                    <button
                      onClick={() => handleCopy(coupon.id, coupon.code)}
                      className="group/btn flex items-center gap-2 pl-3 pr-2 py-1.5 rounded-lg border border-dashed border-gray-700 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all cursor-pointer"
                    >
                      <span className="font-mono text-xs font-medium text-gray-300 group-hover/btn:text-purple-300 tracking-wider">
                        {coupon.code}
                      </span>
                      <div className="p-1 rounded bg-white/5 text-gray-500 group-hover/btn:text-white group-hover/btn:bg-purple-500 transition-colors">
                        {copiedId === coupon.id ? (
                          <Check size={10} />
                        ) : (
                          <Copy size={10} />
                        )}
                      </div>
                    </button>
                  </td>

                  {/* Status */}
                  <td className="py-4 px-6">
                    <div
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${
                        coupon.status === "Active"
                          ? "bg-emerald-500/5 text-emerald-400 border-emerald-500/20"
                          : "bg-gray-500/5 text-gray-400 border-gray-500/20"
                      }`}
                    >
                      <div
                        className={`w-1.5 h-1.5 rounded-full ${
                          coupon.status === "Active"
                            ? "bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.5)]"
                            : "bg-gray-500"
                        }`}
                      />
                      {coupon.status}
                    </div>
                  </td>

                  {/* Usage Stats */}
                  <td className="py-4 px-6">
                    <div className="flex flex-col gap-1">
                      <span className="text-sm text-gray-300">
                        142 <span className="text-gray-600 text-xs">/ 500</span>
                      </span>
                      <div className="w-24 h-1 bg-white/5 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-linear-to-r ${coupon.color} w-[35%] rounded-full`}
                        />
                      </div>
                    </div>
                  </td>

                  {/* Actions */}
                  <td className="py-4 px-6 text-right">
                    <button className="p-2 text-gray-500 hover:text-white hover:bg-white/5 rounded-lg transition-all">
                      <MoreHorizontal size={18} />
                    </button>
                  </td>
                </tr>
              ))}

              {/* Empty/Add Row */}
              <tr className="border-t border-dashed border-white/5">
                <td colSpan={6} className="p-2">
                  <button className="w-full py-3 flex items-center justify-center gap-2 text-sm text-gray-500 hover:text-purple-400 hover:bg-white/[0.01] rounded-lg border border-transparent hover:border-white/5 transition-all">
                    <Plus size={16} />
                    <span>Add New Coupon</span>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
