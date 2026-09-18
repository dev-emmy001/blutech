"use client";

import { useState } from "react";
import { EnvelopeSimple, MapPin, Phone } from "@phosphor-icons/react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const contactCards = [
    {
      icon: <EnvelopeSimple size={36} weight="duotone" className="text-blutech-primary" />,
      bg: "bg-blue-50",
      label: "Email us",
      sub: "Email us for scheduling",
      value: "info@blutech.com",
      href: "mailto:info@blutech.com",
    },
    {
      icon: <MapPin size={36} weight="duotone" className="text-orange-400" />,
      bg: "bg-orange-50",
      label: "Visit our office",
      sub: "Come say hello",
      value: "No. 25 Omenazu St. Aba, Abia State",
      href: "https://maps.google.com",
    },
    {
      icon: <Phone size={36} weight="duotone" className="text-green-500" />,
      bg: "bg-green-50",
      label: "Contact us",
      sub: "Call us for scheduling",
      value: "+234 8163059312",
      href: "tel:+2348163059312",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans">

      {/* Hero */}
      <section className="pt-40 md:pt-48 pb-10 px-6 text-center max-w-4xl mx-auto w-full">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 font-serif leading-[1.1]">
          We&apos;re Here To{" "}Help!
        </h1>
        <p className="mt-5 text-base md:text-lg text-gray-500 max-w-lg mx-auto leading-relaxed">
          We want to hear from you. Let us know how we can help.
        </p>
      </section>

      {/* Main two-column content */}
      <section className="px-6 pb-32 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8 items-start">

          {/* Left — Contact Form */}
          <div className="bg-gray-50 rounded-3xl p-8 md:p-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 font-serif mb-3">
              Send us a Message
            </h2>
            <p className="text-gray-500 text-sm mb-8 leading-relaxed max-w-md">
              Connect instantly and clearly with our team. We typically respond
              within one business day.
            </p>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
                <EnvelopeSimple size={56} weight="duotone" className="text-blutech-primary" />
                <h3 className="text-2xl font-bold text-gray-900 font-serif">Message Sent!</h3>
                <p className="text-gray-500 max-w-xs">
                  Thanks for reaching out. We&apos;ll get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">

                {/* Row 1 — Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-name" className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
                      Name
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      placeholder="Full Name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-blutech-primary/40 focus:border-blutech-primary transition"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-email" className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
                      Email
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      placeholder="Email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-blutech-primary/40 focus:border-blutech-primary transition"
                    />
                  </div>
                </div>

                {/* Row 2 — Phone + Date */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-phone" className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
                      Phone
                    </label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      placeholder="Phone"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-blutech-primary/40 focus:border-blutech-primary transition"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-date" className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
                      Preferred Date
                    </label>
                    <input
                      id="contact-date"
                      name="date"
                      type="date"
                      value={form.date}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-blutech-primary/40 focus:border-blutech-primary transition"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-message" className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    placeholder="Message"
                    rows={6}
                    value={form.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-blutech-primary/40 focus:border-blutech-primary transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-blutech-primary hover:bg-blutech-secondary text-white rounded-full font-semibold text-base transition-colors mt-1"
                >
                  Submit
                </button>
              </form>
            )}
          </div>

          {/* Right — Contact Info Cards */}
          <div className="flex flex-col gap-5">
            {contactCards.map((card) => (
              <a
                key={card.label}
                href={card.href}
                target={card.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className={`flex items-start gap-5 p-6 rounded-2xl ${card.bg} hover:-translate-y-1 transition-transform duration-200`}
              >
                <div className="flex-shrink-0 mt-0.5">{card.icon}</div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg font-serif">
                    {card.label}
                  </h3>
                  <p className="text-sm text-gray-500 mt-0.5">{card.sub}</p>
                  <p className="text-sm font-semibold text-gray-800 mt-2">
                    {card.value}
                  </p>
                </div>
              </a>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
