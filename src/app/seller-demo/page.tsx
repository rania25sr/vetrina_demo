"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, Play, Pause, RotateCcw, ArrowUpRight, DollarSign, ShoppingBag, Eye, Package, TrendingUp } from "lucide-react";

const demoSteps = [
  {
    id: 1,
    title: "Welcome to Your Dashboard",
    subtitle: "Your seller hub at a glance",
    description: "This is where you manage your entire shop. From sales tracking to order management, everything is here in one simple view.",
    visual: "dashboard",
    color: "from-emerald-600 to-teal-600",
  },
  {
    id: 2,
    title: "Add Products in Minutes",
    subtitle: "Upload once, sell forever",
    description: "Upload product photos, set your price, and write a description. Your product is live instantly. No coding, no waiting.",
    visual: "add-product",
    color: "from-amber-500 to-orange-500",
  },
  {
    id: 3,
    title: "Track Your Orders",
    subtitle: "Every order, clearly organized",
    description: "See all incoming orders with customer details, delivery status, and payment info. Update status with one click.",
    visual: "orders",
    color: "from-blue-500 to-indigo-500",
  },
  {
    id: 4,
    title: "Watch Your Sales Grow",
    subtitle: "Real-time analytics",
    description: "Visual charts show your monthly sales, top products, and shop views. Know exactly what is working.",
    visual: "analytics",
    color: "from-violet-500 to-purple-600",
  },
  {
    id: 5,
    title: "Start Selling Today",
    subtitle: "Zero setup cost. Zero risk.",
    description: "Join 47+ sellers on Vetrina. Your first product can be live in 5 minutes. It is free to start.",
    visual: "start",
    color: "from-[var(--primary)] to-[var(--primary-dark)]",
  },
];

export default function SellerDemoPage() {
  const [step, setStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const currentStep = demoSteps[step];

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setStep((s) => (s + 1) % demoSteps.length);
            return 0;
          }
          return prev + 2;
        });
      }, 100);
      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  const nextStep = () => {
    setStep((s) => (s + 1) % demoSteps.length);
    setProgress(0);
  };

  const prevStep = () => {
    setStep((s) => (s - 1 + demoSteps.length) % demoSteps.length);
    setProgress(0);
  };

  const goToStep = (index: number) => {
    setStep(index);
    setProgress(0);
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br ${currentStep.color} text-white flex flex-col`}>
      {/* Top bar */}
      <div className="flex items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2 font-serif text-xl font-bold tracking-tight">
          <img src="/logo.png" alt="Vetrina" width="28" height="28" className="object-contain invert" />
          VETRINA
        </Link>
       
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col lg:flex-row items-center justify-center gap-10 px-6 py-8 max-w-7xl mx-auto w-full">
        {/* Left — Text */}
        <div className="flex-1 max-w-xl text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
            Step {step + 1} of {demoSteps.length}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            {currentStep.title}
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold opacity-90 mb-6">
            {currentStep.subtitle}
          </h2>
          <p className="text-lg opacity-80 leading-relaxed mb-8">
            {currentStep.description}
          </p>

          {/* Controls */}
          <div className="flex items-center justify-center lg:justify-start gap-4">
            <button
              onClick={prevStep}
              className="w-12 h-12 bg-white/15 rounded-full flex items-center justify-center hover:bg-white/25 transition"
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-16 h-16 bg-white text-[var(--primary)] rounded-full flex items-center justify-center hover:scale-105 transition shadow-lg"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-1" />}
            </button>
            <button
              onClick={nextStep}
              className="w-12 h-12 bg-white/15 rounded-full flex items-center justify-center hover:bg-white/25 transition"
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            <button
              onClick={() => { setStep(0); setProgress(0); setIsPlaying(false); }}
              className="w-12 h-12 bg-white/15 rounded-full flex items-center justify-center hover:bg-white/25 transition ml-2"
              aria-label="Restart"
            >
              <RotateCcw className="w-5 h-5" />
            </button>
          </div>

          {/* Step dots */}
          <div className="flex items-center justify-center lg:justify-start gap-2 mt-8">
            {demoSteps.map((_, i) => (
              <button
                key={i}
                onClick={() => goToStep(i)}
                className={`h-2 rounded-full transition-all ${
                  i === step ? "w-8 bg-white" : "w-2 bg-white/40 hover:bg-white/60"
                }`}
                aria-label={`Go to step ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Right — Visual */}
        <div className="flex-1 w-full max-w-lg">
          <div className="bg-white/10 backdrop-blur-md rounded-[var(--radius-xl)] p-6 border border-white/20 shadow-2xl">
            {/* Progress bar */}
            <div className="w-full h-1 bg-white/20 rounded-full mb-6 overflow-hidden">
              <div
                className="h-full bg-white transition-all duration-100"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Mock UI */}
            <div className="bg-white rounded-[var(--radius-lg)] p-5 text-[var(--text)] min-h-[380px] flex flex-col">
              {/* Fake header */}
              <div className="flex items-center justify-between mb-4 pb-4 border-b border-[var(--border)]">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-[var(--primary)] rounded-lg flex items-center justify-center">
                    <img src="/logo.png" alt="" className="w-5 h-5 object-contain invert" />
                  </div>
                  <span className="text-sm font-semibold text-[var(--primary)]">Chic Store</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-[var(--bg-warm)] rounded-full flex items-center justify-center text-xs font-bold text-[var(--primary)]">CS</div>
                </div>
              </div>

              {/* Fake content based on step */}
              {currentStep.visual === "dashboard" && (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { icon: DollarSign, label: "Sales", value: "3,840 TND", color: "bg-emerald-50 text-emerald-600" },
                      { icon: ShoppingBag, label: "Orders", value: "142", color: "bg-blue-50 text-blue-600" },
                      { icon: Eye, label: "Views", value: "8,320", color: "bg-violet-50 text-violet-600" },
                      { icon: Package, label: "Products", value: "36", color: "bg-amber-50 text-amber-600" },
                    ].map((stat) => (
                      <div key={stat.label} className="bg-[var(--bg)] rounded-lg p-3">
                        <div className={`w-8 h-8 ${stat.color} rounded-lg flex items-center justify-center mb-2`}>
                          <stat.icon className="w-4 h-4" />
                        </div>
                        <div className="text-lg font-bold text-[var(--primary)]">{stat.value}</div>
                        <div className="text-xs text-[var(--text-muted)]">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                  <div className="bg-[var(--bg)] rounded-lg p-3 h-24 flex items-end gap-2">
                    {[40, 65, 45, 80, 60, 90].map((h, i) => (
                      <div key={i} className="flex-1 bg-[var(--primary)] rounded-t" style={{ height: `${h}%` }} />
                    ))}
                  </div>
                </div>
              )}

              {currentStep.visual === "add-product" && (
                <div className="space-y-3">
                  <div className="text-sm font-semibold text-[var(--primary)] mb-1">Add New Product</div>
                  <div className="bg-[var(--bg-warm)] border-2 border-dashed border-[var(--border)] rounded-lg p-8 text-center">
                    <Package className="w-8 h-8 mx-auto mb-2 text-[var(--text-muted)]" />
                    <div className="text-xs text-[var(--text-muted)]">Drop photos here or click to upload</div>
                  </div>
                  <div className="bg-[var(--bg)] rounded-lg p-3">
                    <div className="text-xs text-[var(--text-muted)] mb-1">Product Name</div>
                    <div className="text-sm font-medium">Handmade Ceramic Vase</div>
                  </div>
                  <div className="bg-[var(--bg)] rounded-lg p-3">
                    <div className="text-xs text-[var(--text-muted)] mb-1">Price</div>
                    <div className="text-sm font-medium">75 TND</div>
                  </div>
                  <div className="bg-[var(--primary)] text-white rounded-lg p-3 text-center text-sm font-semibold">
                    Publish Product
                  </div>
                </div>
              )}

              {currentStep.visual === "orders" && (
                <div className="space-y-2">
                  <div className="text-sm font-semibold text-[var(--primary)] mb-2">Recent Orders</div>
                  {[
                    { id: "#VT-2041", customer: "Aya M.", status: "Delivered", color: "bg-emerald-50 text-emerald-600" },
                    { id: "#VT-2040", customer: "Mehdi K.", status: "Shipped", color: "bg-blue-50 text-blue-600" },
                    { id: "#VT-2039", customer: "Sarra L.", status: "Processing", color: "bg-amber-50 text-amber-600" },
                  ].map((order) => (
                    <div key={order.id} className="flex items-center justify-between bg-[var(--bg)] rounded-lg p-3">
                      <div>
                        <div className="text-xs font-semibold text-[var(--primary)]">{order.id}</div>
                        <div className="text-xs text-[var(--text-muted)]">{order.customer}</div>
                      </div>
                      <span className={`text-xs font-semibold px-2 py-1 rounded-full ${order.color}`}>
                        {order.status}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {currentStep.visual === "analytics" && (
                <div className="space-y-4">
                  <div className="text-sm font-semibold text-[var(--primary)]">Sales Overview</div>
                  <div className="flex items-end gap-2 h-32">
                    {[{ m: "Jan", h: 30 }, { m: "Feb", h: 55 }, { m: "Mar", h: 40 }, { m: "Apr", h: 70 }, { m: "May", h: 60 }, { m: "Jun", h: 90 }].map((d) => (
                      <div key={d.m} className="flex-1 flex flex-col items-center gap-1">
                        <div className="w-full bg-[var(--bg-warm)] rounded-t-md relative" style={{ height: "100%" }}>
                          <div className="absolute bottom-0 left-0 right-0 bg-[var(--primary)] rounded-t-md" style={{ height: `${d.h}%` }} />
                        </div>
                        <span className="text-[10px] text-[var(--text-muted)]">{d.m}</span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-[var(--bg)] rounded-lg p-3 flex items-center justify-between">
                    <div>
                      <div className="text-xs text-[var(--text-muted)]">Top Product</div>
                      <div className="text-sm font-semibold">Gold Minimalist Necklace</div>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-emerald-600 font-semibold">
                      <TrendingUp className="w-3 h-3" /> 28 sold
                    </div>
                  </div>
                </div>
              )}

              {currentStep.visual === "start" && (
                <div className="flex flex-col items-center justify-center text-center py-6">
                  <div className="w-16 h-16 bg-[var(--bg-warm)] rounded-full flex items-center justify-center mb-4">
                    <img src="/logo.png" alt="" className="w-10 h-10 object-contain" />
                  </div>
                  <div className="text-lg font-semibold text-[var(--primary)] mb-2">Ready to start?</div>
                  <div className="text-sm text-[var(--text-muted)] mb-6">Join 47+ sellers on Vetrina today</div>
                  <Link
                    href="/sellers"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--primary)] text-white rounded-full text-sm font-semibold hover:bg-[var(--primary-dark)] transition"
                  >
                    Start Selling Free
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="px-6 py-4 flex items-center justify-between">
        <div className="text-sm opacity-70">
          © 2026 Vetrina — Demo for Sellers
        </div>
        <Link
          href="/seller-dashboard"
          className="inline-flex items-center gap-2 text-sm font-semibold opacity-90 hover:opacity-100 transition"
        >
          Try the Live Dashboard
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
