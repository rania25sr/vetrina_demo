"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { products, categories } from "@/data/fakeData";
import { useCart } from "@/components/CartContext";
import { useWishlist } from "@/components/WishlistContext";
import { useToast } from "@/components/ToastProvider";
import { Heart, Star, Filter, SlidersHorizontal, ShoppingBag } from "lucide-react";

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const { showToast } = useToast();

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

  const filtered =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <>
      <Header />
      <main>
        <div className="bg-[var(--bg-warm)] py-16">
          <div className="container-main text-center">
            <h1 className="text-4xl md:text-5xl text-[var(--primary)] mb-4">All Products</h1>
            <p className="text-lg text-[var(--text-muted)] max-w-xl mx-auto">
              Browse {products.length} curated products from verified Tunisian sellers
            </p>
          </div>
        </div>

        <section className="py-12">
          <div className="container-main">
            {/* Filters */}
            <div className="flex flex-wrap items-center gap-3 mb-10">
              <div className="flex items-center gap-2 text-sm font-semibold text-[var(--text-muted)] mr-2">
                <SlidersHorizontal className="w-4 h-4" />
                Filter:
              </div>
              <button
                onClick={() => setSelectedCategory("All")}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  selectedCategory === "All"
                    ? "bg-[var(--primary)] text-white"
                    : "bg-[var(--bg)] text-[var(--text-muted)] hover:bg-[var(--bg-warm)]"
                }`}
              >
                All
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.name)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                    selectedCategory === cat.name
                      ? "bg-[var(--primary)] text-white"
                      : "bg-[var(--bg)] text-[var(--text-muted)] hover:bg-[var(--bg-warm)]"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filtered.map((product) => (
                <div
                  key={product.id}
                  className="bg-[var(--bg)] rounded-[var(--radius-md)] overflow-hidden transition hover:-translate-y-1 hover:shadow-lg group"
                >
                  <div className="aspect-square bg-[var(--bg-warm)] relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <button
                      onClick={() => toggleWishlist(product)}
                      className={`absolute top-3 right-3 w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-sm transition hover:scale-110 ${
                        isInWishlist(product.id) ? "bg-red-50" : ""
                      }`}
                    >
                      <Heart
                        className={`w-[18px] h-[18px] transition ${
                          isInWishlist(product.id)
                            ? "fill-red-500 text-red-500"
                            : "text-[var(--text)]"
                        }`}
                      />
                    </button>
                  </div>
                  <div className="p-4">
                    <div className="text-xs text-[var(--text-muted)] mb-1">by {product.seller}</div>
                    <div className="text-[15px] font-semibold mb-2">{product.name}</div>
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
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="w-full py-2.5 bg-[var(--primary)] text-white rounded-lg text-[13px] font-semibold hover:bg-[var(--primary-dark)] transition flex items-center justify-center gap-2"
                    >
                      <ShoppingBag className="w-4 h-4" />
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="text-center py-20 text-[var(--text-muted)]">
                <Filter className="w-12 h-12 mx-auto mb-4 opacity-40" />
                <p className="text-lg">No products found in this category.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
