"use client";
import Link from "next/link";
import { Menu, Rocket } from "lucide-react";
import { usePathname } from "next/navigation";
import useAuth from "@/hook/useAuth";
import LoginGetStarted from "./LoginGetStarted";
import CartDashboard from "./CartDashboard";

const Navbar = () => {
  const route = usePathname();

  const { user,  AuthLoading } = useAuth();
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  console.log(user);

  const unShownRoute = ["signup", "login"];

  if (unShownRoute.includes(route.slice(1)) || route.startsWith("/dashboard")) {
    return null;
  }

  console.log(AuthLoading);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-lg">
      <div className="max-w-395 mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-2 cursor-pointer">
          {/* Logo Icon Container */}
          <div className="w-8 h-8 bg-linear-to-tr from-blue-500 to-primary rounded-lg flex items-center justify-center shadow-[0_0_10px_rgba(139,92,246,0.3)]">
            <Rocket className="text-white w-5 h-5" />
          </div>
          <span className="text-xl font-bold bg-clip-text uppercase text-transparent bg-linear-to-r from-white to-gray-400">
            proittoolsbd
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {["All Tools", "Pricing", "How it Works", "Support"].map((item) => (
            <Link
              key={item}
              href="#"
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors duration-200"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          {AuthLoading ? (
            isLoggedIn == "true" ? (
              <CartDashboard  />
            ) : (
              <LoginGetStarted />
            )
          ) : user ? (
            <CartDashboard />
          ) : (
            <LoginGetStarted />
          )}

          {/* Mobile Menu Icon */}
          <button className="md:hidden text-gray-300">
            <Menu />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
