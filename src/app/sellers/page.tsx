import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HowItWorks from "@/components/HowItWorks";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import { ArrowRight, TrendingUp, Globe, Shield, Smartphone } from "lucide-react";
import Link from "next/link";

export default function SellersPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero for sellers */}
        <div className="bg-[var(--primary)] text-white py-20 md:py-28">
          <div className="container-main text-center">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest bg-white/10 px-4 py-2 rounded-full mb-6">
              For Sellers
            </span>
            <h1 className="text-4xl md:text-[52px] mb-5 leading-tight">
              Your online shop, <span className="italic text-[var(--accent)]">without</span> the headache
            </h1>
            <p className="text-lg opacity-85 max-w-2xl mx-auto mb-10">
              Join 47+ verified Tunisian sellers already reaching 12,000+ monthly buyers. No website needed. No technical skills. Just upload your products and start selling.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="mailto:contact@vetrina.shop"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--accent)] text-white rounded-full text-base font-semibold hover:bg-[var(--accent-hover)] transition"
              >
                Start Selling Free
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/seller-dashboard"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white border border-white/20 rounded-full text-base font-semibold hover:bg-white/20 transition"
              >
                View Dashboard Demo
              </Link>
            </div>
          </div>
        </div>

        {/* Quick stats for sellers */}
        <div className="bg-white border-b border-[var(--border)] py-10">
          <div className="container-main">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <TrendingUp className="w-8 h-8 text-[var(--primary)] mx-auto mb-3" />
                <h3 className="text-2xl font-bold text-[var(--primary)] mb-1">3x</h3>
                <p className="text-sm text-[var(--text-muted)]">Average sales increase</p>
              </div>
              <div className="text-center">
                <Globe className="w-8 h-8 text-[var(--primary)] mx-auto mb-3" />
                <h3 className="text-2xl font-bold text-[var(--primary)] mb-1">12K+</h3>
                <p className="text-sm text-[var(--text-muted)]">Monthly visitors</p>
              </div>
              <div className="text-center">
                <Shield className="w-8 h-8 text-[var(--primary)] mx-auto mb-3" />
                <h3 className="text-2xl font-bold text-[var(--primary)] mb-1">100%</h3>
                <p className="text-sm text-[var(--text-muted)]">Verified sellers</p>
              </div>
              <div className="text-center">
                <Smartphone className="w-8 h-8 text-[var(--primary)] mx-auto mb-3" />
                <h3 className="text-2xl font-bold text-[var(--primary)] mb-1">5 min</h3>
                <p className="text-sm text-[var(--text-muted)]">To upload a product</p>
              </div>
            </div>
          </div>
        </div>

        <HowItWorks />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
