import { ProductForm, Styles } from "@/app/admin/tools/add/page";
import { DollarSign } from "lucide-react";
import React from "react";

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
const Pricing = ({ styles, formData, handleChange  , setFormData }:ChildrenProps) => {
  // 2. Checkbox Handler
  const handleToggle = (field: keyof ProductForm) => {
    setFormData((prev) => ({ ...prev, [field]: !prev[field] }));
  };
  return (
    <div className={styles.card}>
      <div className={`flex items-center gap-2 mb-6 ${styles.sectionDivider}`}>
        <DollarSign className="text-violet-400" size={20} />
        <h2 className="text-lg font-semibold text-white">Pricing & Status</h2>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={styles.label}>Price ($)</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className={styles.input}
            />
          </div>
          <div>
            <label className={styles.label}>Original ($)</label>
            <input
              type="number"
              name="originalPrice"
              value={formData.originalPrice}
              onChange={handleChange}
              className={styles.input}
            />
          </div>
        </div>

        <div>
          <label className={styles.label}>Badge Text</label>
          <input
            type="text"
            name="badge"
            placeholder="e.g. Best Seller"
            value={formData.badge}
            onChange={handleChange}
            className={styles.input}
          />
        </div>

        {/* Upcoming Toggle */}
        <div className="flex items-center justify-between bg-[#0F0B1F] p-3 rounded-xl border border-[#3A3470]/55 mt-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
          <span className="text-sm text-white/70">Upcoming (Waitlist)</span>
          <button
            type="button"
            onClick={() => handleToggle("upcoming")}
            className={`w-11 h-6 flex items-center rounded-full p-1 transition-colors border border-white/10 ${
              formData.upcoming ? "bg-violet-600" : "bg-white/20"
            }`}
          >
            <div
              className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${
                formData.upcoming ? "translate-x-5" : "translate-x-0"
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
