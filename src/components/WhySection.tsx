import { whyItems } from "@/data/fakeData";
import { Users, Search, Shield, Smartphone } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  users: <Users className="w-6 h-6" />,
  search: <Search className="w-6 h-6" />,
  shield: <Shield className="w-6 h-6" />,
  smartphone: <Smartphone className="w-6 h-6" />,
};

export default function WhySection() {
  return (
    <section className="py-20 bg-white">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="rounded-[var(--radius-lg)] overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1556740758-90de374c12ad?w=600&h=700&fit=crop"
                alt="Tunisian artisan at work"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 lg:-right-6 bg-[var(--primary)] text-white p-5 rounded-[var(--radius-md)] text-center shadow-lg">
              <h4 className="text-2xl font-bold mb-0.5">200,000+</h4>
              <p className="text-[13px] opacity-85">Small businesses in Tunisia</p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl mb-6">
              Why small businesses <span className="text-[var(--accent)] italic">choose</span> Vetrina
            </h2>
            <p className="text-base text-[var(--text-muted)] mb-8 leading-relaxed">
              Over 200,000 small Tunisian businesses struggle with digital visibility. Vetrina is the digital mall where they finally get seen — without the cost or complexity of building their own website.
            </p>
            <div className="flex flex-col gap-5">
              {whyItems.map((item) => (
                <div key={item.title} className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-[var(--bg-warm)] rounded-lg flex items-center justify-center shrink-0 text-[var(--primary)]">
                    {iconMap[item.icon]}
                  </div>
                  <div>
                    <h4 className="text-base font-semibold mb-1">{item.title}</h4>
                    <p className="text-sm text-[var(--text-muted)] leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
