import Sidebar from "@/components/Dashboard/Sidebar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <div className="w-full h-screen">
        <div className="min-h-screen flex items-center  container mx-auto  px-5">
          <div className="absolute top-1/2 -translate-y-1/2 right-0 w-125 h-125 bg-purple-900/50 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute top-0 left-1/5 w-125 h-125 bg-blue-900/30 rounded-full blur-[120px] pointer-events-none" />
          <div className="flex flex-10 gap-5">
            <Sidebar />

            <div className="min-h-[calc(100vh-160px)]  flex-1 shadow-black bottom-5 w-full bg-white/5 backdrop-blur-md border border-white/5 rounded-3xl flex flex-col p-5 shadow-2xl z-50">
              {children}
            </div>
          </div>
        </div>
      </div>
    </html>
  );
}
