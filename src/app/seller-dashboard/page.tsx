"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useToast } from "@/components/ToastProvider";
import {
  DollarSign,
  ShoppingBag,
  Eye,
  Package,
  ArrowUpRight,
  ArrowDownRight,
  TrendingUp,
  CheckCircle,
  Clock,
  Truck,
  Star,
  Plus,
  BarChart3,
  Settings,
  Mail,
} from "lucide-react";

const stats = [
  {
    label: "Total Sales",
    value: "3,840 TND",
    change: "+12.5%",
    up: true,
    icon: DollarSign,
  },
  {
    label: "Orders",
    value: "142",
    change: "+8.2%",
    up: true,
    icon: ShoppingBag,
  },
  {
    label: "Shop Views",
    value: "8,320",
    change: "+24.1%",
    up: true,
    icon: Eye,
  },
  {
    label: "Products",
    value: "36",
    change: "+4",
    up: true,
    icon: Package,
  },
];

const salesData = [
  { month: "Jan", value: 42 },
  { month: "Feb", value: 58 },
  { month: "Mar", value: 35 },
  { month: "Apr", value: 72 },
  { month: "May", value: 68 },
  { month: "Jun", value: 95 },
];

const orders = [
  {
    id: "#VT-2041",
    customer: "Aya M.",
    product: "Hydrating Rose Serum",
    total: 70,
    status: "Delivered",
    date: "Jun 08, 2026",
  },
  {
    id: "#VT-2040",
    customer: "Mehdi K.",
    product: "Gold Minimalist Necklace",
    total: 178,
    status: "Shipped",
    date: "Jun 07, 2026",
  },
  {
    id: "#VT-2039",
    customer: "Sarra L.",
    product: "Handcrafted Leather Tote",
    total: 298,
    status: "Processing",
    date: "Jun 07, 2026",
  },
  {
    id: "#VT-2038",
    customer: "Nour H.",
    product: "Jasmine Scented Candle",
    total: 90,
    status: "Delivered",
    date: "Jun 06, 2026",
  },
  {
    id: "#VT-2037",
    customer: "Omar B.",
    product: "Organic Olive Oil Set",
    total: 124,
    status: "Shipped",
    date: "Jun 05, 2026",
  },
];

const topProducts = [
  { name: "Gold Minimalist Necklace", sold: 28, revenue: 2492 },
  { name: "Hydrating Rose Serum", sold: 24, revenue: 840 },
  { name: "Handcrafted Leather Tote", sold: 19, revenue: 2831 },
  { name: "Jasmine Scented Candle", sold: 17, revenue: 765 },
  { name: "Organic Olive Oil Set", sold: 14, revenue: 868 },
];

const statusStyles: Record<string, string> = {
  Delivered: "bg-emerald-50 text-emerald-700 border-emerald-200",
  Shipped: "bg-blue-50 text-blue-700 border-blue-200",
  Processing: "bg-amber-50 text-amber-700 border-amber-200",
};

const statusIcon: Record<string, React.ReactNode> = {
  Delivered: <CheckCircle className="w-3.5 h-3.5" />,
  Shipped: <Truck className="w-3.5 h-3.5" />,
  Processing: <Clock className="w-3.5 h-3.5" />,
};

export default function SellerDashboardPage() {
  const maxValue = Math.max(...salesData.map((d) => d.value));
  const { showToast } = useToast();

  return (
    <>
      <Header />
      <main>
        {/* Page Header */}
        <div className="bg-[var(--primary)] text-white py-14">
          <div className="container-main">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <span className="inline-block text-xs font-semibold uppercase tracking-widest bg-white/10 px-4 py-2 rounded-full mb-4">
                  Seller Dashboard
                </span>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">Welcome back, Chic Store</h1>
                <p className="opacity-85 text-sm md:text-base">
                  Here is what is happening with your shop today.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => showToast("Settings panel coming soon!", "info")}
                  className="inline-flex items-center gap-2 px-5 py-3 bg-white/10 text-white border border-white/20 rounded-full text-sm font-semibold hover:bg-white/20 transition"
                >
                  <Settings className="w-4 h-4" />
                  Settings
                </button>
                <button
                  onClick={() => showToast("Add Product form coming soon!", "info")}
                  className="inline-flex items-center gap-2 px-5 py-3 bg-[var(--accent)] text-white rounded-full text-sm font-semibold hover:bg-[var(--accent-hover)] transition"
                >
                  <Plus className="w-4 h-4" />
                  Add Product
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <section className="py-10">
          <div className="container-main">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white rounded-[var(--radius-lg)] p-6 border border-[var(--border)] shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 bg-[var(--bg-warm)] rounded-lg flex items-center justify-center text-[var(--primary)]">
                      <stat.icon className="w-5 h-5" />
                    </div>
                    <div
                      className={`flex items-center gap-1 text-xs font-semibold ${
                        stat.up ? "text-emerald-600" : "text-red-500"
                      }`}
                    >
                      {stat.up ? (
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      ) : (
                        <ArrowDownRight className="w-3.5 h-3.5" />
                      )}
                      {stat.change}
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-[var(--primary)] mb-1">{stat.value}</div>
                  <div className="text-sm text-[var(--text-muted)]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Charts + Orders */}
        <section className="pb-10">
          <div className="container-main">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Sales Chart */}
              <div className="lg:col-span-2 bg-white rounded-[var(--radius-lg)] p-6 border border-[var(--border)] shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--primary)]">Sales Overview</h3>
                    <p className="text-sm text-[var(--text-muted)]">Monthly sales performance (TND)</p>
                  </div>
                  <div className="w-10 h-10 bg-[var(--bg-warm)] rounded-lg flex items-center justify-center text-[var(--primary)]">
                    <BarChart3 className="w-5 h-5" />
                  </div>
                </div>

                <div className="flex items-end gap-3 h-52">
                  {salesData.map((d) => {
                    const height = `${(d.value / maxValue) * 100}%`;
                    return (
                      <div key={d.month} className="flex-1 flex flex-col items-center gap-2">
                        <div className="w-full bg-[var(--bg-warm)] rounded-t-md relative overflow-hidden" style={{ height: "100%" }}>
                          <div
                            className="absolute bottom-0 left-0 right-0 bg-[var(--primary)] rounded-t-md transition-all"
                            style={{ height }}
                          />
                        </div>
                        <span className="text-xs text-[var(--text-muted)] font-medium">{d.month}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Top Products */}
              <div className="bg-white rounded-[var(--radius-lg)] p-6 border border-[var(--border)] shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--primary)]">Top Products</h3>
                    <p className="text-sm text-[var(--text-muted)]">Best sellers this month</p>
                  </div>
                  <div className="w-10 h-10 bg-[var(--bg-warm)] rounded-lg flex items-center justify-center text-[var(--primary)]">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                </div>
                <div className="space-y-4">
                  {topProducts.map((product, i) => (
                    <div key={product.name} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[var(--bg-warm)] flex items-center justify-center text-xs font-bold text-[var(--primary)] shrink-0">
                        {i + 1}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium truncate">{product.name}</div>
                        <div className="text-xs text-[var(--text-muted)]">
                          {product.sold} sold · {product.revenue.toLocaleString()} TND
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-xs font-semibold text-emerald-600">
                        <Star className="w-3.5 h-3.5 fill-emerald-600 text-emerald-600" />
                        4.8
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Orders */}
        <section className="pb-16">
          <div className="container-main">
            <div className="bg-white rounded-[var(--radius-lg)] border border-[var(--border)] shadow-sm overflow-hidden">
              <div className="p-6 border-b border-[var(--border)] flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-[var(--primary)]">Recent Orders</h3>
                  <p className="text-sm text-[var(--text-muted)]">Latest customer orders</p>
                </div>
                <button
                  onClick={() => showToast("Viewing all orders...", "info")}
                  className="px-4 py-2 border border-[var(--border)] rounded-lg text-sm font-semibold text-[var(--text)] hover:border-[var(--primary)] hover:text-[var(--primary)] transition"
                >
                  View All
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-[var(--bg)] text-xs uppercase tracking-wide text-[var(--text-muted)]">
                      <th className="px-6 py-4 font-semibold">Order</th>
                      <th className="px-6 py-4 font-semibold">Customer</th>
                      <th className="px-6 py-4 font-semibold">Product</th>
                      <th className="px-6 py-4 font-semibold">Total</th>
                      <th className="px-6 py-4 font-semibold">Status</th>
                      <th className="px-6 py-4 font-semibold">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((order) => (
                      <tr key={order.id} className="border-t border-[var(--border)] hover:bg-[var(--bg)] transition">
                        <td className="px-6 py-4 text-sm font-medium text-[var(--primary)]">{order.id}</td>
                        <td className="px-6 py-4 text-sm">{order.customer}</td>
                        <td className="px-6 py-4 text-sm text-[var(--text-muted)]">{order.product}</td>
                        <td className="px-6 py-4 text-sm font-semibold">{order.total} TND</td>
                        <td className="px-6 py-4">
                          <span
                            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${statusStyles[order.status]}`}
                          >
                            {statusIcon[order.status]}
                            {order.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-[var(--text-muted)]">{order.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="pb-16">
          <div className="container-main">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  title: "Add New Product",
                  desc: "Upload photos and set pricing",
                  icon: Plus,
                  color: "bg-[var(--primary)]",
                  action: () => showToast("Add Product form coming soon!", "info"),
                },
                {
                  title: "Message Buyers",
                  desc: "Reply to customer inquiries",
                  icon: Mail,
                  color: "bg-[var(--accent)]",
                  action: () => showToast("Messaging center coming soon!", "info"),
                },
                {
                  title: "View Analytics",
                  desc: "Check detailed performance",
                  icon: BarChart3,
                  color: "bg-[var(--primary)]",
                  action: () => showToast("Analytics view updated!", "success"),
                },
                {
                  title: "Manage Orders",
                  desc: "Track and update shipments",
                  icon: ShoppingBag,
                  color: "bg-[var(--accent)]",
                  action: () => showToast("Order management panel coming soon!", "info"),
                },
              ].map((action) => (
                <button
                  key={action.title}
                  onClick={action.action}
                  className="flex items-start gap-4 p-5 bg-white rounded-[var(--radius-lg)] border border-[var(--border)] shadow-sm hover:-translate-y-1 hover:shadow-md transition text-left"
                >
                  <div className={`w-10 h-10 ${action.color} rounded-lg flex items-center justify-center text-white shrink-0`}>
                    <action.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[var(--primary)] mb-1">{action.title}</div>
                    <div className="text-xs text-[var(--text-muted)]">{action.desc}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
