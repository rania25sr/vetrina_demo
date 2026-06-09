import { testimonials } from "@/data/fakeData";
import { Star } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section className="py-20">
      <div className="container-main">
        <div className="section-header">
          <h2>Seller Stories</h2>
          <p>Real results from real Tunisian businesses on Vetrina</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-[var(--radius-lg)] p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-[18px] h-[18px] ${
                      i < t.rating ? "fill-[#f0c040] text-[#f0c040]" : "text-[var(--border)]"
                    }`}
                  />
                ))}
              </div>
              <p className="text-[15px] leading-relaxed mb-6 text-[var(--text)]">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <img src={t.image} alt={t.author} className="w-11 h-11 rounded-full object-cover" />
                <div>
                  <h5 className="text-sm font-semibold">{t.author}</h5>
                  <span className="text-[13px] text-[var(--text-muted)]">
                    {t.shop} — {t.city}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
