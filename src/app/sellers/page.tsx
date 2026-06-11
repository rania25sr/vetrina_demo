import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HowItWorks from "@/components/HowItWorks";
import CTASection from "@/components/CTASection";
import { ArrowRight } from "lucide-react";
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

        <HowItWorks />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
