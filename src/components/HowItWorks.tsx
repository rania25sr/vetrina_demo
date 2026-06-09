import { howItWorks } from "@/data/fakeData";

export default function HowItWorks() {
  return (
    <section className="py-20">
      <div className="container-main">
        <div className="section-header">
          <h2>How It Works for Sellers</h2>
          <p>From signup to your first sale in four simple steps</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {howItWorks.map((step, index) => (
            <div
              key={step.step}
              className="bg-white rounded-[var(--radius-lg)] p-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg relative"
            >
              <div className="w-14 h-14 bg-[var(--bg-warm)] rounded-xl flex items-center justify-center mx-auto mb-5 font-serif text-2xl font-bold text-[var(--primary)]">
                {step.step}
              </div>
              <h4 className="text-lg font-semibold mb-2.5">{step.title}</h4>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
