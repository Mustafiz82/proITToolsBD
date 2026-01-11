import { ShieldCheck, Zap } from "lucide-react";
import { HiMiniShieldCheck } from "react-icons/hi2";
import { BiSolidZap } from "react-icons/bi";
import { RiCustomerService2Line } from "react-icons/ri";
import { RiSecurePaymentLine } from "react-icons/ri";

const Features = () => {
  const features = [
    {
      icon: <HiMiniShieldCheck className="text-5xl" />,
      title: "Authentic Product",
      description: "100% official accounts",
      color: "from-green-500 to-emerald-500", // Green gradient for Trust
    },
    {
      icon: <BiSolidZap className="text-5xl" />,
      title: "Instant Delivery",
      description: "Automated access in seconds",
      color: "from-yellow-500 to-orange-500", // Yellow/Orange for Speed
    },
    {
      icon: <RiCustomerService2Line className="text-5xl" />,
      title: "Daily Support",
      description: "10AM - 12PM Live Chat",
      color: "from-blue-500 to-indigo-500", // Blue for Supportnpm i
    },
    {
      icon: <RiSecurePaymentLine className="text-5xl" />,
      title: "Secure Checkout",
      description: "Encrypted payment gateway",
      color: "from-purple-500 to-pink-500", // Purple for Security
    },
  ];

  return (
    <>
      <div className="my-10 grid grid-cols-4 gap-5 max-w-7xl mx-auto">
        {features.map((item , idx) => (
          <div key={idx} className="    p-5 py-10 flex gap-5 flex-col items-center rounded-lg    bg-gray-900/80 border border-transparent    transition-all duration-300 ease-in-out    hover:bg-gray-800 hover:border-purple-500/50    hover:shadow-lg hover:shadow-purple-500/20    hover:-translate-y-2 cursor-pointer group">
            {/* Wrap your icon in a div or apply classes directly to it for the pop effect */}
            <div className="text-white transition-transform duration-300 group-hover:scale-110 group-hover:text-purple-400">
              {item.icon}
            </div>

            <p className="text-gray-200 font-medium group-hover:text-white">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Features;
