import { stats } from "@/data/fakeData";

export default function StatsBar() {
  return (
    <div className="bg-white border-b border-[var(--border)] py-8">
      <div className="container-main">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <h3 className="text-[28px] font-bold text-[var(--primary)] mb-1">{stat.value}</h3>
              <p className="text-[13px] text-[var(--text-muted)]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
