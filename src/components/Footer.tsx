"use client";

import Link from "next/link";
import {
  Instagram,
  Facebook,
  Music2,
  Mail,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[var(--primary-dark)] text-white pt-16">
      <div className="container-main">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 font-serif text-[26px] font-bold text-white tracking-tight mb-4">
              <img src="/logo.png" alt="Vetrina" width="32" height="32" className="object-contain invert" />
              VETRINA
            </Link>
            <p className="text-sm opacity-70 leading-relaxed mb-5">
              The digital mall for Tunisian small businesses. Giving local creators the visibility they deserve.
            </p>
            <div className="flex gap-3">
              <a href="https://instagram.com/vetrina.shop" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://facebook.com/vetrina.shop" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://tiktok.com/@vetrina.shop" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition">
                <Music2 className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide mb-5">Explore</h4>
            <ul className="space-y-2.5">
              <li><Link href="/categories" className="text-sm opacity-70 hover:opacity-100 transition">Categories</Link></li>
              <li><Link href="/products" className="text-sm opacity-70 hover:opacity-100 transition">Popular Products</Link></li>
              <li><Link href="/products" className="text-sm opacity-70 hover:opacity-100 transition">New Arrivals</Link></li>
              <li><Link href="/shops" className="text-sm opacity-70 hover:opacity-100 transition">Shops</Link></li>
              <li><Link href="/about" className="text-sm opacity-70 hover:opacity-100 transition">About Us</Link></li>
            </ul>
          </div>

          {/* For Sellers */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide mb-5">For Sellers</h4>
            <ul className="space-y-2.5">
              <li><Link href="/sellers" className="text-sm opacity-70 hover:opacity-100 transition">Start Selling</Link></li>
              <li><Link href="/seller-dashboard" className="text-sm opacity-70 hover:opacity-100 transition">Seller Dashboard</Link></li>
              <li><Link href="/seller-demo" className="text-sm opacity-70 hover:opacity-100 transition">Watch Demo</Link></li>
              <li><Link href="/sellers" className="text-sm opacity-70 hover:opacity-100 transition">How It Works</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide mb-5">Support</h4>
            <ul className="space-y-2.5">
              <li><Link href="mailto:contact@vetrina.shop" className="text-sm opacity-70 hover:opacity-100 transition">Contact Us</Link></li>
              <li><Link href="/faq" className="text-sm opacity-70 hover:opacity-100 transition">FAQ</Link></li>
              <li><Link href="/shipping" className="text-sm opacity-70 hover:opacity-100 transition">Shipping</Link></li>
              <li><Link href="/shipping" className="text-sm opacity-70 hover:opacity-100 transition">Returns</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide mb-3">Newsletter</h4>
            <p className="text-sm opacity-70 mb-4">Get the latest updates and seller tips.</p>
            <form
              className="flex gap-2"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you for subscribing!");
              }}
            >
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-sm text-white placeholder:text-white/40 outline-none focus:border-white/40"
              />
              <button
                type="submit"
                className="px-4 py-3 bg-[var(--accent)] text-white rounded-lg text-sm font-semibold hover:bg-[var(--accent-hover)] transition"
              >
                <Mail className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 py-6 text-center text-[13px] opacity-60">
          <p>© 2026 Vetrina. All rights reserved. vetrina.shop</p>
        </div>
      </div>
    </footer>
  );
}
