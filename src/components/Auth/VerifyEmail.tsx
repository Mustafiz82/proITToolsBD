import useAuth from "@/hook/useAuth";
import { sendEmailVerification } from "firebase/auth";
import { LogOut, Mail, ShieldCheck } from "lucide-react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const VerifyEmail = () => {

  const [message, setMessage] = useState(""); 
  const [countdown, setCountdown] = useState(60);
  const [isResending, setIsResending] = useState(false);

  const { user, handleLogout } = useAuth();



  const handleResendEmail = async () => {
    if (!user || countdown > 0) return;

    setIsResending(true);
    setMessage("");

    try {
      await sendEmailVerification(user);

      // Success: Start Timer & Show Message
      setMessage("✅ Verification link sent! Check your inbox and spam");
      setCountdown(60);
    } catch (error: any) {
      console.error(error);

      // Handle Rate Limiting specifically
      if (error.code === "auth/too-many-requests") {
        setMessage("⚠️ Too many attempts. Please wait 60s.");
        setCountdown(60); // Enforce wait time even on error
      } else {
        setMessage("❌ Failed to send email. Try again later.");
      }
    } finally {
      setIsResending(false);
    }
  };

  useEffect(() => {
    if (countdown === 0) return;

    // specific window.setTimeout to avoid NodeJS.Timeout type conflict
    const timerId = window.setTimeout(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timerId);
  }, [countdown]);



  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans flex flex-col relative overflow-hidden selection:bg-purple-500/30">
      {/* BACKGROUND GLOWS */}
      <div className="absolute top-[-10%] left-[-10%] w-125 h-125 bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-125 h-125 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* NAVBAR */}
      <nav className="w-full max-w-7xl mx-auto px-6 py-6 flex justify-between items-center relative z-10">
        <div className="flex items-center gap-2">
          <div className="bg-linear-to-br from-purple-600 to-blue-600 p-1.5 rounded-lg">
            <ShieldCheck size={20} className="text-white" />
          </div>
          <span className="font-bold text-xl tracking-tight">PROITTOOLSBD</span>
        </div>

        {/* Logout Button UI */}
        <button className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2">
          Logout <LogOut size={16} />
        </button>
      </nav>

      {/* MAIN CONTENT AREA */}
      <main className="grow flex items-center justify-center p-4 relative z-10">
        <div className="w-full max-w-md">
          {/* GLASS CARD CONTAINER */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
            {/* Gradient Line at Top */}
            <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-purple-500 via-blue-500 to-purple-500 opacity-50" />

            {/* ANIMATED ICON */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-purple-500 blur-xl opacity-20 animate-pulse"></div>
                <div className="bg-linear-to-br from-purple-500/20 to-blue-500/20 border border-white/10 p-5 rounded-full relative">
                  <Mail className="w-10 h-10 text-purple-400" />
                </div>
                {/* Red Notification Dot */}
                <div className="absolute top-0 right-0 w-4 h-4 bg-red-500 border-2 border-[#050505] rounded-full"></div>
              </div>
            </div>

            {/* TEXT HEADINGS */}
            <div className="text-center space-y-3 mb-8">
              <h1 className="text-3xl font-bold tracking-tight">
                Verify your{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-blue-400">
                  Email
                </span>
              </h1>

              <p className="text-gray-400 text-sm leading-relaxed">
                We've sent a verification link to your Email.
                <br />
                {/* Email Pill */}
                <span className="text-white font-medium bg-white/5 px-3 py-1 rounded border border-white/5 mt-3 inline-block">
                  {user?.email}
                </span>
              </p>
            </div>

            {/* STATUS MESSAGE AREA */}
            {message && (
              <div
                className={`text-center text-sm mb-4 ${
                  message.includes("❌") ? "text-red-400" : "text-green-400"
                }`}
              >
                {message}
              </div>
            )}

            {/* ACTION BUTTONS */}
            <div className="space-y-4">
              <div className="text-center">
                <button
                  onClick={handleResendEmail}
                  disabled={isResending || countdown > 0}
                  className={`
                    text-sm transition-all duration-300
                    ${
                      isResending || countdown > 0
                        ? "text-gray-600 cursor-not-allowed decoration-transparent" // Disabled Look
                        : "text-gray-400 hover:text-white underline decoration-gray-700 underline-offset-4 hover:decoration-white cursor-pointer" // Active Look
                    }
                  `}
                >
                  {isResending
                    ? "Sending email..."
                    : countdown > 0
                    ? `Resend available in ${countdown}s`
                    : "Didn't receive the email? Resend"}
                </button>
              </div>
            </div>

            {/* FOOTER TEXT */}
            <div className="mt-8 text-center">
              <p className="text-xs text-gray-500">
                Need help?{" "}
                <a
                  href="#"
                  className="text-purple-400 hover:text-purple-300 transition-colors"
                >
                  Contact Support
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default VerifyEmail;
