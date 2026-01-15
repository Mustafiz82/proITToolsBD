"use client";

import React, { useContext, useState } from "react";
import Link from "next/link";
import { Rocket, Eye, EyeOff, Lock, Mail, ArrowRight } from "lucide-react";
import { AuthContext } from "@/context/AuthContext";
import useAuth from "@/hook/useAuth";
import { SubmitHandler, useForm } from "react-hook-form";
import { getCustomErrorMessage } from "@/utils/getErrormessage";
import Button from "@/ui/Button";
import { FcGoogle } from "react-icons/fc";

interface LoginProps {
  email: string;
  password: string;
}

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { handleSignIn, setUser, handleGoogleSignIn } = useAuth();
  const { handleSubmit, register } = useForm<LoginProps>();

  const handleLogin: SubmitHandler<LoginProps> = (data) => {
    setLoading(true);
    const { email, password } = data;
    handleSignIn(email, password)
      .then((res) => {
        setUser(res.user);
        setError("");
      })
      .catch((err) => setError(getCustomErrorMessage(err)))
      .finally(() => setLoading(false));
  };

  // hanldleGoogleSignin
  const handleGoogleSignup = () => {
    handleGoogleSignIn()
      .then((res) => setUser(res.user))
      .catch((err) => setError(getCustomErrorMessage(err)));
  };

  return (
    <div className="min-h-screen w-full bg-[#050509] text-white flex flex-col relative overflow-hidden font-sans selection:bg-purple-500 selection:text-white">
      {/* --- Background Ambient Glow Effects (Matches the screenshot vibe) --- */}
      <div className="absolute top-[-20%] left-[-10%] w-125 h-125 bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-125 h-125 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* --- Main Content Area --- */}
      <main className="flex-1 flex items-center justify-center px-4 relative z-10">
        <div className="w-full max-w-md">
          {/* Card Container */}
          <div className="bg-[#121217]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
            {/* Top decorative gradient line inside card */}
            <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-purple-600 via-blue-500 to-purple-600 opacity-80" />

            <div className="mb-8 text-center">
              <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
              <p className="text-gray-400 text-sm">
                Enter your credentials to access your premium tools dashboard.
              </p>
            </div>

            <form className="space-y-5" onSubmit={handleSubmit(handleLogin)}>
              {/* Email Input */}
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-300 ml-1"
                >
                  Email Address
                </label>
                <div className="relative mt-2 group">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-purple-400 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <input
                    {...register("email", { required: true })}
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                    className="w-full bg-[#0B0C10] border border-gray-800 rounded-xl py-3 pl-10 pr-4 text-gray-100 placeholder:text-gray-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                  />
                </div>
              </div>

              {/* Password Input */}
              <div className="space-y-2">
                <div className="flex justify-between items-center ml-1">
                  <label
                    htmlFor="password"
                    className="text-sm font-medium text-gray-300"
                  >
                    Password
                  </label>
                  <Link
                    href="/forgot-password"
                    className="text-xs text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    Forgot Password?
                  </Link>
                </div>
                <div className="relative group">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-purple-400 transition-colors">
                    <Lock className="w-5 h-5" />
                  </div>
                  <input
                    {...register("password", { required: true })}
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="w-full bg-[#0B0C10] border border-gray-800 rounded-xl py-3 pl-10 pr-12 text-gray-100 placeholder:text-gray-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Login Button */}

              <div className="min-h-5 mt-2">
                {error && (
                  <p className="text-red-500 text-sm text-center font-medium ">
                    {error}
                  </p>
                )}
              </div>
              <Button
                label={loading ? "Signing In ..." : "Sign In"}
                classname="w-full rounded-xl py-2! shadow-none hover:scale-100! font-normal"
                icon={!loading && ArrowRight}
                spinner={loading && true}
              />

              {/* Divider */}
              <div className="divider  text-gray-500 text-xs uppercase">
                Or Sign In with
              </div>
            </form>
            {/* Social Login Button (Google) */}
            <button
              onClick={handleGoogleSignup}
              className="w-full bg-[#1A1A20] hover:bg-[#25252e] border border-gray-800 text-gray-300 font-medium py-3 rounded-xl transition-all flex items-center justify-center gap-3"
            >
              <FcGoogle />
              Google
            </button>
            <div className="hidden text-center mt-2 md:block text-sm text-gray-400">
              Don't have an account?{" "}
              <Link
                href="/signup"
                className="text-purple-400 hover:text-purple-300 transition-colors font-medium"
              >
                Sign Up
              </Link>
            </div>
          </div>

          {/* Footer Links */}
          <div className="mt-8 text-center text-sm text-gray-500">
            <Link
              href="/privacy"
              className="hover:text-gray-300 transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="mx-2">•</span>
            <Link
              href="/terms"
              className="hover:text-gray-300 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
