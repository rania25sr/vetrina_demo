import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { HelpCircle, ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is Vetrina?",
    answer: "Vetrina is the first digital mall for Tunisian small businesses. We bring together verified local sellers onto one shared platform, giving them visibility to thousands of buyers without needing a website or technical skills.",
  },
  {
    question: "How do I buy a product?",
    answer: "Browse categories or search for products. Click on any product to view details, then contact the seller directly via phone or WhatsApp to place your order. Vetrina connects you with the seller; the seller handles the rest.",
  },
  {
    question: "How do I become a seller?",
    answer: "Click 'Start Selling' and register your shop name, category, and city. Our team will review and verify your application within 24-48 hours. Once approved, you can upload your products and start receiving orders.",
  },
  {
    question: "Is there a cost to sell on Vetrina?",
    answer: "We offer a free Starter plan for artisans testing the market. For growing businesses, we have Pro and Business plans with low monthly subscriptions. You can also choose a commission-only model where you pay a small percentage only when you make a sale.",
  },
  {
    question: "Who handles shipping and delivery?",
    answer: "Shipping and delivery are managed directly between the seller and the buyer. Vetrina is a marketplace that connects you; each seller arranges their own delivery method. This keeps costs low and gives sellers full control.",
  },
  {
    question: "How does Vetrina make money?",
    answer: "Vetrina earns through small subscription fees or a commission on sales. We do not charge buyers, and we do not sell your data. Our goal is to keep costs low so sellers can grow.",
  },
  {
    question: "Is my data safe?",
    answer: "Yes. You own your customer data and your content. We never sell data to third parties. We use secure hosting and follow best practices to protect your information.",
  },
  {
    question: "Can I cancel my seller account anytime?",
    answer: "Absolutely. There are no contracts, no penalties, and no hidden fees. You can leave whenever you want. We prefer to earn your loyalty through value, not lock-in.",
  },
  {
    question: "How do I get verified?",
    answer: "After signing up, our team reviews your shop details, checks your products, and confirms your identity. Once verified, you receive a 'Verified Seller' badge that builds trust with buyers.",
  },
  {
    question: "What cities are covered?",
    answer: "Vetrina is active across Tunisia, including Tunis, Sfax, Sousse, Nabeul, Kairouan, Douz, and more. We are expanding to cover every major city in the country.",
  },
];

export default function FAQPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <div className="bg-[var(--bg-warm)] py-16">
          <div className="container-main text-center">
            <h1 className="text-4xl md:text-5xl text-[var(--primary)] mb-4">Frequently Asked Questions</h1>
            <p className="text-lg text-[var(--text-muted)] max-w-2xl mx-auto">
              Everything you need to know about buying and selling on Vetrina.
            </p>
          </div>
        </div>

        {/* FAQ List */}
        <section className="py-16">
          <div className="container-main max-w-3xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <details
                  key={i}
                  className="group bg-white rounded-[var(--radius-lg)] border border-[var(--border)] shadow-sm open:shadow-md transition"
                >
                  <summary className="flex items-center justify-between cursor-pointer p-6 list-none">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-[var(--bg-warm)] rounded-lg flex items-center justify-center text-[var(--primary)] shrink-0">
                        <HelpCircle className="w-4 h-4" />
                      </div>
                      <span className="text-base font-semibold text-[var(--primary)]">{faq.question}</span>
                    </div>
                    <ChevronDown className="w-5 h-5 text-[var(--text-muted)] transition-transform group-open:rotate-180 shrink-0" />
                  </summary>
                  <div className="px-6 pb-6 text-[var(--text-muted)] leading-relaxed text-sm">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="pb-16">
          <div className="container-main text-center">
            <div className="bg-[var(--primary)] text-white rounded-[var(--radius-lg)] p-10 md:p-14">
              <h2 className="text-2xl md:text-3xl mb-4">Still have questions?</h2>
              <p className="opacity-85 mb-8 max-w-lg mx-auto">
                Our team is here to help. Reach out via WhatsApp or email and we will get back to you within 4 hours.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="mailto:contact@vetrina.shop"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-[var(--accent)] text-white rounded-full text-sm font-semibold hover:bg-[var(--accent-hover)] transition"
                >
                  Email Us
                </a>
                <span className="text-sm opacity-80">or WhatsApp +216 xx xxx xxx</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
