"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useCart } from "@/components/CartContext";
import { useToast } from "@/components/ToastProvider";
import { Trash2, Minus, Plus, ShoppingBag, ArrowRight, Check, Truck, CreditCard, User, Package } from "lucide-react";

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, clearCart, cartTotal } = useCart();
  const { showToast } = useToast();
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    notes: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const isFormValid = () => {
    return form.name.trim() && form.email.trim() && form.phone.trim() && form.address.trim() && form.city.trim();
  };

  const handleConfirm = () => {
    if (!isFormValid()) {
      showToast("Please fill in all required fields.", "warning");
      return;
    }
    setStep(3);
    showToast("Order confirmed! Thank you for shopping with Vetrina.", "success");
    clearCart();
  };

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <div className="bg-[var(--bg-warm)] py-16">
          <div className="container-main text-center">
            <h1 className="text-4xl md:text-5xl text-[var(--primary)] mb-4">Your Cart</h1>
            <p className="text-lg text-[var(--text-muted)] max-w-xl mx-auto">
              Review your items and complete your order.
            </p>
          </div>
        </div>

        <section className="py-16">
          <div className="container-main">
            {/* Stepper */}
            <div className="flex items-center justify-center gap-4 mb-12">
              {[
                { num: 1, label: "Cart", icon: ShoppingBag },
                { num: 2, label: "Shipping", icon: Truck },
                { num: 3, label: "Confirm", icon: Check },
              ].map((s, i) => (
                <div key={s.num} className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition ${
                        step >= s.num
                          ? "bg-[var(--primary)] text-white"
                          : "bg-[var(--bg-warm)] text-[var(--text-muted)]"
                      }`}
                    >
                      <s.icon className="w-4 h-4" />
                    </div>
                    <span className={`text-sm font-semibold ${step >= s.num ? "text-[var(--primary)]" : "text-[var(--text-muted)]"}`}>
                      {s.label}
                    </span>
                  </div>
                  {i < 2 && (
                    <div className={`w-12 h-0.5 rounded ${step > s.num ? "bg-[var(--primary)]" : "bg-[var(--border)]"}`} />
                  )}
                </div>
              ))}
            </div>

            {items.length === 0 && step !== 3 ? (
              <div className="text-center py-20">
                <ShoppingBag className="w-16 h-16 mx-auto mb-6 text-[var(--text-muted)] opacity-40" />
                <h2 className="text-2xl font-semibold text-[var(--primary)] mb-2">Your cart is empty</h2>
                <p className="text-[var(--text-muted)] mb-8">Explore our products and add your favorites.</p>
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-[var(--primary)] text-white rounded-full text-sm font-semibold hover:bg-[var(--primary-dark)] transition"
                >
                  Start Shopping
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column */}
                <div className="lg:col-span-2">
                  {step === 1 && (
                    <div className="bg-white rounded-[var(--radius-lg)] border border-[var(--border)] shadow-sm overflow-hidden">
                      <div className="p-6 border-b border-[var(--border)]">
                        <h2 className="text-lg font-semibold text-[var(--primary)]">Cart Items ({items.length})</h2>
                      </div>
                      <div className="divide-y divide-[var(--border)]">
                        {items.map((item) => (
                          <div key={item.id} className="p-6 flex items-center gap-4">
                            <img src={item.image} alt={item.name} className="w-20 h-20 rounded-lg object-cover bg-[var(--bg-warm)]" />
                            <div className="flex-1 min-w-0">
                              <div className="text-sm font-semibold text-[var(--primary)] truncate">{item.name}</div>
                              <div className="text-xs text-[var(--text-muted)] mb-1">by {item.seller}</div>
                              <div className="text-sm font-bold text-[var(--primary)]">{item.price} TND</div>
                            </div>
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="w-8 h-8 rounded-lg border border-[var(--border)] flex items-center justify-center hover:bg-[var(--bg-warm)] transition"
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                              <span className="w-8 text-center text-sm font-semibold">{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="w-8 h-8 rounded-lg border border-[var(--border)] flex items-center justify-center hover:bg-[var(--bg-warm)] transition"
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                            </div>
                            <div className="text-sm font-bold text-[var(--primary)] w-20 text-right">
                              {(item.price * item.quantity).toFixed(0)} TND
                            </div>
                            <button
                              onClick={() => {
                                removeFromCart(item.id);
                                showToast("Item removed from cart", "info");
                              }}
                              className="w-8 h-8 flex items-center justify-center text-red-400 hover:text-red-600 transition"
                              aria-label="Remove item"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        ))}
                      </div>
                      <div className="p-6 border-t border-[var(--border)] flex items-center justify-between">
                        <button
                          onClick={() => {
                            clearCart();
                            showToast("Cart cleared", "info");
                          }}
                          className="text-sm text-red-500 hover:text-red-700 font-medium"
                        >
                          Clear Cart
                        </button>
                        <button
                          onClick={() => setStep(2)}
                          className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--primary)] text-white rounded-full text-sm font-semibold hover:bg-[var(--primary-dark)] transition"
                        >
                          Continue to Shipping
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  )}

                  {step === 2 && (
                    <div className="bg-white rounded-[var(--radius-lg)] border border-[var(--border)] shadow-sm p-8">
                      <div className="flex items-center gap-3 mb-8">
                        <div className="w-10 h-10 bg-[var(--bg-warm)] rounded-lg flex items-center justify-center text-[var(--primary)]">
                          <Truck className="w-5 h-5" />
                        </div>
                        <div>
                          <h2 className="text-lg font-semibold text-[var(--primary)]">Shipping Details</h2>
                          <p className="text-sm text-[var(--text-muted)]">Enter your delivery information</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <label className="text-sm font-semibold text-[var(--text)] mb-1.5 block">Full Name *</label>
                          <div className="flex items-center gap-3 bg-[var(--bg)] border border-[var(--border)] rounded-lg px-4 py-3">
                            <User className="w-4 h-4 text-[var(--text-muted)]" />
                            <input
                              name="name"
                              value={form.name}
                              onChange={handleChange}
                              placeholder="Your full name"
                              className="bg-transparent text-sm outline-none w-full placeholder:text-[var(--text-light)]"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="text-sm font-semibold text-[var(--text)] mb-1.5 block">Email *</label>
                          <div className="flex items-center gap-3 bg-[var(--bg)] border border-[var(--border)] rounded-lg px-4 py-3">
                            <Package className="w-4 h-4 text-[var(--text-muted)]" />
                            <input
                              name="email"
                              type="email"
                              value={form.email}
                              onChange={handleChange}
                              placeholder="your@email.com"
                              className="bg-transparent text-sm outline-none w-full placeholder:text-[var(--text-light)]"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="text-sm font-semibold text-[var(--text)] mb-1.5 block">Phone *</label>
                          <div className="flex items-center gap-3 bg-[var(--bg)] border border-[var(--border)] rounded-lg px-4 py-3">
                            <CreditCard className="w-4 h-4 text-[var(--text-muted)]" />
                            <input
                              name="phone"
                              value={form.phone}
                              onChange={handleChange}
                              placeholder="+216 XX XXX XXX"
                              className="bg-transparent text-sm outline-none w-full placeholder:text-[var(--text-light)]"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="text-sm font-semibold text-[var(--text)] mb-1.5 block">City *</label>
                          <div className="flex items-center gap-3 bg-[var(--bg)] border border-[var(--border)] rounded-lg px-4 py-3">
                            <Truck className="w-4 h-4 text-[var(--text-muted)]" />
                            <input
                              name="city"
                              value={form.city}
                              onChange={handleChange}
                              placeholder="Tunis, Sfax, Sousse..."
                              className="bg-transparent text-sm outline-none w-full placeholder:text-[var(--text-light)]"
                            />
                          </div>
                        </div>
                        <div className="md:col-span-2">
                          <label className="text-sm font-semibold text-[var(--text)] mb-1.5 block">Address *</label>
                          <div className="flex items-center gap-3 bg-[var(--bg)] border border-[var(--border)] rounded-lg px-4 py-3">
                            <Truck className="w-4 h-4 text-[var(--text-muted)]" />
                            <input
                              name="address"
                              value={form.address}
                              onChange={handleChange}
                              placeholder="Street, building, apartment..."
                              className="bg-transparent text-sm outline-none w-full placeholder:text-[var(--text-light)]"
                            />
                          </div>
                        </div>
                        <div className="md:col-span-2">
                          <label className="text-sm font-semibold text-[var(--text)] mb-1.5 block">Order Notes (optional)</label>
                          <textarea
                            name="notes"
                            value={form.notes}
                            onChange={handleChange}
                            placeholder="Any special instructions for the seller..."
                            rows={3}
                            className="w-full bg-[var(--bg)] border border-[var(--border)] rounded-lg px-4 py-3 text-sm outline-none placeholder:text-[var(--text-light)] resize-none"
                          />
                        </div>
                      </div>
                      <div className="flex items-center justify-between mt-8">
                        <button
                          onClick={() => setStep(1)}
                          className="px-6 py-3 border border-[var(--border)] rounded-full text-sm font-semibold text-[var(--text)] hover:border-[var(--primary)] hover:text-[var(--primary)] transition"
                        >
                          Back to Cart
                        </button>
                        <button
                          onClick={handleConfirm}
                          className="inline-flex items-center gap-2 px-8 py-3 bg-[var(--primary)] text-white rounded-full text-sm font-semibold hover:bg-[var(--primary-dark)] transition"
                        >
                          Confirm Order
                          <Check className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  )}

                  {step === 3 && (
                    <div className="bg-white rounded-[var(--radius-lg)] border border-[var(--border)] shadow-sm p-10 text-center">
                      <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Check className="w-8 h-8 text-emerald-600" />
                      </div>
                      <h2 className="text-2xl font-semibold text-[var(--primary)] mb-2">Order Confirmed!</h2>
                      <p className="text-[var(--text-muted)] mb-6">
                        Thank you, {form.name || "valued customer"}. Your order has been placed successfully.
                        The seller will contact you shortly via WhatsApp to arrange delivery.
                      </p>
                      <div className="bg-[var(--bg-warm)] rounded-lg p-6 mb-6 text-left max-w-md mx-auto">
                        <div className="text-sm font-semibold text-[var(--primary)] mb-3">Order Summary</div>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between"><span className="text-[var(--text-muted)]">Subtotal</span><span className="font-semibold">{cartTotal} TND</span></div>
                          <div className="flex justify-between"><span className="text-[var(--text-muted)]">Shipping</span><span className="font-semibold text-emerald-600">Contact seller</span></div>
                          <div className="border-t border-[var(--border)] pt-2 flex justify-between"><span className="font-semibold">Total</span><span className="font-bold text-[var(--primary)]">{cartTotal} TND</span></div>
                        </div>
                      </div>
                      <Link
                        href="/products"
                        className="inline-flex items-center gap-2 px-8 py-3 bg-[var(--primary)] text-white rounded-full text-sm font-semibold hover:bg-[var(--primary-dark)] transition"
                      >
                        Continue Shopping
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  )}
                </div>

                {/* Right Column - Summary */}
                <div className="lg:col-span-1">
                  <div className="bg-white rounded-[var(--radius-lg)] border border-[var(--border)] shadow-sm p-6 sticky top-24">
                    <h3 className="text-lg font-semibold text-[var(--primary)] mb-6">Order Summary</h3>
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between text-sm">
                        <span className="text-[var(--text-muted)]">Subtotal</span>
                        <span className="font-semibold">{cartTotal} TND</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-[var(--text-muted)]">Shipping</span>
                        <span className="font-semibold text-emerald-600">Contact seller</span>
                      </div>
                      <div className="border-t border-[var(--border)] pt-3 flex justify-between">
                        <span className="font-semibold text-[var(--text)]">Total</span>
                        <span className="font-bold text-xl text-[var(--primary)]">{cartTotal} TND</span>
                      </div>
                    </div>
                    <div className="bg-[var(--bg-warm)] rounded-lg p-4 text-xs text-[var(--text-muted)] leading-relaxed">
                      <strong className="text-[var(--text)]">Note:</strong> Shipping and delivery are managed directly by the seller. You will be contacted via WhatsApp or phone to arrange delivery and payment.
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
