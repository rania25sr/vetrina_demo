"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { products } from "@/data/fakeData";
import { useCart } from "@/components/CartContext";
import { useWishlist } from "@/components/WishlistContext";
import { useToast } from "@/components/ToastProvider";
import { Heart, Star, ShoppingBag, ArrowLeft, MapPin, Truck, Shield, RotateCcw } from "lucide-react";

type Product = {
  id: number;
  name: string;
  seller: string;
  category: string;
  price: number;
  oldPrice: number | null;
  image: string;
  rating: number;
  reviews: number;
  city: string;
};

export default function ProductDetailClient({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const { showToast } = useToast();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleWishlist = () => {
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

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      seller: product.seller,
    });
    showToast(`${product.name} added to cart!`, "success");
  };

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <>
      <Header />
      <main>
        <div className="bg-[var(--bg-warm)] py-6">
          <div className="container-main">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[var(--primary)] transition"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to products
            </Link>
          </div>
        </div>

        <section className="py-12">
          <div className="container-main">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="aspect-square rounded-[var(--radius-lg)] overflow-hidden bg-[var(--bg-warm)]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex flex-col">
                <div className="text-sm text-[var(--text-muted)] mb-2">
                  by <span className="font-medium text-[var(--text)]">{product.seller}</span>
                </div>
                <h1 className="text-3xl md:text-4xl text-[var(--primary)] mb-3">{product.name}</h1>

                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.round(product.rating)
                            ? "fill-[#f0c040] text-[#f0c040]"
                            : "text-[var(--border)]"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-[var(--text-muted)]">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>

                <div className="flex items-baseline gap-3 mb-6">
                  <span className="text-3xl font-bold text-[var(--primary)]">
                    {product.price} TND
                  </span>
                  {product.oldPrice && (
                    <span className="text-lg text-[var(--text-light)] line-through">
                      {product.oldPrice} TND
                    </span>
                  )}
                  {product.oldPrice && (
                    <span className="text-sm font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                      -{Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}%
                    </span>
                  )}
                </div>

                <div className="border-t border-b border-[var(--border)] py-5 mb-6 space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <MapPin className="w-4 h-4 text-[var(--text-muted)]" />
                    <span className="text-[var(--text-muted)]">Ships from</span>
                    <span className="font-medium">{product.city}, Tunisia</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Truck className="w-4 h-4 text-[var(--text-muted)]" />
                    <span className="text-[var(--text-muted)]">Delivery</span>
                    <span className="font-medium">2-5 business days</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Shield className="w-4 h-4 text-[var(--text-muted)]" />
                    <span className="text-[var(--text-muted)]">Seller</span>
                    <span className="font-medium">Verified</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-sm font-semibold mb-2">About this product</h3>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                    Discover the {product.name} — a carefully crafted product from {product.seller}, 
                    based in {product.city}. This item belongs to our {product.category} collection 
                    and has been loved by {product.reviews} customers with an average rating of {product.rating}/5.
                    Each piece is made with attention to detail and authentic Tunisian craftsmanship.
                  </p>
                </div>

                <div className="flex gap-3 mt-auto">
                  <button
                    onClick={handleAddToCart}
                    className="flex-1 py-3.5 bg-[var(--primary)] text-white rounded-lg text-sm font-semibold hover:bg-[var(--primary-dark)] transition flex items-center justify-center gap-2"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    Add to Cart
                  </button>
                  <button
                    onClick={toggleWishlist}
                    className={`w-14 h-14 border rounded-lg flex items-center justify-center transition ${
                      mounted && isInWishlist(product.id)
                        ? "border-red-200 bg-red-50"
                        : "border-[var(--border)] hover:bg-[var(--bg-warm)]"
                    }`}
                  >
                    <Heart
                      className={`w-5 h-5 ${
                        mounted && isInWishlist(product.id)
                          ? "fill-red-500 text-red-500"
                          : "text-[var(--text-muted)]"
                      }`}
                    />
                  </button>
                </div>

                <div className="grid grid-cols-3 gap-3 mt-6">
                  <div className="flex flex-col items-center text-center p-3 bg-[var(--bg-warm)] rounded-lg">
                    <Shield className="w-5 h-5 text-[var(--primary)] mb-1" />
                    <span className="text-xs text-[var(--text-muted)]">Buyer Protection</span>
                  </div>
                  <div className="flex flex-col items-center text-center p-3 bg-[var(--bg-warm)] rounded-lg">
                    <RotateCcw className="w-5 h-5 text-[var(--primary)] mb-1" />
                    <span className="text-xs text-[var(--text-muted)]">Easy Returns</span>
                  </div>
                  <div className="flex flex-col items-center text-center p-3 bg-[var(--bg-warm)] rounded-lg">
                    <Truck className="w-5 h-5 text-[var(--primary)] mb-1" />
                    <span className="text-xs text-[var(--text-muted)]">Fast Shipping</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {relatedProducts.length > 0 && (
          <section className="py-12 bg-[var(--bg-warm)]">
            <div className="container-main">
              <h2 className="text-2xl text-[var(--primary)] mb-8">You may also like</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {relatedProducts.map((rp) => (
                  <Link key={rp.id} href={`/products/${rp.id}`} className="group">
                    <div className="bg-white rounded-[var(--radius-md)] overflow-hidden transition hover:-translate-y-1 hover:shadow-lg">
                      <div className="aspect-square bg-[var(--bg-warm)] overflow-hidden">
                        <img
                          src={rp.image}
                          alt={rp.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-4">
                        <div className="text-[14px] font-semibold mb-1">{rp.name}</div>
                        <div className="text-[14px] font-bold text-[var(--primary)]">
                          {rp.price} TND
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
