import { confirmPasswordReset, validatePassword } from "firebase/auth";
import React, { useEffect, useMemo, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { auth } from "../../../firebase.config";
import { ArrowRight, CheckCircle2,  LockKeyhole } from "lucide-react";
import Input from "@/ui/Input";
import { useRouter } from "next/navigation";
import Button from "@/ui/Button";
import Link from "next/link";

interface resetPassProps {
  new_pass: string;
  confirm_pass: string;
}

const ResetPasswordContent = ({oobCode}:{oobCode : (string | null)}) => {


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<resetPassProps>();

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  // --- VALIDATION ERROR MESSAGE (Matches Signup UI) ---
  const validationError = useMemo(() => {
    const missingFields = [];
    if (errors.new_pass) missingFields.push("New Password");
    if (errors.confirm_pass) missingFields.push("Confirm Password");

    if (missingFields.length === 0) return null;

    if (missingFields.length === 1) {
      return `${missingFields[0]} is required.`;
    }

    const lastField = missingFields.pop();
    return `${missingFields.join(", ")} and ${lastField} are required.`;
  }, [errors]);

  useEffect(() => {
    if (validationError) {
      setError(validationError);
    }
  }, [validationError]);

  // --- SUBMIT HANDLER ---
  const onSubmit: SubmitHandler<resetPassProps> = async (data) => {
    const { new_pass, confirm_pass } = data;

    setError("");
    setIsLoading(true);

    if (!oobCode) {
      return;
    }

    // 1. Check Match
    if (new_pass !== confirm_pass) {
      setError("Passwords do not match.");
      setIsLoading(false);
      return;
    }

    // 2. Check Password Strength (Firebase)
    try {
      const status = await validatePassword(auth, new_pass);

      if (!status.isValid) {
        setError("Use uppercase, lowercase, number, and symbol.");
        setIsLoading(false);
        return;
      }

      // 3. Confirm Reset with Firebase
      await confirmPasswordReset(auth, oobCode, new_pass);

      console.log("Password reset successful");
      setIsSuccess(true);
    } catch (err: any) {
      console.error(err);

      if (err.code === "auth/expired-action-code") {
        setError("This link has expired. Request a new one.");
      } else if (err.code === "auth/invalid-action-code") {
        setError("This link is invalid or used.");
      } else if (err.code === "auth/weak-password") {
        setError("Password is too weak.");
      } else {
        setError("Failed to reset password. Try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  // Prevent flash of content if redirecting
  if (!oobCode) return null;

  return (
    <div className="grow flex justify-center">
      <div className="w-full max-w-md">
        {/* GLASS CARD */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
          {/* Top Gradient Line */}
          <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-purple-500 via-blue-500 to-purple-500 opacity-50" />

          {!isSuccess ? (
            <>
              {/* HEADINGS */}
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-purple-500 blur-xl opacity-20 animate-pulse"></div>
                  <div className="bg-linear-to-br from-purple-500/20 to-blue-500/20 border border-white/10 p-5 rounded-full relative">
                    <LockKeyhole className="w-10 h-10 text-purple-400" />
                  </div>
                </div>
              </div>

              <div className="text-center space-y-2 mb-8">
                <h1 className="text-3xl font-bold tracking-tight">
                  Set new{" "}
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-blue-400">
                    Password
                  </span>
                </h1>
                <p className="text-gray-400 text-sm">
                  Must be at least 6 characters long.
                </p>
              </div>

              {/* FORM */}
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <Input
                  label="New Password"
                  type="password"
                  id="new_pass"
                  Icon={LockKeyhole}
                  {...register("new_pass", {
                    required: "Password is required",
                  })}
                />

                <Input
                  label="Confirm Password"
                  type="password"
                  id="confirm_pass"
                  Icon={LockKeyhole}
                  {...register("confirm_pass", {
                    required: "Confirm Password is required",
                  })}
                />

                {/* ERROR MESSAGE (Matches Signup UI) */}
                <div className="min-h-5 mt-2">
                  {error && (
                    <p className="text-red-500 text-sm text-center font-medium ">
                      {error}
                    </p>
                  )}
                </div>

                <Button
                  label={isLoading ? "Resetting..." : "Reset Password"}
                  classname="w-full rounded-xl py-2.5! mt-2! shadow-none hover:scale-[1.02]! font-medium transition-transform duration-200"
                  icon={isLoading ? undefined : ArrowRight}
                  spinner={isLoading}
                />
              </form>
            </>
          ) : (
            // === SUCCESS VIEW ===
            <div className="text-center py-8 animate-in fade-in zoom-in duration-300">
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-green-500 blur-xl opacity-20 animate-pulse"></div>
                  <div className="bg-linear-to-br from-green-500/20 to-emerald-500/20 border border-white/10 p-5 rounded-full relative">
                    <CheckCircle2 className="w-12 h-12 text-green-400" />
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-3">Password Reset!</h2>
              <p className="text-gray-400 text-sm mb-8">
                Your password has been successfully updated. <br />
                You can now log in with your new password.
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
        </div>

        {/* FOOTER HELPER */}
        {!isSuccess && (
          <div className="mt-8 text-center">
            <p className="text-xs text-gray-500">
              Secure link expires in 30 minutes
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResetPasswordContent;
