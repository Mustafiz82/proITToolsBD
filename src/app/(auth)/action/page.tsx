"use client";
import React, { Suspense } from "react";
import SuspanceWrapper from "@/components/Auth/SuspanceWrapper";

const page = () => {
  

  return (
    <div>
      <Suspense
        fallback={
          <div className="flex flex-col items-center justify-center space-y-4">
            <span className="loading loading-spinner text-purple-500 loading-lg"></span>
            <p className="text-gray-400 text-sm">Verifying link...</p>
          </div>
        }
      >
       <SuspanceWrapper/>
      </Suspense>
    </div>
  );
};

export default page;
