import { Eye, EyeOff, LucideIcon } from "lucide-react";
import { useState } from "react";

interface childProps {
  label: string;
  Icon: LucideIcon;
  type: string;
  name : string;
}

export default function Input({ label, Icon,  name , type , ...props}: childProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative  rounded-lg">
      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-purple-400 transition-colors">
        <Icon className="w-5 h-5" />
      </div>
      <input
        // {...register}
        className="w-full  bg-[#0B0C10] border-gray-800 rounded-xl pt-4 pb-3 pl-10 pr-4 text-gray-100 placeholder:text-gray-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all peer  border  px-4 "
        type={type == "password" ? showPassword ? "text" :  type : type}
        placeholder=" "
        id={name}
        {...props}
      />
      <label
        className="absolute -top-3 mt-1 left-8 rounded-md bg-[#121217]/80 px-2 text-xs text-white/70  duration-300 peer-placeholder-shown:top-3  peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-sm peer-placeholder-shown:text-zinc-400 peer-focus:-top-3 peer-focus:bg-[#0B0C10] peer-focus:text-xs peer-focus:text-white/70"
        htmlFor={name}
      >
        {label}
      </label>

      {type == "password" && <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors"
      >
        {showPassword ? (
          <EyeOff className="w-5 h-5" />
        ) : (
          <Eye className="w-5 h-5" />
        )}
      </button>}
    </div>
  );
}
