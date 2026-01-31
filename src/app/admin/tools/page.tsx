"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Plus,
  Search,
  Edit3,
  Trash2,
  Eye,
  MoreHorizontal,
  ArrowUpDown,
  Filter,
} from "lucide-react";
import ProductCard from "@/components/Home/ProductCard";
import ProductListCard from "@/components/Admin/products/ProductListCard";

// --- MOCK DATA (Matches your Schema) ---
const MOCK_PRODUCTS = [
  {
    _id: "1",
    name: "ChatGPT Plus",
    slug: "chatgpt-plus",
    price: 4.99,
    originalPrice: 20.0,
    badge: "Best Seller",
    upcoming: false,
    brandColor: "#10a37f", // Green
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
    createdAt: "2024-02-10",
  },
  {
    _id: "2",
    name: "Canva Pro",
    slug: "canva-pro",
    price: 2.99,
    originalPrice: 12.0,
    badge: "Design",
    upcoming: false,
    brandColor: "#00c4cc", // Cyan
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Canva_logo_2021.svg",
    createdAt: "2024-02-12",
  },
  {
    _id: "3",
    name: "Claude 3 Opus",
    slug: "claude-3",
    price: 0,
    originalPrice: 0,
    badge: "Waitlist",
    upcoming: true,
    brandColor: "#d97757", // Orange
    logo: "", // No logo test
    createdAt: "2024-02-14",
  },
];

export default function page() {  
  const [searchTerm, setSearchTerm] = useState("");

  // Simple Filter Logic
  const filteredProducts = MOCK_PRODUCTS.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    // MAIN WRAPPER: tuned dark-purple slate (no dead black)
    <div className="min-h-[calc(100vh-50px)] text-white p-6 md:p-8 font-sans relative selection:bg-violet-500/30 bg-[#0B0A12]">
      {/* --- AMBIENT GLOW (Background) --- */}
      <div className="fixed top-0 left-1/4 w-[1000px] h-[500px] bg-violet-900/15 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="fixed bottom-0 right-0 w-[900px] h-[520px] bg-fuchsia-900/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* --- PAGE HEADER --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-2xl font-bold text-white">Products</h1>
            <p className="text-gray-400 text-sm mt-1">
              Manage your tools, pricing, and availability.
            </p>
          </div>

          {/* ACTION BUTTON -> Redirects to Add Page */}
         <Link href="/admin/tools/add">
            <button className="bg-linear-to-r from-violet-600 to-fuchsia-700 hover:from-violet-500 hover:to-fuchsia-500 text-white shadow-[0_0_30px_rgba(124,58,237,0.30)] px-5 py-2.5 rounded-xl font-medium flex items-center gap-2 transition-all active:scale-95 text-sm border border-white/10">
              <Plus size={18} />
              Add Product
            </button>
          </Link>
        </div>

        {/* --- FILTERS & SEARCH BAR --- */}
        <div className="flex flex-col md:flex-row justify-between gap-4 mb-6 bg-[#18132A]/70 backdrop-blur-md border border-[#2B2550]/50 p-4 rounded-xl shadow-lg">
          {/* Search Input */}
          <div className="relative w-full md:w-96">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-white/35"
              size={18}
            />
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-[#141026] border border-[#2B2550]/60 rounded-lg pl-10 pr-4 py-2.5 text-sm text-white placeholder-white/35 focus:outline-none focus:ring-1 focus:ring-violet-500/70 focus:border-violet-500/50 transition-all shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
            />
          </div>

          {/* Filter Buttons (Visual Only) */}
          <div className="flex gap-2">
            <button className="flex items-center gap-2 px-4 py-2 bg-[#141026] border border-[#2B2550]/60 rounded-lg text-xs font-medium text-white/70 hover:text-white hover:border-[#3A3470] transition-all">
              <Filter size={14} /> Filter
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-[#141026] border border-[#2B2550]/60 rounded-lg text-xs font-medium text-white/70 hover:text-white hover:border-[#3A3470] transition-all">
              <ArrowUpDown size={14} /> Sort
            </button>
          </div>
        </div>

        {/* --- DATA TABLE --- */}
        <div className="bg-[#18132A]/65 backdrop-blur-2xl border border-[#2B2550]/50 rounded-2xl overflow-hidden shadow-xl">
          <div className="overflow-x-auto">
               <table className="w-full text-left border-collapse">
              {/* Table Header */}
              <thead>
                <tr className="border-b border-[#3A3470]/45 text-xs uppercase tracking-wider text-white/60 bg-gradient-to-r from-[#241B45]/85 via-[#1D163A]/80 to-[#241B45]/85">
                  <th className="px-6 py-4 font-medium">Product Info</th>
                  <th className="px-6 py-4 font-medium">Pricing</th>
                  <th className="px-6 py-4 font-medium">Status</th>
                  <th className="px-6 py-4 font-medium">Date</th>
                  <th className="px-6 py-4 font-medium text-right">
                    Actions
                  </th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="divide-y divide-[#3A3470]/25">
                {filteredProducts.map((product, idx) => (
                <ProductListCard idx={idx} product={product}/>
                ))}

                {/* Empty State */}
                {filteredProducts.length === 0 && (
                  <tr>
                    <td colSpan={5} className="py-12 text-center text-white/45">
                      No products found.
                      <button
                        onClick={() => setSearchTerm("")}
                        className="text-violet-300 hover:underline ml-1"
                      >
                        Clear search
                      </button>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>    
          </div>

          {/* Table Footer / Pagination */}
          <div className="border-t border-[#2B2550]/45 bg-[#1D1836]/50 px-6 py-4 flex justify-between items-center">
            <span className="text-xs text-white/40">
              Showing {filteredProducts.length} of {MOCK_PRODUCTS.length} products
            </span>
            <div className="flex gap-2">
              <button
                className="px-3 py-1 text-xs text-white/55 bg-[#141026] border border-[#2B2550]/60 rounded hover:text-white hover:border-[#3A3470] disabled:opacity-50"
                disabled
              >
                Prev
              </button>
              <button className="px-3 py-1 text-xs text-white/55 bg-[#141026] border border-[#2B2550]/60 rounded hover:text-white hover:border-[#3A3470]">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
