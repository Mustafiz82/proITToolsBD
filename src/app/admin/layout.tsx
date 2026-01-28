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

export default function Layout({ children }: { children: React.ReactNode }) {
  const menuItems = [
    {
      name: "Dashboard",
      icon: <LayoutDashboard size={20} />,
      link: "/admin",
    },
    {
      name: "Manage Orders",
      icon: <ClipboardList size={20} />,
      link: "/admin/orders",
    },
    {
      name: "Cookie Management",
      icon: <KeyRound size={20} />,
      link: "/admin/cookies",
    },
    {
      name: "Customers",
      icon: <UserCheck size={20} />,
      link: "/admin/customers",
    },
    {
      name: "Users",
      icon: <Users size={20} />,
      link: "/admin/users",
    },
    {
      name: "WaitList",
      icon: <Clock size={20} />,
      link: "/admin/waitlist",
    },
    {
      name: "Coupons",
      icon: <TicketPercent size={20} />,
      link: "/admin/coupons",
    },
    {
      name: "Home",
      icon: <HomeIcon size={20} />,
      link: "/",
    },
  ];

  return (
    <html lang="en">
      <div className="w-full h-screen">
        <div className="min-h-screen flex items-center  container mx-auto  px-5">
          <div className="absolute top-1/2 -translate-y-1/2 right-0 w-125 h-125 bg-purple-900/50 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute top-0 left-1/5 w-125 h-125 bg-blue-900/30 rounded-full blur-[120px] pointer-events-none" />
          <div className="flex flex-10 gap-5">
            <Sidebar menuItems={menuItems} />

            <div className="min-h-[calc(100vh-160px)]  flex-1 shadow-black bottom-5 w-full bg-white/5 backdrop-blur-md border border-white/5 rounded-3xl flex flex-col p-5 shadow-2xl z-50">
              {children}
            </div>
          </div>
        </div>
      </div>
    </html>
  );
}
