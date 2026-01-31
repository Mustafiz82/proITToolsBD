import { ProductForm, Styles } from "@/app/admin/tools/add/page";
import { Plus, ShieldCheck, X } from "lucide-react";
import React, { useState } from "react";

interface ChildrenProps {
  styles: Styles;
  formData: ProductForm;
  setFormData: React.Dispatch<React.SetStateAction<ProductForm>>;
  handleChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => void;
}

const AccountRule = ({ styles , formData, setFormData }: ChildrenProps) => {
  const [tempRule, setTempRule] = useState("");

  const addRule = () => {
    if (!tempRule.trim()) return;
    setFormData((prev) => ({
      ...prev,
      accountRules: [...prev.accountRules, tempRule],
    }));
    setTempRule("");
  };

  const removeRule = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      accountRules: prev.accountRules.filter((_, i) => i !== index),
    }));
  };

  return (
    <div>
      <div className={styles.card}>
        <div
          className={`flex items-center gap-2 mb-6 ${styles.sectionDivider}`}
        >
          <ShieldCheck className="text-violet-400" size={20} />
          <h2 className="text-lg font-semibold text-white">Account Rules</h2>
        </div>

        <div className="flex gap-2 mb-3">
          <input
            type="text"
            value={tempRule}
            onChange={(e) => setTempRule(e.target.value)}
            onKeyDown={(e) =>
              e.key === "Enter" && (e.preventDefault(), addRule())
            }
            placeholder="Type rule..."
            className="flex-1 bg-[#0F0B1F] text-sm text-white px-3 py-2 rounded-xl border border-[#3A3470]/55 outline-none focus:ring-2 focus:ring-violet-500/30 focus:border-violet-400/50 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
          />
          <button
            type="button"
            onClick={addRule}
            className={styles.btnSecondary}
          >
            <Plus size={16} />
          </button>
        </div>

        <div className="flex flex-wrap gap-2">
          {formData.accountRules.map((rule, idx) => (
            <span
              key={idx}
              className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-violet-500/10 text-violet-200 border border-violet-500/25"
            >
              {rule}
              <button
                onClick={() => removeRule(idx)}
                className="hover:text-white ml-1"
              >
                <X size={12} />
              </button>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccountRule;
