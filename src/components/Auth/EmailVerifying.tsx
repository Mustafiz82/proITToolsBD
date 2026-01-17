import React, { useState, useEffect } from "react";
import {
  Loader2,
  CheckCircle2,
  Lock,
  ArrowRight,
  XCircle,
  AlertCircle,
  RefreshCcw,
} from "lucide-react";
import { auth } from "../../../firebase.config";
import { applyActionCode, sendEmailVerification } from "firebase/auth";
import useAuth from "@/hook/useAuth";
import { useRouter } from "next/navigation";

const EmailVerifying = ({ oobCode }: { oobCode: string | null }) => {
  // States: 'loading' | 'success' | 'error'
  const [status, setStatus] = useState<"loading" | "success" | "error">(
    "loading"
  );
  const [errorMessage, setErrorMessage] = useState("");
  const [isResending, setIsResending] = useState(false);
  const [countdown, setCountdown] = useState(30);
  const { user, handleLogout } = useAuth();
  const [message, setMessage] = useState("");
  const router = useRouter()

  useEffect(() => {
    if (!oobCode) {
      setStatus("error");
      setErrorMessage("Verification code is missing.");
      return;
    }

    applyActionCode(auth, oobCode)
      .then(() => {
          setStatus("success");
        setTimeout(() => {
            router.push("/")
        }, 500);
        
      })
      .catch((err: any) => {
        setStatus("error");
        // Handle specific Firebase error codes
        switch (err.code) {
          case "auth/expired-action-code":
            setErrorMessage(
              "The verification link has expired. Please request a new one."
            );
            break;
          case "auth/invalid-action-code":
            setErrorMessage(
              "The verification link is invalid or has already been used."
            );
            break;
          case "auth/user-disabled":
            setErrorMessage(
              "The account associated with this email has been disabled."
            );
            break;
          case "auth/user-not-found":
            setErrorMessage("No user found for this verification code.");
            break;
          default:
            setErrorMessage(
              "An unexpected error occurred. Please try again later."
            );
        }
        console.error("Verification Error:", err.code, err.message);
      });
  }, [oobCode]);

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

      <main className="grow flex items-center justify-center p-4 relative z-10">
        <div className="w-full max-w-md">
          {/* GLASS CARD CONTAINER */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
            <div
              className={`absolute top-0 left-0 w-full h-1 opacity-50 bg-linear-to-r 
              ${
                status === "success"
                  ? "from-green-500 via-emerald-500 to-green-500"
                  : status === "error"
                  ? "from-red-500 via-orange-500 to-red-500"
                  : "from-purple-500 via-blue-500 to-purple-500"
              }`}
            />

            {/* STATUS ICON */}
            <div className="flex mt-10 justify-center mb-10">
              <div className="relative">
                {status === "loading" && (
                  <div className="absolute -inset-4 border-2 border-dashed border-purple-500/30 rounded-full animate-[spin_10s_linear_infinite]" />
                )}

                <div
                  className={`
                  relative z-10 p-6 rounded-full transition-all duration-700 border flex items-center justify-center
                  ${
                    status === "success"
                      ? "bg-green-500/20 border-green-500/50"
                      : status === "error"
                      ? "bg-red-500/20 border-red-500/50"
                      : "bg-white/5 border-white/10"
                  }
                `}
                >
                  {status === "success" && (
                    <CheckCircle2 className="w-12 h-12 text-green-400" />
                  )}
                  {status === "error" && (
                    <XCircle className="w-12 h-12 text-red-400" />
                  )}
                  {status === "loading" && (
                    <Loader2 className="w-12 h-12 text-purple-400 animate-spin" />
                  )}

                  {status === "loading" && (
                    <div className="absolute top-0 left-0 w-full h-1/2 bg-linear-to-b from-purple-500/20 to-transparent animate-[bounce_2s_infinite] opacity-50" />
                  )}
                </div>
              </div>
            </div>

            {/* TEXT HEADINGS */}
            <div className="text-center space-y-3 mb-8">
              <h1 className="text-3xl font-bold tracking-tight">
                {status === "success"
                  ? "Account "
                  : status === "error"
                  ? "Verification "
                  : "Verifying "}
                <span
                  className={`text-transparent bg-clip-text bg-linear-to-r 
                  ${
                    status === "success"
                      ? "from-green-400 to-emerald-400"
                      : status === "error"
                      ? "from-red-400 to-orange-400"
                      : "from-purple-400 to-blue-400"
                  }`}
                >
                  {status === "success"
                    ? "Verified"
                    : status === "error"
                    ? "Failed"
                    : "Status"}
                </span>
              </h1>

              <div className="min-h-6">
                {status === "success" && (
                  <p className="text-green-400 text-sm font-medium animate-pulse">
                    Your email has been confirmed successfully!
                  </p>
                )}
                {status === "error" && (
                  <p className="text-red-400 text-sm font-medium flex items-center justify-center gap-2">
                    <AlertCircle size={14} />
                    {errorMessage}
                  </p>
                )}
                {status === "loading" && (
                  <p className="text-gray-400 text-sm flex items-center justify-center gap-2">
                    <Lock size={14} className="text-purple-400" />
                    Securely establishing your session...
                  </p>
                )}
              </div>
            </div>

            {/* ACTIONS */}
           

            {status === "error" && ( <>

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
              <button
                onClick={handleResendEmail}
                disabled={isResending || countdown > 0}
                className={`
                    text-sm transition-all w-full text-center duration-300
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
                  : "Resend Varification Email"}
              </button>


          </>  )}

            {/* FOOTER */}
            <div className="mt-8 text-center">
              <p className="text-[10px] text-gray-600 uppercase tracking-widest font-bold">
                {status === "error"
                  ? "Security Protocol Terminated"
                  : "Encrypted End-to-End"}
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default EmailVerifying;
