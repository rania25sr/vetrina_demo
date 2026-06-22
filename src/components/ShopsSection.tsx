"use client";

import { useState } from "react";
import { shops } from "@/data/fakeData";
import { useToast } from "@/components/ToastProvider";
import { Check } from "lucide-react";

export default function ShopsSection() {
  const { showToast } = useToast();
  const [followedShops, setFollowedShops] = useState<Set<number>>(new Set());

  const handleFollow = (shop: (typeof shops)[0]) => {
    setFollowedShops((prev) => {
      const next = new Set(prev);
      if (next.has(shop.id)) {
        next.delete(shop.id);
        showToast(`Unfollowed ${shop.name}`, "info");
      } else {
        next.add(shop.id);
        showToast(`Following ${shop.name}!`, "success");
      }
      return next;
    });
  };

  return (
    <section className="py-20">
      <div className="container-main">
        <div className="section-header">
          <h2>New Shops on Vetrina</h2>
          <p>Welcome the latest sellers to our marketplace</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {shops.slice(0, 4).map((shop) => {
            const isFollowed = followedShops.has(shop.id);
            return (
              <div
                key={shop.id}
                className="bg-white rounded-[var(--radius-md)] overflow-hidden shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="aspect-[16/10] bg-[var(--bg-warm)] relative">
                  <img src={shop.image} alt={shop.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <div className="text-[15px] font-semibold mb-1">{shop.name}</div>
                  <div className="text-[13px] text-[var(--text-muted)] mb-3">{shop.category}</div>
                  <div className="flex items-center justify-between text-xs text-[var(--text-muted)] mb-3">
                    <span>{shop.products} products</span>
                    <span>{shop.followers.toLocaleString()} followers</span>
                  </div>
                  <button
                    onClick={() => handleFollow(shop)}
                    className={`w-full py-2.5 rounded-lg text-[13px] font-semibold transition text-center flex items-center justify-center gap-2 ${
                      isFollowed
                        ? "bg-[var(--primary)] text-white border border-[var(--primary)]"
                        : "border border-[var(--border)] text-[var(--text)] hover:bg-[var(--primary)] hover:text-white hover:border-[var(--primary)]"
                    }`}
                  >
                    {isFollowed && <Check className="w-4 h-4" />}
                    {isFollowed ? "Followed" : "Follow"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
