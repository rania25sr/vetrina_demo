"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useCart } from "@/components/CartContext";
import { useWishlist } from "@/components/WishlistContext";
import { useToast } from "@/components/ToastProvider";
import { categories } from "@/data/fakeData";
import {
  Menu,
  X,
  Search,
  User,
  Heart,
  ShoppingCart,
  Instagram,
  Facebook,
  Music2,
  Phone,
} from "lucide-react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { cartCount } = useCart();
  const { wishlistCount } = useWishlist();
  const { showToast } = useToast();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Announcement */}
      <div className="bg-[var(--primary)] text-white py-2.5 text-[13px] font-medium">
        <div className="container-main flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Phone className="w-3.5 h-3.5" />
            <span>Call us on +216 xx xxx xxx</span>
            <span className="hidden sm:inline">|</span>
            <span className="hidden sm:inline">Free shipping for orders &gt; 200 TND</span>
          </div>
          <div className="flex gap-4">
            <a href="https://instagram.com/vetrina.shop" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="opacity-80 hover:opacity-100 transition">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="https://facebook.com/vetrina.shop" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="opacity-80 hover:opacity-100 transition">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="https://tiktok.com/@vetrina.shop" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="opacity-80 hover:opacity-100 transition">
              <Music2 className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Header */}
      <header
        className="bg-white sticky top-0 z-50 border-b border-[var(--border)] transition-shadow"
        style={{ boxShadow: scrolled ? "0 4px 20px rgba(0,0,0,0.06)" : "none" }}
      >
        <div className="container-main flex items-center justify-between h-[72px]">
          <Link href="/" className="flex items-center gap-2.5 font-serif text-[26px] font-bold text-[var(--primary)] tracking-tight">
            <img src="/vetrinademo/logo.png" alt="Vetrina" width="32" height="32" className="object-contain" />
            VETRINA
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {/* Categories dropdown */}
            <div className="relative group py-6 -my-6">
              <Link
                href="/categories"
                className="text-sm font-medium text-[var(--text)] hover:text-[var(--primary)] transition relative"
              >
                Categories
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--accent)] transition-all group-hover:w-full" />
              </Link>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="bg-white border border-[var(--border)] rounded-xl shadow-lg py-2 min-w-[220px]">
                  {categories.map((cat) => (
                    <Link
                      key={cat.id}
                      href={`/products?category=${encodeURIComponent(cat.name)}`}
                      className="block px-4 py-2.5 text-sm text-[var(--text)] hover:bg-[var(--bg)] hover:text-[var(--primary)] transition"
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="/products"
              className="text-sm font-medium text-[var(--text)] hover:text-[var(--primary)] transition relative group"
            >
              Products
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--accent)] transition-all group-hover:w-full" />
            </Link>
            <Link
              href="/shops"
              className="text-sm font-medium text-[var(--text)] hover:text-[var(--primary)] transition relative group"
            >
              Shops
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--accent)] transition-all group-hover:w-full" />
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-[var(--text)] hover:text-[var(--primary)] transition relative group"
            >
              About Us
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--accent)] transition-all group-hover:w-full" />
            </Link>
          </nav>

          <div className="flex items-center gap-5">
            <div className="hidden lg:flex items-center bg-[var(--bg)] border border-[var(--border)] rounded-full px-4 py-2 gap-2 w-[260px]">
              <Search className="w-4 h-4 text-[var(--text-muted)] shrink-0" />
              <input
                type="text"
                placeholder="Search for products, shops..."
                className="bg-transparent text-[13px] outline-none w-full placeholder:text-[var(--text-light)]"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    const val = (e.target as HTMLInputElement).value;
                    if (val.trim()) {
                      showToast(`Searching for "${val.trim()}"...`, "info");
                    }
                  }
                }}
              />
            </div>
            <button
              className="p-2 hover:scale-110 transition"
              aria-label="Account"
              onClick={() => showToast("Account login coming soon!", "info")}
            >
              <User className="w-[22px] h-[22px] text-[var(--text)]" />
            </button>
            <Link
              href="/wishlist"
              className="p-2 hover:scale-110 transition relative"
              aria-label="Wishlist"
            >
              <Heart className="w-[22px] h-[22px] text-[var(--text)]" />
              {wishlistCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {wishlistCount > 9 ? "9+" : wishlistCount}
                </span>
              )}
            </Link>
            <Link
              href="/cart"
              className="p-2 hover:scale-110 transition relative"
              aria-label="Cart"
              onClick={() => {
                if (cartCount === 0) showToast("Your cart is empty. Explore products!", "info");
              }}
            >
              <ShoppingCart className="w-[22px] h-[22px] text-[var(--text)]" />
              {cartCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-[var(--primary)] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {cartCount > 9 ? "9+" : cartCount}
                </span>
              )}
            </Link>
            <button
              className="md:hidden p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="md:hidden bg-white border-b border-[var(--border)] px-6 py-6 flex flex-col gap-5 shadow-lg">
            <Link
              href="/categories"
              className="text-base font-medium py-2 border-b border-[var(--border)]"
              onClick={() => setMobileOpen(false)}
            >
              Categories
            </Link>
            <div className="pl-4 flex flex-col gap-2 border-l-2 border-[var(--border)]">
              {categories.map((cat) => (
                <Link
                  key={cat.id}
                  href={`/products?category=${encodeURIComponent(cat.name)}`}
                  className="text-sm text-[var(--text-muted)] hover:text-[var(--primary)]"
                  onClick={() => setMobileOpen(false)}
                >
                  {cat.name}
                </Link>
              ))}
            </div>
            <Link
              href="/products"
              className="text-base font-medium py-2 border-b border-[var(--border)]"
              onClick={() => setMobileOpen(false)}
            >
              Products
            </Link>
            <Link
              href="/shops"
              className="text-base font-medium py-2 border-b border-[var(--border)]"
              onClick={() => setMobileOpen(false)}
            >
              Shops
            </Link>
            <Link
              href="/about"
              className="text-base font-medium py-2 border-b border-[var(--border)]"
              onClick={() => setMobileOpen(false)}
            >
              About Us
            </Link>
          </div>
        )}
      </header>
    </>
  );
}
