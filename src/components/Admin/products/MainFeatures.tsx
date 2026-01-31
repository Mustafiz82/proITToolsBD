import {
  Feature,
  ProductForm,
  Styles,
} from "@/app/admin/tools/add/page";
import { Layers, Plus, X } from "lucide-react";
import React from "react";

interface ChildrenProps {
  styles: Styles;
  formData: ProductForm;
  setFormData: React.Dispatch<React.SetStateAction<ProductForm>>;
}

const MainFeatures = ({ styles, formData, setFormData }: ChildrenProps) => {


  const updateFeature = (
    index: number,
    field: keyof Feature,
    value: string,
  ) => {
    const updated = [...formData.mainFeatures];
    updated[index][field] = value;
    setFormData((prev) => ({ ...prev, mainFeatures: updated }));
  };


  const addFeature = () => {
    setFormData((prev) => ({
      ...prev,
      mainFeatures: [...prev.mainFeatures, { title: "", description: "" }],
    }));
  };

  
  const removeFeature = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      mainFeatures: prev.mainFeatures.filter((_, i) => i !== index),
    }));
  };


  return (
    <div className={styles.card}>
      <div
        className={`flex items-center justify-between mb-6 ${styles.sectionDivider}`}
      >
        <div className="flex items-center gap-2">
          <Layers className="text-violet-400" size={20} />
          <h2 className="text-lg font-semibold text-white">Main Features</h2>
        </div>
        <button
          type="button"
          onClick={addFeature}
          className="text-xs text-violet-300 hover:text-violet-200 font-medium flex items-center gap-1"
        >
          <Plus size={14} /> Add Feature
        </button>
      </div>

      <div className="space-y-4">
        {formData.mainFeatures.map((feature, idx) => (
          <div
            key={idx}
            className="bg-[#0F0B1F]/70 p-4 rounded-xl border border-[#3A3470]/45 group relative shadow-[0_20px_50px_rgba(0,0,0,0.20)]"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-white/45 mb-1 block">
                  Title
                </label>
                <input
                  value={feature.title}
                  onChange={(e) => updateFeature(idx, "title", e.target.value)}
                  className="w-full bg-[#0F0B1F] border border-[#3A3470]/55 text-white text-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500/30 focus:border-violet-400/50 p-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
                  placeholder="Feature Title"
                />
              </div>
              <div>
                <label className="text-xs text-white/45 mb-1 block">
                  Description
                </label>
                <input
                  value={feature.description}
                  onChange={(e) =>
                    updateFeature(idx, "description", e.target.value)
                  }
                  className="w-full bg-[#0F0B1F] border border-[#3A3470]/55 text-white text-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500/30 focus:border-violet-400/50 p-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
                  placeholder="Short explanation..."
                />
              </div>
            </div>
            <button
              type="button"
              onClick={() => removeFeature(idx)}
              className="absolute -top-2 -right-2 bg-red-500/90 text-white w-6 h-6 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg border border-white/10"
            >
              <X size={12} />
            </button>
          </div>
        ))}
        {formData.mainFeatures.length === 0 && (
          <p className="text-center text-white/35 text-sm py-4 italic">
            No features added yet.
          </p>
        )}
      </div>
    </div>
  );
};

export default MainFeatures;
