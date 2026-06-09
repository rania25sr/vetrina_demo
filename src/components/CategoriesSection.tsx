"use client";

import Link from "next/link";
import { categories } from "@/data/fakeData";

export default function CategoriesSection() {
  return (
    <section className="py-20">
      <div className="container-main">
        <div className="section-header">
          <h2>Shop by Category</h2>
          <p>Discover curated collections from Tunisia&apos;s finest local creators</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
          {categories.map((cat) => (
            <Link key={cat.id} href="/products" className="text-center cursor-pointer group">
              <div className="aspect-square rounded-[var(--radius-md)] overflow-hidden mb-3 bg-[var(--bg-warm)] shadow-sm transition-shadow group-hover:shadow-lg">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h4 className="text-sm font-medium">{cat.name}</h4>
              <p className="text-xs text-[var(--text-muted)] mt-0.5">{cat.count} products</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
