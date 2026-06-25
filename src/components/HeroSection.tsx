"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { products } from "@/data/fakeData";

export default function HeroSection() {
  const slides = products.map((p) => p.image);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative w-full h-[420px] sm:h-[520px] md:h-[620px] lg:h-[720px] overflow-hidden bg-[var(--bg)]">
      {slides.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={src}
            alt="Product"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}

      {/* Centered content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6 z-10">
        <span className="inline-block text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full mb-5">
          Bienvenue sur Vetrina
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-medium mb-6 drop-shadow-lg">
          Shop Local, Shine Together
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mb-8 drop-shadow">
          Découvrez des produits uniques créés par des artisans tunisiens.
        </p>
        <Link
          href="/products"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[var(--primary)] rounded-full text-sm sm:text-base font-semibold hover:bg-[var(--primary)] hover:text-white hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300"
        >
          Discover
        </Link>
      </div>

      {/* Dots indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === current
                ? "bg-white w-8"
                : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
