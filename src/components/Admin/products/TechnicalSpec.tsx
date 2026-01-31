import { ProductForm, Styles } from "@/app/admin/tools/add/page";
import { Layers, Plus, Trash2 } from "lucide-react";
import React, { useState } from "react";

interface ChildrenProps {
  styles: Styles;
  formData: ProductForm;
  setFormData: React.Dispatch<React.SetStateAction<ProductForm>>;
}

const TechnicalSpec = ({ styles, formData, setFormData }: ChildrenProps) => {
  const [tempSpecKey, setTempSpecKey] = useState("");
  const [tempSpecVal, setTempSpecVal] = useState("");

  const addSpec = () => {
    if (!tempSpecKey.trim() || !tempSpecVal.trim()) return;
    setFormData((prev) => ({
      ...prev,
      technicalSpecs: { ...prev.technicalSpecs, [tempSpecKey]: tempSpecVal },
    }));
    setTempSpecKey("");
    setTempSpecVal("");
  };

  const removeSpec = (key: string) => {
    const newSpecs = { ...formData.technicalSpecs };
    delete newSpecs[key];
    setFormData((prev) => ({ ...prev, technicalSpecs: newSpecs }));
  };

  return (
    <div className={styles.card}>
      <div className={`flex items-center gap-2 mb-6 ${styles.sectionDivider}`}>
        <Layers className="text-violet-400" size={20} />
        <h2 className="text-lg font-semibold text-white">Specs</h2>
      </div>

      <div className="flex gap-2 mb-3">
        <input
          placeholder="Key"
          value={tempSpecKey}
          onChange={(e) => setTempSpecKey(e.target.value)}
          className="w-1/3 bg-[#0F0B1F] text-xs text-white px-2 py-2 rounded-xl border border-[#3A3470]/55 outline-none focus:ring-2 focus:ring-violet-500/30 focus:border-violet-400/50 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
        />
        <input
          placeholder="Value"
          value={tempSpecVal}
          onChange={(e) => setTempSpecVal(e.target.value)}
          className="w-full bg-[#0F0B1F] text-xs text-white px-2 py-2 rounded-xl border border-[#3A3470]/55 outline-none focus:ring-2 focus:ring-violet-500/30 focus:border-violet-400/50 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
        />
        <button
          type="button"
          onClick={addSpec}
          className="text-violet-300 hover:text-white p-2"
        >
          <Plus size={18} />
        </button>
      </div>

      <div className="space-y-1 bg-[#0F0B1F]/70 rounded-xl p-2 border border-[#3A3470]/40">
        {Object.entries(formData.technicalSpecs).map(([key, val]) => (
          <div
            key={key}
            className="flex justify-between items-center text-xs p-2 hover:bg-white/3 rounded-lg group"
          >
            <div className="flex gap-2 min-w-0">
              <span className="text-white/50 font-medium">{key}:</span>
              <span className="text-white truncate">{val}</span>
            </div>
            <button
              onClick={() => removeSpec(key)}
              className="text-red-400 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <Trash2 size={12} />
            </button>
          </div>
        ))}
        {Object.keys(formData.technicalSpecs).length === 0 && (
          <p className="text-center text-white/35 text-xs py-2">
            No specs added.
          </p>
        )}
      </div>
    </div>
  );
};

export default TechnicalSpec;
