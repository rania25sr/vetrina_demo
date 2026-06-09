"use client";

import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 md:py-28 bg-[var(--primary)] text-white text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.03)_0%,transparent_60%)]" />
      <div className="container-main relative z-10">
        <h2 className="text-3xl md:text-[42px] mb-4 font-serif">Become a Founding Seller</h2>
        <p className="text-lg opacity-85 max-w-[600px] mx-auto mb-8">
          Join the first 30 sellers and get 2 months of Pro completely free. No credit card. No commitment. Just your products, finally seen.
        </p>
        <Link
          href="/sellers"
          className="inline-flex items-center gap-2 px-9 py-4 bg-[var(--accent)] text-white rounded-full text-base font-semibold hover:bg-[var(--accent-hover)] transition"
        >
          Join Vetrina Today
          <ArrowRight className="w-5 h-5" />
        </Link>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 mt-10 text-sm opacity-80">
          <span className="flex items-center gap-2">
            <Check className="w-[18px] h-[18px] text-[var(--accent)]" strokeWidth={2.5} />
            2 Months Free
          </span>
          <span className="flex items-center gap-2">
            <Check className="w-[18px] h-[18px] text-[var(--accent)]" strokeWidth={2.5} />
            No Credit Card
          </span>
          <span className="flex items-center gap-2">
            <Check className="w-[18px] h-[18px] text-[var(--accent)]" strokeWidth={2.5} />
            Cancel Anytime
          </span>
        </div>
      </div>
    </section>
  );
}
