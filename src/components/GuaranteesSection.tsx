import { guarantees } from "@/data/fakeData";
import {
  Shield,
  Database,
  FileText,
  MessageCircle,
  Layers,
  CheckCircle,
  Percent,
  Clock,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  shield: <Shield className="w-7 h-7" />,
  database: <Database className="w-7 h-7" />,
  "file-text": <FileText className="w-7 h-7" />,
  "message-circle": <MessageCircle className="w-7 h-7" />,
  layers: <Layers className="w-7 h-7" />,
  "check-circle": <CheckCircle className="w-7 h-7" />,
  percent: <Percent className="w-7 h-7" />,
  clock: <Clock className="w-7 h-7" />,
};

export default function GuaranteesSection() {
  return (
    <section className="py-20">
      <div className="container-main">
        <div className="section-header">
          <h2>Our Guarantees to Sellers</h2>
          <p>We believe in earning your trust every single month</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {guarantees.map((g) => (
            <div
              key={g.title}
              className="bg-white rounded-[var(--radius-lg)] p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg text-center"
            >
              <div className="w-14 h-14 bg-[var(--bg-warm)] rounded-xl flex items-center justify-center mx-auto mb-4 text-[var(--primary)]">
                {iconMap[g.icon]}
              </div>
              <h4 className="text-base font-semibold mb-2">{g.title}</h4>
              <p className="text-[13px] text-[var(--text-muted)] leading-relaxed">{g.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
