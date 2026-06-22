"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { products } from "@/data/fakeData";
import { useCart } from "@/components/CartContext";
import { useWishlist } from "@/components/WishlistContext";
import { useToast } from "@/components/ToastProvider";
import { Heart, Star, ShoppingBag, Eye } from "lucide-react";

export default function ProductsSection() {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const { showToast } = useToast();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleWishlist = (product: (typeof products)[0]) => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
      showToast("Removed from wishlist", "info");
    } else {
      addToWishlist({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        seller: product.seller,
        category: product.category,
        rating: product.rating,
      });
      showToast("Added to wishlist!", "success");
    }
  };

  const handleAddToCart = (product: (typeof products)[0]) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      seller: product.seller,
    });
    showToast(`${product.name} added to cart!`, "success");
  };

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container-main">
        <div className="section-header">
          <h2>Popular Products</h2>
          <p>Handpicked favorites from our verified sellers this week</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.slice(0, 8).map((product) => (
            <div
              key={product.id}
              className="bg-[var(--bg)] rounded-[var(--radius-md)] overflow-hidden transition hover:-translate-y-1 hover:shadow-lg group"
            >
              <Link href={`/products/${product.id}`}>
                <div className="aspect-square bg-[var(--bg-warm)] relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </Link>
              <button
                onClick={() => toggleWishlist(product)}
                className={`absolute top-3 right-3 w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-sm transition hover:scale-110 z-10 ${
                  mounted && isInWishlist(product.id) ? "bg-red-50" : ""
                }`}
                aria-label="Add to wishlist"
              >
                <Heart
                  className={`w-[18px] h-[18px] transition ${
                    mounted && isInWishlist(product.id)
                      ? "fill-red-500 text-red-500"
                      : "text-[var(--text)]"
                  }`}
                />
              </button>
              <div className="p-4">
                <Link href={`/products/${product.id}`}>
                  <div className="text-xs text-[var(--text-muted)] mb-1">by {product.seller}</div>
                  <div className="text-[15px] font-semibold mb-2 hover:text-[var(--primary)] transition">{product.name}</div>
                </Link>
                <div className="flex items-center justify-between mb-3">
                  <div className="text-[15px] font-bold text-[var(--primary)]">
                    {product.price} TND
                    {product.oldPrice && (
                      <span className="text-[13px] font-normal text-[var(--text-light)] line-through ml-2">
                        {product.oldPrice} TND
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-1 text-xs text-[var(--text-muted)]">
                    <Star className="w-3.5 h-3.5 fill-[#f0c040] text-[#f0c040]" />
                    {product.rating}
                  </div>
                </div>
                <div className="flex gap-2">
                  <Link
                    href={`/products/${product.id}`}
                    className="flex-1 py-2.5 border border-[var(--border)] text-[var(--text)] rounded-lg text-[13px] font-semibold hover:bg-[var(--bg-warm)] transition flex items-center justify-center gap-2"
                  >
                    <Eye className="w-4 h-4" />
                    Details
                  </Link>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="flex-1 py-2.5 bg-[var(--primary)] text-white rounded-lg text-[13px] font-semibold hover:bg-[var(--primary-dark)] transition flex items-center justify-center gap-2"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
