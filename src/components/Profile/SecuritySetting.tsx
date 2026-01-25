import { User } from "lucide-react";
import React from "react";

const SecuritySetting = () => {
  return (
    <div className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-6 backdrop-blur-md w-full h-full">
      <div className="flex items-center gap-2 mb-6">
        <User className="w-5 h-5 text-purple-500" />
        <h3 className="text-lg font-semibold text-white">
          Personal Information
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-xs font-medium text-zinc-400 uppercase tracking-wider">
            Full Name
          </label>
          <input
            type="text"
            defaultValue="Jone Doe"
            className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-200 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/50 transition-all"
          />
        </div>

        <div className="space-y-2">
          <label className="text-xs font-medium text-zinc-400 uppercase tracking-wider flex justify-between">
            WhatsApp Number
            <span className="text-green-500 text-[10px] flex items-center gap-1 lowercase">
              ● Verified
            </span>
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 text-sm">
              +880
            </span>
            <input
              type="tel"
              placeholder="1XXXXXXXXX"
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl pl-14 pr-4 py-3 text-zinc-200 focus:outline-none focus:border-purple-500 transition-all"
            />
          </div>
        </div>
      </div>

      <div className="mt-6 flex justify-end">
        <button className="px-6 py-2.5 bg-purple-600 hover:bg-purple-500 text-white rounded-xl text-sm font-bold shadow-lg shadow-purple-600/20 transition-all">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default SecuritySetting;
