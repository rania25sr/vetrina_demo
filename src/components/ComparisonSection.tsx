"use client";

import { useState } from "react";
import { comparisonData } from "@/data/fakeData";
import { Check, X } from "lucide-react";

export default function ComparisonSection() {
  const [activeTab, setActiveTab] = useState<"facebook" | "shopify">("facebook");

  const data = activeTab === "facebook" ? comparisonData.facebook : comparisonData.shopify;
  const otherLabel = activeTab === "facebook" ? "Facebook Marketplace" : "Shopify / Converty";

  return (
    <section className="py-20 bg-white">
      <div className="container-main">
        <div className="section-header">
          <h2>How We Compare</h2>
          <p>See why Vetrina is the smarter choice for Tunisian sellers</p>
        </div>

        <div className="flex justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveTab("facebook")}
            className={`px-6 py-3 rounded-full text-sm font-semibold transition ${
              activeTab === "facebook" ? "bg-[var(--primary)] text-white" : "bg-[var(--bg)] text-[var(--text-muted)] hover:bg-[var(--bg-warm)] hover:text-[var(--text)]"
            }`}
          >
            vs Facebook
          </button>
          <button
            onClick={() => setActiveTab("shopify")}
            className={`px-6 py-3 rounded-full text-sm font-semibold transition ${
              activeTab === "shopify" ? "bg-[var(--primary)] text-white" : "bg-[var(--bg)] text-[var(--text-muted)] hover:bg-[var(--bg-warm)] hover:text-[var(--text)]"
            }`}
          >
            vs Shopify/Converty
          </button>
        </div>

        <div className="max-w-[800px] mx-auto rounded-[var(--radius-lg)] overflow-hidden shadow-md">
          <div className="grid grid-cols-[1.5fr_1fr_1fr] bg-[var(--primary)] text-white font-semibold text-sm">
            <div className="px-6 py-4">Feature</div>
            <div className="px-6 py-4">{otherLabel}</div>
            <div className="px-6 py-4">Vetrina</div>
          </div>
          {data.map((row, i) => (
            <div
              key={row.feature}
              className={`grid grid-cols-[1.5fr_1fr_1fr] border-b border-[var(--border)] text-sm ${
                i % 2 === 0 ? "bg-[var(--bg)]" : "bg-white"
              }`}
            >
              <div className="px-6 py-4 font-medium">{row.feature}</div>
              <div className="px-6 py-4 text-[var(--text-muted)] flex items-center gap-2">
                <X className="w-4 h-4 text-[var(--text-light)] shrink-0" />
                {row.other}
              </div>
              <div className={`px-6 py-4 font-semibold text-[var(--success)] flex items-center gap-2 ${
                row.highlight ? "bg-[rgba(200,169,126,0.08)]" : ""
              }`}>
                <Check className="w-4 h-4 shrink-0" />
                {row.vetrina}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
