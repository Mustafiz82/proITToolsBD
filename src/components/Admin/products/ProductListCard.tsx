import { Product, products } from "@/Data/products";
import { Edit3, Eye, Link, MoreHorizontal, Trash2 } from "lucide-react";
import React from "react";


interface products {
    _id: string 
    name: string 
    slug:  string ,
    price: number
    originalPrice: number,
    badge: string,
    upcoming: boolean,
    brandColor: string , 
    logo: string,
    createdAt: string,
}

const ProductListCard = ({product , idx}:{product : products ; idx : number}) => {
  return (
    <tr
      key={product._id}
      className={[
        "group transition-colors",
        idx % 2 === 0 ? "bg-white/[0.012]" : "bg-white/3",
        "hover:bg-violet-500/6",
      ].join(" ")}
    >
      {/* Column 1: Product Identity */}
      <td className="px-6 py-4">
        <div className="flex items-center gap-4">
          {/* Logo / Avatar */}
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-inner ring-1 ring-white/10"
            style={{ backgroundColor: product.brandColor || "#333" }}
          >
            {product.logo ? (
              <img
                src={product.logo}
                alt=""
                className="w-6 h-6 object-contain brightness-0 invert"
              />
            ) : (
              product.name.charAt(0)
            )}
          </div>
          <div>
            <div className="text-sm font-semibold text-white group-hover:text-violet-200 transition-colors">
              {product.name}
            </div>
            <div className="text-xs text-white/35 font-mono mt-0.5">
              /{product.slug}
            </div>
          </div>
        </div>
      </td>

      {/* Column 2: Pricing */}
      <td className="px-6 py-4">
        <div className="flex flex-col">
          <span className="text-sm font-medium text-white/85">
            {product.price === 0 ? "Free" : `$${product.price}`}
          </span>
          {product.originalPrice > product.price && (
            <span className="text-xs text-white/35 line-through">
              ${product.originalPrice}
            </span>
          )}
        </div>
      </td>

      {/* Column 3: Status / Badges */}
      <td className="px-6 py-4">
        <div className="flex flex-col items-start gap-1.5">
          {product.upcoming ? (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-500/10 text-purple-200 border border-purple-500/25">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-300 mr-1.5 animate-pulse"></span>
              Upcoming
            </span>
          ) : (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-500/10 text-green-200 border border-green-500/25">
              <span className="w-1.5 h-1.5 rounded-full bg-green-300 mr-1.5"></span>
              Active
            </span>
          )}
          {product.badge && (
            <span className="text-[10px] text-white/45 border border-[#3A3470]/40 bg-[#0F0B1F]/40 px-1.5 rounded">
              {product.badge}
            </span>
          )}
        </div>
      </td>

      {/* Column 4: Date */}
      <td className="px-6 py-4">
        <span className="text-xs text-white/40">{product.createdAt}</span>
      </td>

      {/* Column 5: Actions */}
      <td className="px-6 py-4 text-right">
        <div className="flex items-center justify-end gap-2 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            className="p-2 bg-[#0F0B1F] hover:bg-violet-600 hover:text-white text-white/60 rounded-xl border border-[#3A3470]/55 transition-colors shadow-[0_10px_25px_rgba(0,0,0,0.25)]"
            title="View"
          >
            <Eye size={14} />
          </button>

          <Link href={`/admin/products/add?id=${product._id}`}>
            <button
              className="p-2 bg-[#0F0B1F] hover:bg-blue-600 hover:text-white text-white/60 rounded-xl border border-[#3A3470]/55 transition-colors shadow-[0_10px_25px_rgba(0,0,0,0.25)]"
              title="Edit"
            >
              <Edit3 size={14} />
            </button>
          </Link>

          <button
            className="p-2 bg-[#0F0B1F] hover:bg-red-600 hover:text-white text-white/60 rounded-xl border border-[#3A3470]/55 transition-colors shadow-[0_10px_25px_rgba(0,0,0,0.25)]"
            title="Delete"
          >
            <Trash2 size={14} />
          </button>
        </div>
        <button className="md:hidden text-white/40">
          <MoreHorizontal size={18} />
        </button>
      </td>
    </tr>
  );
};

export default ProductListCard;
