"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useWishlist } from "@/components/WishlistContext";
import { useCart } from "@/components/CartContext";
import { useToast } from "@/components/ToastProvider";
import { Heart, ShoppingBag, ArrowRight, Trash2, Star } from "lucide-react";

export default function WishlistPage() {
  const { items, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();
  const { showToast } = useToast();

  const handleAddToCart = (item: (typeof items)[0]) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      seller: item.seller,
    });
    showToast(`${item.name} added to cart!`, "success");
  };

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <div className="bg-[var(--bg-warm)] py-16">
          <div className="container-main text-center">
            <h1 className="text-4xl md:text-5xl text-[var(--primary)] mb-4">Your Wishlist</h1>
            <p className="text-lg text-[var(--text-muted)] max-w-xl mx-auto">
              {items.length} saved item{items.length !== 1 ? "s" : ""}
            </p>
          </div>
        </div>

        <section className="py-16">
          <div className="container-main">
            {items.length === 0 ? (
              <div className="text-center py-20">
                <Heart className="w-16 h-16 mx-auto mb-6 text-[var(--text-muted)] opacity-40" />
                <h2 className="text-2xl font-semibold text-[var(--primary)] mb-2">Your wishlist is empty</h2>
                <p className="text-[var(--text-muted)] mb-8">Save your favorite products to buy them later.</p>
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-[var(--primary)] text-white rounded-full text-sm font-semibold hover:bg-[var(--primary-dark)] transition"
                >
                  Explore Products
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="bg-[var(--bg)] rounded-[var(--radius-md)] overflow-hidden transition hover:-translate-y-1 hover:shadow-lg group"
                  >
                    <div className="aspect-square bg-[var(--bg-warm)] relative overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <button
                        onClick={() => {
                          removeFromWishlist(item.id);
                          showToast("Removed from wishlist", "info");
                        }}
                        className="absolute top-3 right-3 w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-sm transition hover:scale-110"
                        aria-label="Remove from wishlist"
                      >
                        <Trash2 className="w-[18px] h-[18px] text-red-500" />
                      </button>
                    </div>
                    <div className="p-4">
                      <div className="text-xs text-[var(--text-muted)] mb-1">by {item.seller}</div>
                      <div className="text-[15px] font-semibold mb-2">{item.name}</div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="text-[15px] font-bold text-[var(--primary)]">{item.price} TND</div>
                        <div className="flex items-center gap-1 text-xs text-[var(--text-muted)]">
                          <Star className="w-3.5 h-3.5 fill-[#f0c040] text-[#f0c040]" />
                          {item.rating}
                        </div>
                      </div>
                      <button
                        onClick={() => handleAddToCart(item)}
                        className="w-full py-2.5 bg-[var(--primary)] text-white rounded-lg text-[13px] font-semibold hover:bg-[var(--primary-dark)] transition flex items-center justify-center gap-2"
                      >
                        <ShoppingBag className="w-4 h-4" />
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
