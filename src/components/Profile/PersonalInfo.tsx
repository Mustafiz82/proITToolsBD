import { Lock } from 'lucide-react';
import React from 'react';

const PersonalInfo = () => {
    return (
       <div className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-6 backdrop-blur-md w-full h-full">
              <div className="flex items-center gap-2 mb-6">
                <Lock className="w-5 h-5 text-purple-500" />
                <h3 className="text-lg font-semibold text-white">
                  Security Settings
                </h3>
              </div>

              <div className="space-y-6">
                <div className="space-y-2 opacity-60">
                  <label className="text-xs font-medium text-zinc-400 uppercase">
                    Email Address (Read-only)
                  </label>
                  <input
                    type="email"
                    disabled
                    value="jone.doe@email.com"
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-500 cursor-not-allowed"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-medium text-zinc-400 uppercase">
                      New Password
                    </label>
                    <input
                      type="password"
                      placeholder="••••••••"
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-200 focus:border-purple-500 outline-none"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-medium text-zinc-400 uppercase">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      placeholder="••••••••"
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-200 focus:border-purple-500 outline-none"
                    />
                  </div>
                </div>

                <button className="text-purple-400 text-sm font-semibold hover:text-purple-300 underline-offset-4 hover:underline transition-all">
                  Update Password
                </button>
              </div>
            </div>
    );
};

export default PersonalInfo;