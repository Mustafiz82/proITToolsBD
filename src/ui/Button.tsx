import { LucideIcon } from "lucide-react";

interface childProps {
  label: string;
  icon?: LucideIcon;
  classname?: string;
  spinner?: boolean;
  onClick?: () => void;
}

const Button = ({
  label,
  icon: Icon,
  classname,
  spinner,
  onClick,
}: childProps) => {
  return (
    <div className=" group ">
      <button
        onClick={onClick}
        disabled={spinner}
        className={` ${classname} flex   justify-center items-center gap-2 cursor-pointer px-12 py-3 bg-linear-to-r from-purple-600 to-indigo-600 rounded-full text-white font-bold text-lg shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:scale-105 duration-500 transition-all  active:scale-95`}
      >
        {spinner && (
          <span className="loading loading-spinner  loading-sm"></span>
        )}

        {label}

        {Icon && (
          <Icon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        )}
      </button>
    </div>
  );
};

export default Button;
