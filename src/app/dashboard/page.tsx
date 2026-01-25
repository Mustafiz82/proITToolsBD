"use client";
import Sidebar from "@/components/Dashboard/Sidebar";
import { products } from "@/Data/products";
import useAuth from "@/hook/useAuth";
import { ArrowBigDown, Icon, Plus, Rocket } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  const { user } = useAuth();
  return (
    <div className="">
      <h2 className="text-3xl md:text-4xl font-bold text-white">
        Welcome back,{" "}
        <span className="bg-linear-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          {user?.displayName || ""}
        </span>
      </h2>

      <div className="grid grid-cols-4 gap-5 mt-5">
        {products.slice(0,3).map((item) => (
  
            <div className="group  relative flex flex-col overflow-hidden rounded-2xl border border-white/5 bg-[#181825] transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/30 hover:shadow-[0_0_30px_-10px_rgba(168,85,247,0.3)]">
              {/* Card Header / Image Area */}
              {/* Added a subtle gradient behind the image to make it pop */}
              <div className="relative aspect-video w-full overflow-hidden bg-linear-to-b from-white/5 to-transparent p-6 flex items-center justify-center">
                <div className="relative h-24 w-24 rounded-2xl  p-2 shadow-lg shadow-black/50">
                  <Image
                    src={item.logo}
                    alt={item.name}
                    fill
                    className="object-contain rounded-xl"
                  />
                </div>
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors">
                    ChatGPT Plus
                  </h3>
                  <span className="px-2 py-0.5 rounded-full bg-green-500/10 border border-green-500/20 text-xs font-medium text-green-400">
                    Active
                  </span>
                </div>

                <p className="text-xs text-gray-500 mb-6 line-clamp-2">
                  Advanced AI chatbot with GPT-4 capabilities.
                </p>

                {/* Action Button */}
                <button className="mt-auto relative w-full overflow-hidden rounded-xl bg-linear-to-r from-purple-600 to-indigo-600 p-px focus:outline-none focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-slate-900 group/btn">
                  <div className="relative cursor-pointer gap-2 flex h-full w-full items-center justify-center rounded-[11px] bg-[#181825] px-4 py-2.5 transition-all duration-300 group-hover/btn:bg-transparent">
                    🚀{" "}
                    <span className="font-semibold text-white">
                      {" "}
                      Launch Tool{" "}
                    </span>
                  </div>
                </button>
              </div>
            </div>

            
        ))}

        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-white/10 bg-white/5 p-6 hover:bg-white/10 transition cursor-pointer group">
          <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center mb-3 group-hover:scale-110 transition">
            <span className="text-2xl text-white">
              <Plus />
            </span>
          </div>
          <p className="text-sm font-medium text-gray-400">Add Subscription</p>
        </div>
      </div>
    </div>
  );
};

export default page;
