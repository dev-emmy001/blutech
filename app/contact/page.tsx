"use client";

import { EnvelopeSimple, MapPin, Phone } from "@phosphor-icons/react";

export default function ContactPage() {
  const contactCards = [
    {
      icon: <EnvelopeSimple size={36} weight="duotone" className="text-blutech-primary" />,
      bg: "bg-blue-50",
      label: "Email us",
      sub: "Email us for scheduling",
      value: (
        <span className="flex flex-col gap-1">
          <span>isaacfrank197@gmail.com</span>
          <span>franklin.i@blutech.ng</span>
        </span>
      ),
      href: "mailto:isaacfrank197@gmail.com",
    },
    {
      icon: <MapPin size={36} weight="duotone" className="text-orange-400" />,
      bg: "bg-orange-50",
      label: "Visit our office",
      sub: "Workstation: IGHub",
      value: "No 10 Calabar street, opp ogbonnaya onu polytechnic Aba, Abia state",
      href: "https://maps.app.goo.gl/KpJiXTcgLXG7NZYa8",
    },
    {
      icon: <Phone size={36} weight="duotone" className="text-green-500" />,
      bg: "bg-green-50",
      label: "Contact us",
      sub: "Call us for scheduling",
      value: "(+234) 701 156 7240",
      href: "tel:+2347011567240",
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

          {/* Left — Contact Image */}
          <div className="bg-gray-50 rounded-3xl p-4 flex flex-col justify-center overflow-hidden">
            <img
              src="/contact-person.jpg"
              alt="Friendly contact person"
              className="w-full h-[400px] md:h-[500px] object-cover rounded-2xl"
            />
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

      {/* Map Section */}
      <section className="px-6 pb-32 max-w-7xl mx-auto w-full">
        <div className="bg-gray-50 rounded-3xl p-4 overflow-hidden h-[400px] md:h-[500px] relative">
          <iframe
            className="w-full h-full rounded-2xl"
            src="https://maps.google.com/maps?q=Innovation%20Growth%20Hub,%20Aba,%20Abia%20state&t=&z=15&ie=UTF8&iwloc=&output=embed"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-gray-100/50 hidden md:block">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                <MapPin size={24} weight="fill" className="text-orange-500" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg font-serif">Our Location</h3>
            </div>
            <p className="text-sm text-gray-600 max-w-[220px] leading-relaxed">
              No 10 Calabar street, opp ogbonnaya onu polytechnic Aba, Abia state
            </p>
            <a 
              href="https://maps.app.goo.gl/KpJiXTcgLXG7NZYa8" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-4 inline-block text-sm font-semibold text-blutech-primary hover:text-blue-700 transition-colors"
            >
              Get Directions &rarr;
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
