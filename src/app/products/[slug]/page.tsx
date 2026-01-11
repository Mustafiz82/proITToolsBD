"use client";

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  AlertTriangle, 
  Cpu, 
  FileText, 
  Video, 
  Globe, 
  ChevronRight,
  Star,
  Lock
} from 'lucide-react';
import { products } from '@/Data/products';


export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  
  // 1. Get Product Data based on Slug
  const product = products.find((p) => p.slug === params.slug);

  // Handle 404
  if (!product) {
    return (
      <div className="min-h-screen bg-[#0B0C15] flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
          <button onClick={() => router.push('/')} className="text-blue-400 hover:underline">
            Go back home
          </button>
        </div>
      </div>
    );
  }

  // Helper to get icon based on feature title (Optional dynamic icon logic)
  const getFeatureIcon = (title: string) => {
    if (title.includes("Video")) return <Video className="w-5 h-5 text-pink-400" />;
    if (title.includes("Research")) return <Globe className="w-5 h-5 text-blue-400" />;
    if (title.includes("Canvas")) return <FileText className="w-5 h-5 text-orange-400" />;
    return <Cpu className="w-5 h-5 text-purple-400" />;
  };

  return (
    <div className="min-h-screen bg-[#0B0C15] text-gray-100 font-sans selection:bg-purple-500/30">
      
      {/* Background Ambient Glows */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-125 h-125 bg-purple-900/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-100 h-100 bg-blue-900/20 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Breadcrumb */}
        <nav className="flex items-center text-sm text-gray-400 mb-8 space-x-2">
          <span className="hover:text-white cursor-pointer" onClick={() => router.push('/')}>Home</span>
          <ChevronRight className="w-4 h-4" />
          <span className="hover:text-white cursor-pointer">Shop</span>
          <ChevronRight className="w-4 h-4" />
          <span className="text-purple-400 font-medium">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* LEFT COLUMN: Main Content */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Header Section */}
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <div className={`w-20 h-20 sm:w-24 sm:h-24 rounded-2xl flex items-center justify-center bg-gray-900 shadow-xl border border-white/5 overflow-hidden`}>
                  {/* Ideally use Next/Image here */}
                  <img src={product.logo} alt={product.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  {product.badge && (
                    <span className="inline-block px-3 py-1 bg-linear-to-r from-amber-500 to-orange-500 text-white text-xs font-bold rounded-full mb-2 shadow-lg shadow-orange-500/20">
                      {product.badge}
                    </span>
                  )}
                  <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">{product.name}</h1>
                  <p className="text-gray-400 text-lg">{product.shortDescription}</p>
                </div>
              </div>
            </div>

            {/* Introduction & Highlights */}
            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-blue-400 mb-4">
                {product.heroHeadline}
              </h2>
              {/* Rendering the HTML content safely */}
              <div 
                className="text-gray-300 leading-relaxed space-y-4"
                dangerouslySetInnerHTML={{ __html: product.introduction }} 
              />
            </div>

            {/* Feature Grid */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Zap className="w-5 h-5 text-yellow-400" /> Key Features
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.mainFeatures.map((feature, idx) => (
                  <div key={idx} className="bg-white/5 border border-white/5 hover:border-purple-500/30 transition-colors p-5 rounded-xl group">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-gray-800 rounded-lg group-hover:scale-110 transition-transform">
                        {getFeatureIcon(feature.title)}
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">{feature.title}</h4>
                        <p className="text-sm text-gray-400 leading-snug">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Specs */}
            <div className="bg-[#0f111a] rounded-xl border border-white/10 overflow-hidden">
              <div className="px-6 py-4 border-b border-white/5 bg-white/5">
                <h3 className="font-bold text-white">Technical Specifications</h3>
              </div>
              <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                {Object.entries(product.technicalSpecs).map(([key, value]) => (
                  <div key={key} className="flex justify-between items-center border-b border-white/5 pb-2 last:border-0 last:pb-0">
                    <span className="text-gray-500 text-sm">{key}</span>
                    <span className="text-gray-200 text-sm font-medium text-right">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Account Rules Warning */}
            <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-6">
              <h3 className="text-red-400 font-bold flex items-center gap-2 mb-4">
                <AlertTriangle className="w-5 h-5" /> Important Account Rules
              </h3>
              <ul className="space-y-2">
                {product.accountRules.map((rule, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-400">
                    <span className="mt-1 w-1.5 h-1.5 bg-red-400 rounded-full shrink-0" />
                    {rule.replace('⚠️', '')} 
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* RIGHT COLUMN: Sticky Sidebar (Checkout) */}
          <div className="lg:col-span-1">
            <div className="sticky top-20 space-y-6">
              
              {/* Pricing Card */}
              <div className="bg-gray-900/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl relative overflow-hidden">
                {/* Glow effect inside card */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/20 rounded-full blur-3xl -z-10" />

                <div className="flex justify-between items-end mb-6">
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Total Price</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-white">${product.price.toFixed(2)}</span>
                      <span className="text-lg text-gray-500 line-through">${product.originalPrice}</span>
                    </div>
                  </div>
                  <div className="bg-green-500/10 text-green-400 border border-green-500/20 px-2 py-1 rounded text-xs font-bold">
                    {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 text-sm text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Instant Delivery via Email</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>24/7 Support Access</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>30-Day Warranty</span>
                  </div>
                </div>

                <button 
                  className={`w-full py-4 rounded-xl font-bold text-white shadow-lg shadow-purple-900/50 hover:scale-[1.02] transition-transform active:scale-[0.98]
                    ${product.upcoming 
                      ? 'bg-gray-700 cursor-not-allowed opacity-70' 
                      : 'bg-linear-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500'}`
                  }
                  disabled={product.upcoming}
                >
                  {product.upcoming ? 'Join Waitlist' : 'Get Access Now'}
                </button>
                
                <p className="text-center text-xs text-gray-500 mt-4 flex items-center justify-center gap-1">
                  <Lock className="w-3 h-3" /> Secure SSL Encrypted Payment
                </p>
              </div>

              {/* Support Widget */}
              <div className="bg-[#13151f] border border-white/5 rounded-xl p-5 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Money Back Guarantee</h4>
                  <p className="text-xs text-gray-500">If login doesn't work, we replace it.</p>
                </div>
              </div>

              {/* Reviews Preview (Static for now) */}
              <div className="flex items-center justify-between px-4">
                <div className="flex -space-x-2">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gray-700 border-2 border-[#0B0C15]" />
                  ))}
                </div>
                <div className="text-right">
                  <div className="flex items-center text-yellow-400 text-xs">
                    <Star className="w-3 h-3 fill-current" />
                    <Star className="w-3 h-3 fill-current" />
                    <Star className="w-3 h-3 fill-current" />
                    <Star className="w-3 h-3 fill-current" />
                    <Star className="w-3 h-3 fill-current" />
                  </div>
                  <p className="text-xs text-gray-400">Based on 1,200+ sales</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}