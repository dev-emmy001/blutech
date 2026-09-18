"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  DeviceMobile,
  Globe,
  AppWindow,
  Handshake,
  ChatsCircle,
  CheckCircle,
} from "@phosphor-icons/react";
import FAQ from "@/components/FAQ";

// ---------- data ----------
const services = [
  {
    id: "mobile",
    iconKey: "mobile",
    bg: "bg-blue-50",
    accent: "#2563eb",
    title: "Mobile App Development",
    tagline: "Get a mobile app at an affordable cost",
    body: "We recognise the transformative power of mobile applications in shaping the modern digital landscape. Our mission is to create tailored solutions that elevate your brand and provide an exceptional user experience — empowering you to connect with your audience anytime, anywhere.",
  },
  {
    id: "website",
    iconKey: "website",
    bg: "bg-green-50",
    accent: "#16a34a",
    title: "Website Development",
    tagline: "We understand the significance of a compelling website",
    body: "Professional, responsive, and SEO-friendly websites that give your business a strong online presence. We are excited to offer you a tailored solution that will revolutionise the way your brand is perceived and experienced online.",
  },
  {
    id: "webapp",
    iconKey: "webapp",
    bg: "bg-purple-50",
    accent: "#9333ea",
    title: "Web Application Development",
    tagline: "Our approach goes beyond just development",
    body: "We specialise in crafting innovative web applications that redefine how businesses operate online. With a focus on functionality, scalability, and seamless user interaction, we deliver customised solutions that drive efficiency and unlock your brand's full potential.",
  },
  {
    id: "consult",
    iconKey: "consult",
    bg: "bg-orange-50",
    accent: "#f97316",
    title: "Tech Consultation & Collaboration",
    tagline: "Unsure where to start? Partner with us.",
    body: "We guide your digital transformation with expert insights and flexible partnership models. Whether you're a startup or enterprise, we provide the strategy, design, and technology that align perfectly with your business objectives.",
  },
];

const pillars = [
  { label: "Agile Methodology" },
  { label: "Cutting-edge Tech" },
  { label: "Full-Cycle SDLC" },
  { label: "Transparent Delivery" },
  { label: "Post-launch Support" },
  { label: "Global Standards" },
];

const stats = [
  { value: "20+", label: "Brands Served" },
  { value: "5+", label: "Global Tech Partners" },
  { value: "100%", label: "Full-Cycle SDLC" },
  { value: "3+", label: "Years Building" },
];

// ---------- component ----------
export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans overflow-hidden">

      {/* Hero — split: photo left + floating card right */}
      <section className="pt-28 md:pt-32 pb-16 px-6  max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          className="relative rounded-[2rem] overflow-hidden min-h-[480px] md:min-h-[560px] bg-gray-100"
        >
          {/* Full-bleed photo */}
          <img
            src="/happy-biz.jpg"
            alt="Professional business woman"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />

          {/* Subtle dark gradient on the right so the card reads clearly on mobile */}
          <div
            aria-hidden
            className="absolute inset-0"
          />

          {/* Floating white card — right side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="absolute right-5 top-1/2 -translate-y-1/2 w-[90%] sm:w-[60%] md:w-[42%] bg-white rounded-[1.5rem] shadow-2xl p-8 md:p-10 flex flex-col gap-5"
          >
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 font-serif leading-snug">
              Empowering Small &amp; Medium Businesses
            </h1>

            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Blutech is committed to empowering small and medium businesses
              with reliable, scalable, and affordable software solutions. We
              believe every business deserves a tech foundation strong enough to
              compete globally, no matter the size or budget.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-1">
              <Link
                href="https://blutech.ng/contact-us/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 bg-blutech-primary hover:bg-blutech-secondary text-white rounded-full font-semibold text-sm tracking-wide transition-colors text-center"
              >
                Contact Us
              </Link>
              {/* <Link
                href="/"
                className="px-7 py-3.5 bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-full font-semibold text-sm tracking-wide uppercase transition-colors text-center"
              >
                Our Work
              </Link> */}
            </div>
          </motion.div>
        </motion.div>
      </section>


      {/* Stats Strip */}
      <section className="px-6  md:px-6 max-w-7xl mx-auto w-full pb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
              className="bg-[#f1f5f9] rounded-3xl p-8 flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300"
            >
              <span className="text-4xl md:text-5xl font-extrabold text-black font-serif">
                {stat.value}
              </span>
              <span className="mt-2 text-sm text-gray-600 font-medium">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="px-6 md:px-6 max-w-7xl mx-auto w-full pb-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 font-serif leading-tight">
            What Services We Offer
          </h2>
          <p className="mt-4 text-gray-500 text-base max-w-xl mx-auto">
            End-to-end digital solutions tailored to every stage of your business journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((svc, i) => (
            <motion.div
              key={svc.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className={`${svc.bg} rounded-[2rem] p-8 md:p-10 flex flex-col gap-5`}
            >
              {/* Icon badge */}
              <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center">
                {svc.iconKey === "mobile" && <DeviceMobile size={32} weight="duotone" className="text-blue-600" />}
                {svc.iconKey === "website" && <Globe size={32} weight="duotone" className="text-green-600" />}
                {svc.iconKey === "webapp" && <AppWindow size={32} weight="duotone" className="text-purple-600" />}
                {svc.iconKey === "consult" && <ChatsCircle size={32} weight="duotone" className="text-orange-500" />}
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 font-serif mb-1">{svc.title}</h3>
                <p className="text-sm font-semibold mb-3" style={{ color: svc.accent }}>{svc.tagline}</p>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">{svc.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Our Approach */}
      <section className="px-6 md:px-6 max-w-7xl mx-auto w-full pb-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 font-serif leading-snug mb-6">
              More than development - a true partnership
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our approach goes beyond just development. We partner with you to understand
              your goals, challenges, and users. From concept to deployment, we integrate
              cutting-edge technologies and agile methodologies to ensure your applications
              perform flawlessly and scale effortlessly.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Whether you&apos;re a startup aiming to establish your digital presence or an
              enterprise seeking to optimise operations, our team is ready to help you move
              forward with confidence. We combine strategy, design, and technology to create
              solutions that align perfectly with your business objectives.
            </p>
          </motion.div>

          {/* Right — pillars */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="grid grid-cols-2 gap-4"
          >
            {pillars.map((p, i) => (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
                className="bg-[#e0f2fe] rounded-2xl p-5 flex items-center gap-3 hover:-translate-y-1 transition-transform duration-300"
              >
                <CheckCircle size={20} weight="duotone" className="text-blutech-primary flex-shrink-0" />
                <span className="text-sm font-semibold text-gray-800">{p.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <FAQ />
    </div>
  );
}
