"use client";
import React, { useState } from "react";
import {
  KeyRound,
  ArrowRight,
  ShieldCheck,
  ChevronLeft,
  CheckCircle2,
  Mail,
} from "lucide-react";
import Button from "@/ui/Button";
import Link from "next/link";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../../firebase.config";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false); // To toggle between Form and Success view
  const [message, setMessage] = useState("");

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    setMessage("");

    try {
      await sendPasswordResetEmail(auth, email);
      setIsSuccess(true);
    } catch (error: any) {
      console.error(error);
      if (error.code === "auth/user-not-found") {
        setMessage("❌ No account found with this email.");
      } else if (error.code === "auth/invalid-email") {
        setMessage("❌ Please enter a valid email address.");
      } else {
        setMessage("❌ Failed to send reset link. Try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans flex flex-col relative overflow-hidden selection:bg-purple-500/30">
      {/* BACKGROUND GLOWS */}
      <div className="absolute top-[-10%] left-[-10%] w-125 h-125 bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-125 h-125 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* NAVBAR */}
      <nav className="w-full max-w-7xl mx-auto px-6 py-6 flex justify-between items-center relative z-10">
        <Link href="/" className="flex items-center gap-2 group cursor-pointer">
          <div className="bg-linear-to-br from-purple-600 to-blue-600 p-1.5 rounded-lg group-hover:shadow-[0_0_15px_rgba(147,51,234,0.5)] transition-shadow duration-300">
            <ShieldCheck size={20} className="text-white" />
          </div>
          <span className="font-bold text-xl tracking-tight">PROITTOOLSBD</span>
        </Link>

        {/* Back to Login Button */}
        <Link
          href="/login"
          className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2"
        >
          <ChevronLeft size={16} /> Back to Login
        </Link>
      </nav>

      {/* MAIN CONTENT AREA */}
      <main className="grow flex items-center justify-center p-4 relative z-10">
        <div className="w-full max-w-md">
          {/* GLASS CARD CONTAINER */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
            {/* Gradient Line at Top */}
            <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-purple-500 via-blue-500 to-purple-500 opacity-50" />

            {!isSuccess ? (
              // === FORM VIEW ===
              <>
                {/* ANIMATED ICON */}
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-purple-500 blur-xl opacity-20 animate-pulse"></div>
                    <div className="bg-linear-to-br from-purple-500/20 to-blue-500/20 border border-white/10 p-5 rounded-full relative">
                      <KeyRound className="w-10 h-10 text-purple-400" />
                    </div>
                  </div>
                </div>

                {/* TEXT HEADINGS */}
                <div className="text-center space-y-3 mb-8">
                  <h1 className="text-3xl font-bold tracking-tight">
                    Forgot{" "}
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-blue-400">
                      Password?
                    </span>
                  </h1>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    No worries! Enter your email and we will send you reset
                    instructions.
                  </p>
                </div>

                {/* ERROR MESSAGE */}
                {message && (
                  <div className="mb-4 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm text-center">
                    {message}
                  </div>
                )}

                {/* FORM */}
                <form onSubmit={handleResetPassword} className="space-y-5">
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-xs font-medium text-gray-400 ml-1"
                    >
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@example.com"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 pl-12 text-white placeholder:text-gray-600 outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all duration-300"
                        required
                      />
                    </div>
                  </div>

                  <Button
                    label={isLoading ? "Sending Link..." : "Send Reset Link"}
                    classname="w-full rounded-xl py-2.5! shadow-none hover:scale-[1.02]! font-medium transition-transform duration-200"
                    icon={isLoading ? undefined : ArrowRight}
                    spinner={isLoading}
                    // disabled={isLoading}
                    // type="submit"
                  />
                </form>
              </>
            ) : (
              // === SUCCESS VIEW ===
              <div className="text-center animate-in fade-in zoom-in duration-300">
                {/* ANIMATED ICON SUCCESS */}
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-green-500 blur-xl opacity-20 animate-pulse"></div>
                    <div className="bg-linear-to-br from-green-500/20 to-emerald-500/20 border border-white/10 p-5 rounded-full relative">
                      <CheckCircle2 className="w-10 h-10 text-green-400" />
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold mb-3">Check your email</h2>
                <p className="text-gray-400 mt-5 text-sm mb-6">
                  If an account exists for{" "}
                  <span className="text-white font-medium">{email}</span>, you
                  will receive a password reset link shortly.
                </p>

                <p className="text-xs text-gray-500 mb-8">
                  Didn't receive the email? Check your spam folder or <br />
                  <button
                    onClick={() => {
                      setIsSuccess(false);
                      setMessage("");
                    }}
                    className="text-purple-400 text-base mt-2 hover:text-purple-300 underline cursor-pointer"
                  >
                    Try a different email
                  </button>
                </p>

                <Link href="/login">
                  <Button
                    label="Back to Login"
                    classname="w-full rounded-xl py-2.5! shadow-none bg-white/10! hover:bg-white/20! border-transparent!"
                    icon={ArrowRight}
                  />
                </Link>
              </div>
            )}

            {/* FOOTER TEXT */}
            {!isSuccess && (
              <div className="mt-8 text-center">
                <p className="text-xs text-gray-500">
                  Remember your password?{" "}
                  <Link
                    href="/login"
                    className="text-purple-400 hover:text-purple-300 transition-colors font-medium"
                  >
                    Log in
                  </Link>
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
