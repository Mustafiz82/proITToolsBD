"use client";
import { Camera, ShieldCheck } from "lucide-react";
import React, { useRef, useState } from "react";

const ProfilePic = () => {
  const [avatarUrl, setAvatarUrl] = useState("");
  const fileRef = useRef<HTMLInputElement | null>(null);

  const onPickAvatar = () => fileRef.current?.click();

  const onAvatarChange = ( e: React.ChangeEvent<HTMLInputElement>
) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setAvatarUrl(url);
  };

  const removeAvatar = () => {
    setAvatarUrl("");
    if (fileRef.current) fileRef.current.value = "";
  };

  return (
    <div className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-6 backdrop-blur-md w-full h-full flex flex-col items-center text-center">
      {/* hidden file input */}
      <input
        ref={fileRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={onAvatarChange}
      />

      {/* avatar with overlay upload button */}
      <div className="relative group mb-3">
        <div className="w-20 h-20 rounded-full overflow-hidden shadow-lg shadow-purple-500/20">
          {avatarUrl ? (
            <img
              src={avatarUrl}
              alt="avatar"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-linear-to-br from-purple-500 to-violet-700 flex items-center justify-center text-2xl font-bold text-white">
              JD
            </div>
          )}
        </div>

        {/* verified badge */}
        <div className="absolute -bottom-1 -right-1 bg-green-500 w-5 h-5 rounded-full border-2 border-zinc-900 flex items-center justify-center">
          <ShieldCheck className="w-3 h-3 text-white" />
        </div>

        {/* camera overlay */}
        <button
          type="button"
          onClick={onPickAvatar}
          className="absolute -bottom-2 -left-2 w-9 h-9 rounded-full bg-zinc-950/80 border border-zinc-800 flex items-center justify-center text-zinc-200
                             opacity-0 group-hover:opacity-100 transition-opacity hover:border-purple-500"
          aria-label="Upload photo"
          title="Upload photo"
        >
          <Camera className="w-4 h-4" />
        </button>
      </div>

      <h2 className="text-lg font-bold text-white">Jone Doe</h2>
      <p className="text-zinc-500 text-xs mb-4">jone.doe@email.com</p>

      <div className="w-full grid grid-cols-2 gap-2 pt-4 border-t border-zinc-800/50">
        <div className="text-left">
          <p className="text-[10px] text-zinc-500 uppercase">Joined</p>
          <p className="text-xs text-zinc-300">Jan 2024</p>
        </div>
        <div className="text-right">
          <p className="text-[10px] text-zinc-500 uppercase">Status</p>
          <p className="text-xs text-purple-400 font-medium">Active (2)</p>
        </div>
      </div>

      {/* optional normal buttons (more discoverable) */}
      <div className="w-full mt-5 flex gap-2">
        <button
          type="button"
          onClick={onPickAvatar}
          className="flex-1 px-4 py-2.5 bg-zinc-800 hover:bg-zinc-700 text-white rounded-xl text-sm font-semibold transition-all"
        >
          Upload Photo
        </button>
        <button
          type="button"
          onClick={removeAvatar}
          disabled={!avatarUrl}
          className="px-4 py-2.5 rounded-xl text-sm font-semibold transition-all
                             border border-zinc-800 text-zinc-300 hover:border-zinc-700 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default ProfilePic;
