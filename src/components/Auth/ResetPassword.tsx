import React, { Suspense } from "react";
import ResetPasswordContent from "./ResetPasswordContent";

const ResetPassword = ({oobCode}:{oobCode :(string | null)}) => {
  return (
    <div>
      <div className="min-h-screen bg-[#050505] text-white font-sans flex flex-col relative overflow-hidden selection:bg-purple-500/30">
        {/* BACKGROUND GLOWS */}
        <div className="absolute top-[-10%] left-[-10%] w-125 h-125 bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-125 h-125 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

        {/* MAIN CONTENT WRAPPED IN SUSPENSE */}
        <main className="grow flex w-full  items-center justify-center p-4 relative z-10">
          <Suspense
            fallback={
              <div className="flex flex-col items-center justify-center space-y-4">
                <span className="loading loading-spinner text-purple-500 loading-lg"></span>
                <p className="text-gray-400 text-sm">Verifying link...</p>
              </div>
            }
          >
            <ResetPasswordContent oobCode={oobCode} />
          </Suspense>
        </main>
      </div>
    </div>
  );
};

export default ResetPassword;
