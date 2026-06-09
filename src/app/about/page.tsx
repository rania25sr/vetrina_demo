import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, Mail, Phone, Instagram, Facebook, Music2 } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <div className="bg-[var(--bg-warm)] py-16">
          <div className="container-main text-center">
            <h1 className="text-4xl md:text-5xl text-[var(--primary)] mb-4">About Vetrina</h1>
            <p className="text-lg text-[var(--text-muted)] max-w-2xl mx-auto">
              The first digital mall for Tunisian small businesses. We exist to give local creators the visibility they deserve.
            </p>
          </div>
        </div>

        <section className="py-16">
          <div className="container-main">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-3xl mb-6">Our Mission</h2>
                <p className="text-[var(--text-muted)] leading-relaxed mb-4">
                  Tunisia has over 200,000 small businesses — artisans, creators, shop owners, and entrepreneurs — who produce world-class products but remain invisible online.
                </p>
                <p className="text-[var(--text-muted)] leading-relaxed mb-4">
                  Most sell through Facebook groups, reaching only friends and family. Building a professional website costs 1,500–5,000 DT and requires skills they don&apos;t have. Running ads costs 300–800 DT per month — money most small businesses can&apos;t afford.
                </p>
                <p className="text-[var(--text-muted)] leading-relaxed">
                  Vetrina solves this by bringing every seller onto one shared platform. One website, shared traffic, mutual SEO, and a built-in audience of buyers actively looking for local products.
                </p>
              </div>
              <div className="rounded-[var(--radius-lg)] overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1556740758-90de374c12ad?w=600&h=500&fit=crop"
                  alt="Tunisian market"
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div className="order-2 lg:order-1 rounded-[var(--radius-lg)] overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=500&fit=crop"
                  alt="Tunisian artisan shop"
                  className="w-full h-auto"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl mb-6">Our Vision</h2>
                <p className="text-[var(--text-muted)] leading-relaxed mb-4">
                  <strong>Year 1 — Tunisia:</strong> Become the marketplace of reference for Tunisian small businesses. 100 active sellers, 5,000 monthly visitors, presence in the 5 major cities.
                </p>
                <p className="text-[var(--text-muted)] leading-relaxed mb-4">
                  <strong>Year 2 — National Anchor:</strong> Cover the entire country. Launch online payments via Flouci and Paymee. Partner with national delivery services. Reach 500 sellers and 50,000 monthly visitors.
                </p>
                <p className="text-[var(--text-muted)] leading-relaxed">
                  <strong>Year 3 — The Maghreb:</strong> Expand to Algeria and Morocco with the same model adapted locally. Become the reference marketplace for Maghrebi local commerce.
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="mb-20">
              <h2 className="text-3xl text-center mb-12">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { title: "Local First", desc: "We believe the Tunisian economy is full of talent, skill, and creativity that deserves to be seen." },
                  { title: "Mutual Trust", desc: "We verify every seller and protect every buyer, creating an environment where both sides can trade with confidence." },
                  { title: "Simplicity", desc: "Technology should serve people, not intimidate them. Every feature is designed to be understood by anyone." },
                  { title: "Equity", desc: "We don't favor big sellers over small ones. Every shop gets the same baseline visibility." },
                ].map((value) => (
                  <div key={value.title} className="bg-white p-8 rounded-[var(--radius-lg)] shadow-sm">
                    <h3 className="text-lg font-semibold mb-3">{value.title}</h3>
                    <p className="text-sm text-[var(--text-muted)] leading-relaxed">{value.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="bg-[var(--primary)] text-white rounded-[var(--radius-lg)] p-10 md:p-14">
              <h2 className="text-3xl mb-8 text-center">Contact Us</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="text-sm font-semibold">Email</div>
                  <a href="mailto:contact@vetrina.shop" className="text-sm opacity-85 hover:opacity-100">
                    contact@vetrina.shop
                  </a>
                </div>
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div className="text-sm font-semibold">WhatsApp</div>
                  <span className="text-sm opacity-85">+216 xx xxx xxx</span>
                </div>
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div className="text-sm font-semibold">Location</div>
                  <span className="text-sm opacity-85">Tunis, Tunisia</span>
                </div>
              </div>
              <div className="flex justify-center gap-4 mt-10">
                {[Instagram, Facebook, Music2].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition">
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
