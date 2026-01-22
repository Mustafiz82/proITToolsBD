import Button from "@/ui/Button";
import { ThemedRadio } from "@/ui/ThemedRadio";
import {
  BadgeCheck,
  ChevronRight,
  CreditCard,
  ShieldCheck,
  Zap,
} from "lucide-react";
import PaymentMethod from "./PaymentMethod";

const CartSummary = () => {
  // --- Summary Calculations ---
  // const cartSummary = useMemo(() => {
  //   return cartItems.reduce((acc, item) => {
  //     const { finalPrice, rawTotal } = calculatePricing(item.price, item.selectedDuration);
  //     return {
  //       subtotal: acc.subtotal + rawTotal,
  //       total: acc.total + finalPrice,
  //       savings: acc.savings + (rawTotal - finalPrice)
  //     };
  //   }, { subtotal: 0, total: 0, savings: 0 });
  // }, [cartItems]);

  const subTotal = 40;
  const saving = 20;
  const total = 20;


  

  return (
    <div className="sticky top-24">
      <div className="bg-[#0F0F12]/60 backdrop-blur-xl border border-white/10 rounded-3xl p-6 lg:p-8 shadow-2xl">
        <h2 className="text-xl font-semibold text-white mb-6">Order Summary</h2>

        <div className="space-y-3 text-sm mb-6">
          <div className="flex justify-between text-gray-400">
            <span>Subtotal (Monthly Rate)</span>
            <span>${subTotal}</span>
          </div>
          {saving > 0 && (
            <div className="flex justify-between text-emerald-400">
              <span>Total Savings</span>
              <span>-${saving.toFixed(2)}</span>
            </div>
          )}

          <div className="h-px bg-white/10 my-4" />

          <div className="flex justify-between items-center">
            <span className="text-gray-200 text-lg">Total</span>
            <span className="text-4xl font-bold text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-blue-400">
              ${total.toFixed(2)}
            </span>
          </div>
        </div>

        {/* Promo Code Input */}
        <div className="relative mb-6 group">
          <input
            type="text"
            placeholder="Enter promo code"
            className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 transition-colors"
          />
          <button className="absolute right-2 top-2 bg-white/10 hover:bg-white/20 text-gray-300 text-xs px-3 py-1.5 rounded-lg transition-colors font-medium">
            Apply
          </button>
        </div>

     <PaymentMethod/>

        {/* Trust Badges */}
        <div className="mt-8 grid grid-cols-3 gap-2 border-t border-white/5 pt-6">
          <div className="flex flex-col items-center gap-2 text-center">
            <div className="p-2 bg-emerald-500/10 rounded-full text-emerald-400">
              <ShieldCheck size={16} />
            </div>
            <span className="text-[10px] text-gray-500 font-medium">
              100% Secure
            </span>
          </div>
          <div className="flex flex-col items-center gap-2 text-center">
            <div className="p-2 bg-blue-500/10 rounded-full text-blue-400">
              <CreditCard size={16} />
            </div>
            <span className="text-[10px] text-gray-500 font-medium">
              Encrypted Pay
            </span>
          </div>
          <div className="flex flex-col items-center gap-2 text-center">
            <div className="p-2 bg-yellow-500/10 rounded-full text-yellow-400">
              <Zap size={16} />
            </div>
            <span className="text-[10px] text-gray-500 font-medium">
              Instant Access
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;
