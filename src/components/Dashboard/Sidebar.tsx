"use client";
import useAuth from "@/hook/useAuth";
import {
  BookOpen,
  LayoutDashboard,
  LogOut,
  MessageSquare,
  ChevronRight,
  User,
  HomeIcon,
  ToolCase,
  LucideProps,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { BsWhatsapp } from "react-icons/bs";



interface menuItems {
  name : string 
  icon : React.ReactNode
  link : string

}

const Sidebar = ({menuItems}:{menuItems : menuItems[]}) => {
  const pathname = usePathname();
  const { handleLogout} = useAuth()

  console.log(pathname);


  return (
    <aside className="min-h-[calc(100vh-160px)]   left-5 top-5 shadow-black bottom-5 w-64 bg-white/5 backdrop-blur-md border border-white/5 rounded-3xl flex flex-col p-5 shadow-2xl z-50">
      {/* LOGO AREA */}
      <div className="mb-8 flex items-center gap-3 px-2 mt-2">
        <div className="w-8 h-8 bg-linear-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
          {/* Small rocket icon inside logo square if needed */}
          <span className="text-white text-xs">🚀</span>
        </div>
        <span className="font-bold text-lg text-white tracking-wide">
          PROITTOOLSBD
        </span>
      </div>

      {/* NAVIGATION */}
      <nav className="flex-1 space-y-3">
        {menuItems.map((item) => (
          <Link
            target={item.name == "Support" ? "_blank" : "_self"}
            href={item.link}
            key={item.name}
            className={`group flex cursor-pointer items-center justify-between w-full p-3.5 rounded-2xl transition-all duration-300 relative overflow-hidden
              ${
                item.link == pathname
                  ? "bg-linear-to-r from-purple-600 to-purple-800 text-white shadow-lg shadow-purple-900/40"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }
            `}
          >
            <div className="flex items-center gap-3 relative z-10">
              {item.icon}
              <span className="font-medium text-sm">{item.name}</span>
            </div>

            {/* Right Arrow (Only show on inactive items like the screenshot, or all) */}
            {!(item.link == pathname) && (
              <ChevronRight
                size={16}
                className="text-gray-600 group-hover:text-gray-300 transition-colors"
              />
            )}
          </Link>
        ))}
      </nav>

      {/* USER / LOGOUT AREA */}
      <div className="mt-auto pt-6 border-t border-white/5">
        <button onClick={() => handleLogout()} className="flex  cursor-pointer  items-center gap-3 w-full p-2 rounded-xl text-gray-400 hover:text-red-400 hover:bg-red-500/10 transition-all">
          <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-white">
            <LogOut size={16} />
            {/* Or use an <img src="..." /> here */}
          </div>
          <span className="font-medium text-sm">Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
