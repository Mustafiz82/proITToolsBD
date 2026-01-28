"use client"
import useAuth from "@/hook/useAuth";
import React from "react";

const page = () => {

  const {user} = useAuth()

  return (
    <div>
      <h2 className="text-3xl md:text-4xl font-bold text-white">
        Welcome back,{" "}
        <span className="bg-linear-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          {user?.displayName || ""} (Admin)
        </span>
      </h2>
    </div>
  );
};

export default page;
