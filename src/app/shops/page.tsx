"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { shops } from "@/data/fakeData";
import { useToast } from "@/components/ToastProvider";
import { MapPin, Package, Users } from "lucide-react";

export default function ShopsPage() {
  const { showToast } = useToast();

  return (
    <>
      <Header />
      <main>
        <div className="bg-[var(--bg-warm)] py-16">
          <div className="container-main text-center">
            <h1 className="text-4xl md:text-5xl text-[var(--primary)] mb-4">All Shops</h1>
            <p className="text-lg text-[var(--text-muted)] max-w-xl mx-auto">
              Discover {shops.length} Tunisian sellers across 8 cities
            </p>
          </div>
        </div>
        <section className="py-16">
          <div className="container-main">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {shops.map((shop) => (
                <div
                  key={shop.id}
                  className="bg-white rounded-[var(--radius-md)] overflow-hidden shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="aspect-[16/10] bg-[var(--bg-warm)] relative">
                    <img src={shop.image} alt={shop.name} className="w-full h-full object-cover" />

                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-1">
                      <div className="text-[15px] font-semibold">{shop.name}</div>
                      <div className="flex items-center gap-1 text-xs text-[var(--text-muted)]">
                        <MapPin className="w-3 h-3" />
                        {shop.city}
                      </div>
                    </div>
                    <div className="text-[13px] text-[var(--text-muted)] mb-3">{shop.category}</div>
                    <div className="flex items-center justify-between text-xs text-[var(--text-muted)] mb-3">
                      <span className="flex items-center gap-1">
                        <Package className="w-3 h-3" />
                        {shop.products} products
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        {shop.followers.toLocaleString()}
                      </span>
                    </div>
                    <a
                      href="https://instagram.com/vetrina.shop"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => showToast(`Following ${shop.name} on Instagram!`, "success")}
                      className="w-full py-2.5 border border-[var(--border)] rounded-lg text-[13px] font-semibold text-[var(--text)] hover:bg-[var(--primary)] hover:text-white hover:border-[var(--primary)] transition text-center block"
                    >
                      Follow Shop
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
