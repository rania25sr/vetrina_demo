"use client";

import { useState } from "react";
import { pricingPlans } from "@/data/fakeData";
import { Check, X } from "lucide-react";

export default function PricingSection() {
  const [commissionMode, setCommissionMode] = useState(false);

  return (
    <section className="py-20 bg-white">
      <div className="container-main">
        <div className="section-header">
          <h2>Simple, Transparent Pricing</h2>
          <p>Choose the plan that fits your business. No hidden fees, no surprises.</p>
        </div>

        <div className="flex items-center justify-center gap-4 mb-12">
          <span className={`text-sm font-medium ${!commissionMode ? "text-[var(--text)]" : "text-[var(--text-muted)]"}`}>
            Monthly Subscription
          </span>
          <button
            onClick={() => setCommissionMode(!commissionMode)}
            className={`w-12 h-[26px] rounded-full relative transition-colors ${
              commissionMode ? "bg-[var(--primary)]" : "bg-[var(--primary)]"
            }`}
            aria-label="Toggle pricing mode"
          >
            <span
              className={`absolute top-[3px] w-5 h-5 bg-white rounded-full transition-transform ${
                commissionMode ? "left-[3px] translate-x-[22px]" : "left-[3px]"
              }`}
            />
          </button>
          <span className={`text-sm font-medium ${commissionMode ? "text-[var(--text)]" : "text-[var(--text-muted)]"}`}>
            Commission per Sale
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[960px] mx-auto">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`bg-[var(--bg)] rounded-[var(--radius-lg)] p-8 md:p-10 text-center border-2 transition hover:-translate-y-1 hover:shadow-lg relative ${
                plan.popular ? "border-[var(--accent)] bg-white" : "border-transparent"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[var(--accent)] text-white px-4 py-1.5 rounded-full text-xs font-semibold">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
              <p className="text-sm text-[var(--text-muted)] mb-6">{plan.description}</p>
              <div className="text-[42px] font-bold text-[var(--primary)] mb-6">
                {commissionMode ? plan.commissionPrice : plan.subscriptionPrice}
                <span className="text-base font-normal text-[var(--text-muted)]">
                  {commissionMode ? "/sale" : plan.subscriptionPrice === "Free" ? "" : "/month"}
                </span>
              </div>
              <ul className="text-left mb-8 space-y-0">
                {plan.features.map((feature) => (
                  <li
                    key={feature.text}
                    className={`flex items-center gap-2.5 py-2.5 border-b border-[var(--border)] text-sm ${
                      feature.included ? "" : "text-[var(--text-light)]"
                    }`}
                  >
                    {feature.included ? (
                      <Check className="w-[18px] h-[18px] text-[var(--success)] shrink-0" strokeWidth={2.5} />
                    ) : (
                      <X className="w-[18px] h-[18px] text-[var(--text-light)] shrink-0" strokeWidth={2.5} />
                    )}
                    {feature.text}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 rounded-full text-sm font-semibold transition ${
                  plan.popular
                    ? "bg-[var(--primary)] text-white hover:bg-[var(--primary-dark)]"
                    : "bg-white border border-[var(--border)] text-[var(--text)] hover:border-[var(--primary)] hover:text-[var(--primary)]"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
