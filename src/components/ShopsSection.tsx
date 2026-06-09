"use client";

import { shops } from "@/data/fakeData";
import { useToast } from "@/components/ToastProvider";
import { CheckCircle } from "lucide-react";

export default function ShopsSection() {
  const { showToast } = useToast();

  return (
    <section className="py-20">
      <div className="container-main">
        <div className="section-header">
          <h2>New Shops on Vetrina</h2>
          <p>Welcome the latest verified sellers to our marketplace</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {shops.slice(0, 4).map((shop) => (
            <div
              key={shop.id}
              className="bg-white rounded-[var(--radius-md)] overflow-hidden shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="aspect-[16/10] bg-[var(--bg-warm)] relative">
                <img src={shop.image} alt={shop.name} className="w-full h-full object-cover" />
                {shop.verified && (
                  <div className="absolute top-3 left-3 bg-white px-2.5 py-1 rounded-full text-[11px] font-semibold text-[var(--primary)] flex items-center gap-1 shadow-sm">
                    <CheckCircle className="w-3.5 h-3.5 fill-[var(--success)] text-white" />
                    Verified
                  </div>
                )}
              </div>
              <div className="p-4">
                <div className="text-[15px] font-semibold mb-1">{shop.name}</div>
                <div className="text-[13px] text-[var(--text-muted)] mb-3">{shop.category}</div>
                <div className="flex items-center justify-between text-xs text-[var(--text-muted)] mb-3">
                  <span>{shop.products} products</span>
                  <span>{shop.followers.toLocaleString()} followers</span>
                </div>
                <a
                  href="https://instagram.com/vetrina.shop"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => showToast(`Following ${shop.name} on Instagram!`, "success")}
                  className="w-full py-2.5 border border-[var(--border)] rounded-lg text-[13px] font-semibold text-[var(--text)] hover:bg-[var(--primary)] hover:text-white hover:border-[var(--primary)] transition text-center block"
                >
                  Follow
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
