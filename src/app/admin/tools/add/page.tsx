"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Save } from "lucide-react"; 
import CoreIdenty from "@/components/Admin/products/CoreIdenty";
import Content from "@/components/Admin/products/Content";
import MainFeatures from "@/components/Admin/products/MainFeatures";
import Pricing from "@/components/Admin/products/Pricing";
import TechnicalSpec from "@/components/Admin/products/TechnicalSpec";

export interface Feature {
  title: string;
  description: string;
}

export interface ProductForm {
  name: string;
  slug: string;
  logo: string;
  price: number;
  originalPrice: number;
  badge: string;
  upcoming: boolean;
  brandColor: string;
  shortDescription: string;
  heroHeadline: string;
  introduction: string;
  mainFeatures: Feature[];
  technicalSpecs: Record<string, string>;
  accountRules: string[];
}

// --- INITIAL STATE ---
const INITIAL_DATA: ProductForm = {
  name: "",
  slug: "",
  logo: "",
  price: 0,
  originalPrice: 0,
  badge: "",
  upcoming: false,
  brandColor: "#7c3aed", // Default Violet
  shortDescription: "",
  heroHeadline: "",
  introduction: "",
  mainFeatures: [],
  technicalSpecs: {},
  accountRules: [],
};

// --- STYLES (Tailwind Classes for Reuse) ---
const styles = {
  // card + surfaces (match the newer theme)
  card: "bg-gradient-to-br from-[#17112B]/60 via-[#140F28]/55 to-[#1A1332]/60 backdrop-blur-2xl border border-[#3A3470]/40 p-6 rounded-2xl shadow-[0_30px_70px_rgba(0,0,0,0.35)]",
  // section header divider
  sectionDivider: "border-b border-[#3A3470]/35 pb-4",
  label: "block text-sm font-medium text-white/55 mb-2",

  // inputs
  input:
    "w-full bg-[#0F0B1F] border border-[#3A3470]/55 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-violet-500/35 focus:border-violet-400/50 transition-all shadow-[inset_0_1px_0_rgba(255,255,255,0.07),0_10px_30px_rgba(0,0,0,0.18)]",

  // buttons
  btnPrimary:
    "bg-gradient-to-r from-violet-600 to-fuchsia-700 hover:from-violet-500 hover:to-fuchsia-500 hover:shadow-[0_0_30px_rgba(124,58,237,0.30)] text-white px-6 py-2 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all active:scale-95 disabled:opacity-70 border border-white/10",
  btnSecondary:
    "bg-[#0F0B1F] hover:bg-white/[0.03] text-white/80 px-4 py-2 rounded-xl text-sm font-medium border border-[#3A3470]/55 transition-colors hover:border-[#4A4390]",
  btnDanger:
    "text-red-300 hover:text-red-200 hover:bg-red-500/10 p-2 rounded-lg transition-colors",

  // small chips + inner panels
  innerPanel: "bg-[#0F0B1F]/70 border border-[#3A3470]/40 rounded-xl",
  mutedText: "text-white/40",
};

export type Styles = typeof styles;

export default function page() {
  const [formData, setFormData] = useState<ProductForm>(INITIAL_DATA);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "number" ? parseFloat(value) || 0 : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    console.log("Submitting Payload:", formData);

    // Simulate API call
    setTimeout(() => {
      alert("Product Created! Check Console for JSON.");
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="bg-[#070610] py-8 text-white font-sans  relative selection:bg-violet-500/30">
      {/* --- PAGE HEADER --- */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4 px-6 md:px-8">
        <div>
          <h1 className="text-2xl font-bold text-white mb-1">Manage Orders</h1>
          <p className="text-sm text-white/45">
            View and manage customer transactions
          </p>
        </div>
        <div className="flex gap-3">
          <Link href="/admin/tools" className={styles.btnSecondary}>
            Cancel
          </Link>
          <button
            onClick={handleSubmit}
            disabled={loading}
            className={styles.btnPrimary}
          >
            {loading ? (
              <span className="animate-spin">⏳</span>
            ) : (
              <Save size={18} />
            )}
            {loading ? "Saving..." : "Publish Tool"}
          </button>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-3 gap-8 px-6 md:px-8"
      >
        {/* --- LEFT COLUMN (Main Content) --- */}
        <div className="xl:col-span-2 space-y-8">
          <CoreIdenty
            styles={styles}
            formData={formData}
            handleChange={handleChange}
          />
          <Content
            styles={styles}
            formData={formData}
            handleChange={handleChange}
          />

          <MainFeatures
            formData={formData}
            styles={styles}
            setFormData={setFormData}
          />
        </div>

        {/* --- RIGHT COLUMN (Sticky Sidebar) --- */}
        <div className="space-y-8 h-fit xl:sticky xl:top-8">
          <Pricing
            formData={formData}
            styles={styles}
            setFormData={setFormData}
            handleChange={handleChange}
          />

          <TechnicalSpec
            setFormData={setFormData}
            formData={formData}
            styles={styles}
          />
        </div>
      </form>
    </div>
  );
}
