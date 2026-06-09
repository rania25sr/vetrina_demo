import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Truck, Package, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ShippingPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <div className="bg-[var(--bg-warm)] py-16">
          <div className="container-main text-center">
            <h1 className="text-4xl md:text-5xl text-[var(--primary)] mb-4">Shipping & Returns</h1>
            <p className="text-lg text-[var(--text-muted)] max-w-2xl mx-auto">
              How delivery works on Vetrina.
            </p>
          </div>
        </div>

        {/* Info Section */}
        <section className="py-16">
          <div className="container-main max-w-3xl mx-auto">
            <div className="bg-white rounded-[var(--radius-lg)] border border-[var(--border)] shadow-sm p-8 md:p-12 text-center">
              <div className="w-16 h-16 bg-[var(--bg-warm)] rounded-xl flex items-center justify-center mx-auto mb-6 text-[var(--primary)]">
                <Truck className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-semibold text-[var(--primary)] mb-4">
                Shipping is not a concern of Vetrina
              </h2>
              <p className="text-[var(--text-muted)] leading-relaxed mb-6">
                Vetrina is a marketplace that connects buyers with verified local sellers. 
                We do not handle shipping, delivery, or returns directly.
              </p>
              <p className="text-[var(--text-muted)] leading-relaxed mb-8">
                Each seller manages their own shipping and returns independently. 
                When you place an order, you will coordinate directly with the seller to arrange delivery, 
                payment, and any returns. This gives sellers full control and keeps costs transparent.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <div className="flex items-center gap-3 px-6 py-4 bg-[var(--bg-warm)] rounded-lg">
                  <Package className="w-6 h-6 text-[var(--primary)]" />
                  <div className="text-left">
                    <div className="text-sm font-semibold text-[var(--primary)]">Delivery</div>
                    <div className="text-xs text-[var(--text-muted)]">Managed by the seller</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 px-6 py-4 bg-[var(--bg-warm)] rounded-lg">
                  <Truck className="w-6 h-6 text-[var(--primary)]" />
                  <div className="text-left">
                    <div className="text-sm font-semibold text-[var(--primary)]">Returns</div>
                    <div className="text-xs text-[var(--text-muted)]">Managed by the seller</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/faq"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--primary)] hover:text-[var(--accent)] transition"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to FAQ
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
