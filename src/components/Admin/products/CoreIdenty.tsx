import {  ProductForm, Styles } from '@/app/admin/tools/add/page';
import { LayoutGrid } from 'lucide-react';
import React from 'react';


interface ChildrenProps {
  styles: Styles;
  formData: ProductForm;
  handleChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => void;

}


const CoreIdenty = ({styles , formData , handleChange}:ChildrenProps) => {
    return (
        <div className={styles.card}>
            <div className={`flex items-center gap-2 mb-6 ${styles.sectionDivider}`}>
                <LayoutGrid className="text-violet-400" size={20} />
                <h2 className="text-lg font-semibold text-white">Core Identity</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <label className={styles.label}>Product Name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="e.g. ChatGPT Plus"
                        value={formData.name}
                        onChange={handleChange}
                        className={styles.input}
                        required
                    />
                </div>
                <div>
                    <label className={styles.label}>Slug (URL)</label>
                    <input
                        type="text"
                        name="slug"
                        placeholder="e.g. chatgpt-plus-access"
                        value={formData.slug}
                        onChange={handleChange}
                        className={styles.input}
                        required
                    />
                </div>
                <div className="md:col-span-2">
                    <label className={styles.label}>Logo URL</label>
                    <input
                        type="text"
                        name="logo"
                        placeholder="https://..."
                        value={formData.logo}
                        onChange={handleChange}
                        className={styles.input}
                    />
                </div>

                {/* Brand Color Picker */}
                <div className="md:col-span-2">
                    <label className={styles.label}>Brand Theme Color</label>
                    <div className="flex items-center gap-4 bg-[#0F0B1F] p-3 rounded-xl border border-[#3A3470]/55 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                        <input
                            type="color"
                            name="brandColor"
                            value={formData.brandColor}
                            onChange={handleChange}
                            className="h-10 w-14 bg-transparent cursor-pointer border-none p-0 rounded"
                        />
                        <div className="flex flex-col">
                            <span className="text-white font-mono">
                                {formData.brandColor}
                            </span>
                            <span className="text-xs text-white/40">
                                Used for badges and accents
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default CoreIdenty;