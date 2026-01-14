"use client";

import Link from "next/link";
import { Lock, Mail, User, ArrowRight } from "lucide-react";
import Input from "@/ui/Input";
import Button from "@/ui/Button";
import { FcGoogle } from "react-icons/fc";
import { SubmitHandler, useForm } from "react-hook-form";
import { useEffect, useMemo, useState } from "react";

import useAuth from "@/hook/useAuth";
import { getCustomErrorMessage } from "@/utils/getErrormessage";
import { validatePassword } from "firebase/auth";
import { auth } from "../../../firebase.config";

export interface SignupProps {
  fullName: string;
  email: string;
  password: string;
}

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupProps>();

  const { handleGoogleSignIn, setUser, user, handleSignUp } = useAuth();
  const [error, setError] = useState("");
  const [loading , setLoading] = useState(false)

  // handle form submit signup
  const onSubmit: SubmitHandler<SignupProps> = (data) => {
    const { email, password } = data;
    setLoading(true)

    validatePassword(auth, password).then((res) => {
      if (!res.isValid) {
        setLoading(false)
        return setError(
          "Use uppercase, lowercase, number, and symbol."
        );
      }

      handleSignUp(email, password)
        .then((res) => {
          setUser(res.user)
          setError("")
        })
        .catch((err) => setError(getCustomErrorMessage(err)))
        .finally(() => setLoading(false))
        
     
    });
  };

  // hanldleGoogleSignin
  const handleGoogleSignup = () => {
    handleGoogleSignIn()
      .then((res) => setUser(res.user))
      .catch((err) => setError(getCustomErrorMessage(err)));
  };

  // show Error message
  const value = useMemo(() => {
    const missingFields = [];
    if (errors.fullName) missingFields.push("Full Name");
    if (errors.email) missingFields.push("Email");
    if (errors.password) missingFields.push("Password");

    if (missingFields.length === 0) return null;

    if (missingFields.length === 1) {
      return `${missingFields[0]} is required.`;
    }

    const lastField = missingFields.pop();
    return `${missingFields.join(", ")} and ${lastField} are required.`;
  }, [errors]);

  useEffect(() => {
    if (value) {
      setError(value);
    }
  }, [value]);

  return (
    <div className="min-h-screen w-full bg-[#050509] text-white flex flex-col relative overflow-hidden font-sans selection:bg-purple-500 selection:text-white">
      {/* --- Background Ambient Glow Effects --- */}
      <div className="absolute top-[-20%] left-[-10%] w-125 h-125 bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-125 h-125 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* --- Main Content Area --- */}
      <main className="flex-1 flex items-center justify-center px-4 relative z-10 py-10">
        <div className="w-full max-w-md">
          {/* Card Container */}
          <div className="bg-[#121217]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
            {/* Top decorative gradient line inside card */}
            <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-purple-600 via-blue-500 to-purple-600 opacity-80" />

            <div className="mb-8 text-center">
              <h1 className="text-3xl font-bold mb-2">Create Account</h1>
              <p className="text-gray-400 text-sm">
                Join us today and unlock your premium dashboard.
              </p>
            </div>

            <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
              <div className="space-y-5">
                <Input
                  label="Full Name"
                  type="text"
                  id="full_name"
                  Icon={User}
                  {...register("fullName", {
                    required: "Full Name is requred",
                  })}
                />

                <Input
                  label="Email Address"
                  type="email"
                  id="email"
                  Icon={Mail}
                  {...register("email", {
                    required: "Email is requred",
                  })}
                />
                <Input
                  label="Password"
                  type="password"
                  id="email"
                  Icon={Lock}
                  {...register("password", {
                    required: "Password is requred",
                  })}
                />
              </div>

              <div className="min-h-5 mt-2">
                {error && (
                  <p className="text-red-500 text-sm text-center font-medium ">
                    {error}
                  </p>
                )}
              </div>
              {/* Signup Button */}
              <Button
                label={loading ? "Creating Account  ..." : "Create Account"}
                classname="w-full rounded-xl py-2! shadow-none hover:scale-100! font-normal"
                icon={!loading && ArrowRight}
                spinner = {loading &&  true}
              />

              {/* Divider */}
              <div className="divider  text-gray-500 text-xs uppercase">
                Or register with
              </div>

              {/* Social Login Button (Google) */}
            </form>
            <button
              onClick={handleGoogleSignup}
              className="w-full bg-[#1A1A20] hover:bg-[#25252e] border border-gray-800 text-gray-300 font-medium py-3 rounded-xl transition-all flex items-center justify-center gap-3"
            >
              <FcGoogle />
              Google
            </button>

            <div className="text-center mt-6 text-sm text-gray-400">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-purple-400 hover:text-purple-300 transition-colors font-medium"
              >
                Sign In
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
