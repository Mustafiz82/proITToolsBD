import Button from "@/ui/Button";
import { ThemedRadio } from "@/ui/ThemedRadio";
import { BadgeCheck } from "lucide-react";
import React, { useState } from "react";


type paymentMethod = "bkash" | "nogod" | "bank"

const PaymentMethod = () => {

  const [selectedPM, setSelectedPM] = useState<paymentMethod>("bkash");

  console.log(selectedPM)

  return (
    <div>
      <div className="flex my-8 items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-gray-200">Payment Method</h3>
        <div className="flex items-center gap-1 text-[11px] text-emerald-400">
          <BadgeCheck size={14} />
          Secure checkout
        </div>
      </div>

      <div className="flex-1 space-y-2 mt-5">
        {/* bkash */}
        <div  onClick={() => setSelectedPM("bkash")} className="flex cursor-pointer items-center  gap-3">
          <ThemedRadio checked={selectedPM === "bkash"} />

          <div className="flex justify-between w-full flex-row-reverse items-center gap-2">
            <div className="p-2 rounded-xl bg-fuchsia-500/10 text-fuchsia-300">
              <img className="w-8 h-8" src="/payments/bkash.png" alt="" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">bKash</p>
              <p className="text-[11px] text-gray-500">
                Pay with bKash (Mobile Wallet)
              </p>
            </div>
          </div>
        </div>

        {/* Nagad */}
        <div onClick={() => setSelectedPM("nogod")} className="flex cursor-pointer items-center justify-between gap-3">
          <ThemedRadio checked={selectedPM === "nogod"} />

          <div className="flex justify-between w-full flex-row-reverse  items-center gap-2">
            <div className="p-2 rounded-xl bg-orange-500/10 text-orange-300">
              <img className="w-8 h-8" src="/payments/nogod.png" alt="" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Nagad</p>
              <p className="text-[11px] text-gray-500">
                Pay with Nagad (Mobile Wallet)
              </p>
            </div>
          </div>
        </div>
      </div>

      <Button label="Pay" classname="w-full rounded-xl mt-5" />
    </div>
  );
};

export default PaymentMethod;
