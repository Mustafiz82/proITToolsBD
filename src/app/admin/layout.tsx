import Sidebar from "@/components/Dashboard/Sidebar";
import {
  LayoutDashboard,
  HomeIcon,
  TicketPercent,
  ClipboardList,
  Clock,
  KeyRound,
  ShieldCheck,
  User2,
  UserCheck,
  Users,
} from "lucide-react";
import { LuPackagePlus } from "react-icons/lu";

export default function Layout({ children }: { children: React.ReactNode }) {
  const menuItems = [
    { name: "Dashboard", icon: <LayoutDashboard size={20} />, link: "/admin" },
    { name: "Manage Orders", icon: <ClipboardList size={20} />, link: "/admin/orders" },
    { name: "Cookie Management", icon: <KeyRound size={20} />, link: "/admin/cookies" },
    { name: "Manage Tools", icon: <LuPackagePlus size={20} />, link: "/admin/tools" },
    { name: "Customers", icon: <UserCheck size={20} />, link: "/admin/customers" },
    { name: "Users", icon: <Users size={20} />, link: "/admin/users" },
    { name: "WaitList", icon: <Clock size={20} />, link: "/admin/waitlist" },
    { name: "Coupons", icon: <TicketPercent size={20} />, link: "/admin/coupons" },
    { name: "Home", icon: <HomeIcon size={20} />, link: "/" },
  ];

  return (
    <html lang="en">
      <div className="w-full h-screen overflow-hidden bg-[#070610] text-white">
        <div className="h-screen overflow-hidden flex relative">
          {/* Ambient glows */}
          <div className="absolute top-[-120px] left-1/4 w-[1100px] h-[520px] bg-violet-700/20 blur-[140px] rounded-full pointer-events-none -z-10" />
          <div className="absolute bottom-[-160px] right-[-140px] w-[980px] h-[560px] bg-fuchsia-700/15 blur-[160px] rounded-full pointer-events-none -z-10" />
          <div className="absolute bottom-[-180px] left-[-160px] w-[900px] h-[520px] bg-indigo-700/10 blur-[170px] rounded-full pointer-events-none -z-10" />

          {/* Keep your originals too */}
          <div className="absolute top-1/2 -translate-y-1/2 right-0 w-125 h-125 bg-purple-900/50 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute top-0 left-1/5 w-125 h-125 bg-blue-900/30 rounded-full blur-[120px] pointer-events-none" />

          <div className="flex flex-10 gap-5 w-full px-4 py-4 md:px-6 md:py-6 overflow-hidden">
            <Sidebar menuItems={menuItems} />

            {/* Main content shell (ONLY this scrolls) */}
            <div
              className="
                flex-1 w-full rounded-3xl flex flex-col z-50
                bg-gradient-to-br from-[#17112B]/60 via-[#140F28]/55 to-[#1A1332]/60
                backdrop-blur-2xl
                border border-[#3A3470]/40
                shadow-[0_30px_70px_rgba(0,0,0,0.45)]
                overflow-hidden
              "
            >
              {/* This is the single scroll container */}
              <div className="h-full w-full overflow-y-auto">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </html>
  );
}
