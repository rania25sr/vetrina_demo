import Link from "next/link";
import { ArrowRight, Shield, CreditCard, Clock } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-[var(--bg-warm)] to-[var(--bg)] py-16 md:py-20 overflow-hidden">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="max-w-xl">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[var(--primary-light)] bg-[#2d5a4514] px-3.5 py-1.5 rounded-full mb-6">
              Shop Local, Shine Together
            </span>
            <h1 className="text-4xl md:text-[52px] text-[var(--primary)] mb-5 leading-tight">
              Because every <span className="italic text-[var(--accent)]">business</span> deserves to be seen
            </h1>
            <p className="text-lg text-[var(--text-muted)] mb-8 leading-relaxed">
              The digital mall for Tunisian small businesses. Zero technical skills. Zero setup cost. Just your products, seen by thousands.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link href="/products" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[var(--primary)] text-white rounded-full text-sm font-semibold hover:bg-[var(--primary-dark)] hover:-translate-y-0.5 hover:shadow-md transition">
                Shop Now
              </Link>
              <Link href="/sellers" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-[var(--text)] border border-[var(--border)] rounded-full text-sm font-semibold hover:border-[var(--primary)] hover:text-[var(--primary)] hover:-translate-y-0.5 hover:shadow-md transition">
                Explore for Sellers
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2.5 text-sm text-[var(--text-muted)]">
                <Shield className="w-5 h-5 text-[var(--primary)]" />
                Verified sellers only
              </div>
              <div className="flex items-center gap-2.5 text-sm text-[var(--text-muted)]">
                <CreditCard className="w-5 h-5 text-[var(--primary)]" />
                Secure payments
              </div>
              <div className="flex items-center gap-2.5 text-sm text-[var(--text-muted)]">
                <Clock className="w-5 h-5 text-[var(--primary)]" />
                Simple & fast ordering
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative flex items-center justify-center min-h-[400px] lg:min-h-[500px]">
            <div className="relative w-full max-w-md lg:max-w-[480px] aspect-square bg-[var(--primary)] rounded-[var(--radius-xl)] overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=800&fit=crop"
                alt="Vetrina shopping bag"
                className="w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-12 text-center text-white bg-gradient-to-t from-[rgba(26,60,43,0.7)] to-transparent">
                <div className="w-20 h-20 bg-white/15 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-md p-3">
                  <img src="/logo.png" alt="Vetrina" className="w-full h-full object-contain invert" />
                </div>
                <h3 className="text-3xl font-serif mb-1">VETRINA</h3>
                <p className="text-sm opacity-90">Shop Local, Shine Together</p>
              </div>
            </div>

            {/* Floating review cards - hidden on mobile */}
            <div className="hidden lg:block absolute top-8 -left-4 bg-white rounded-xl p-4 shadow-lg animate-[float_6s_ease-in-out_infinite]">
              <div className="flex gap-0.5 mb-1.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#f0c040">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed max-w-[180px]">
                "My sales tripled in the first month. Vetrina brought me customers I never knew existed."
              </p>
              <p className="text-xs font-semibold mt-1.5 text-[var(--text)]">— Amal, Bijoux by Amal</p>
            </div>

            <div className="hidden lg:block absolute bottom-16 -right-6 bg-white rounded-xl p-4 shadow-lg animate-[float_6s_ease-in-out_infinite_3s]">
              <div className="flex gap-0.5 mb-1.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#f0c040">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed max-w-[180px]">
                "Finally, a platform that understands small artisans. The dashboard is incredibly simple."
              </p>
              <p className="text-xs font-semibold mt-1.5 text-[var(--text)]">— Karim, Terre & Feu</p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
