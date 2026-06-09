import Link from "next/link";
import { ArrowRight, Monitor } from "lucide-react";

export default function SellerBanner() {
  return (
    <section className="bg-[var(--primary)] text-white py-12">
      <div className="container-main flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
          <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
            <Monitor className="w-8 h-8" />
          </div>
          <div>
            <h3 className="text-2xl font-serif mb-1">Are you a seller?</h3>
            <p className="text-[15px] opacity-85">
              Join Vetrina and be a part of the journey. Your boutique online in 5 minutes — no website needed.
            </p>
          </div>
        </div>
        <Link
          href="/sellers"
          className="inline-flex items-center gap-2 px-7 py-3.5 bg-[var(--accent)] text-white rounded-full text-sm font-semibold hover:bg-[var(--accent-hover)] transition shrink-0"
        >
          Start Selling Now
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
