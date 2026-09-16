"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, AppWindow, DeviceMobile, Globe, MagicWand } from "@phosphor-icons/react";

// ── FILTER CATEGORIES ──────────────────────────────────────────────────────────
const CATEGORIES = ["All", "Web App", "Mobile App", "Website", "UI/UX Design"];

// ── PROJECT DATA ───────────────────────────────────────────────────────────────
// Replace `image` paths with real screenshots once available.
// Each project has a dedicated `imagePlaceholderBg` for the placeholder card colour.
const projects = [
  {
    id: 1,
    title: "FinTrack Dashboard",
    category: "Web App",
    tags: ["Next.js", "TypeScript", "Supabase"],
    description: "A real-time financial analytics dashboard for SME owners to track revenue, expenses, and forecasts at a glance.",
    image: null,
    imagePlaceholderBg: "from-blue-400 to-blue-600",
    iconKey: "webapp",
    featured: true,
  },
  {
    id: 2,
    title: "ShopEase Mobile",
    category: "Mobile App",
    tags: ["React Native", "Firebase", "Stripe"],
    description: "A cross-platform e-commerce app with seamless checkout, push notifications, and real-time inventory sync.",
    image: null,
    imagePlaceholderBg: "from-purple-400 to-purple-700",
    iconKey: "mobile",
    featured: true,
  },
  {
    id: 3,
    title: "Medika Patient Portal",
    category: "Web App",
    tags: ["React", "Node.js", "MongoDB"],
    description: "A HIPAA-compliant portal allowing patients to book appointments, view lab results, and message their doctor.",
    image: null,
    imagePlaceholderBg: "from-teal-400 to-cyan-600",
    iconKey: "webapp",
    featured: false,
  },
  {
    id: 4,
    title: "Harvest Farms",
    category: "Website",
    tags: ["Next.js", "Sanity CMS", "Tailwind"],
    description: "A marketing website and blog for an agri-tech startup, with a custom CMS for non-technical editors.",
    image: null,
    imagePlaceholderBg: "from-green-400 to-emerald-600",
    iconKey: "website",
    featured: false,
  },
  {
    id: 5,
    title: "Lingo Learn App",
    category: "Mobile App",
    tags: ["Flutter", "Dart", "Firebase"],
    description: "A gamified language-learning app with offline support, adaptive quizzes, and daily streak tracking.",
    image: null,
    imagePlaceholderBg: "from-orange-400 to-orange-600",
    iconKey: "mobile",
    featured: false,
  },
  {
    id: 6,
    title: "NexAdmin UI Kit",
    category: "UI/UX Design",
    tags: ["Figma", "Design System", "Prototyping"],
    description: "A comprehensive design system and component library built for SaaS admin dashboards, with 200+ components.",
    image: null,
    imagePlaceholderBg: "from-pink-400 to-rose-600",
    iconKey: "design",
    featured: false,
  },
  {
    id: 7,
    title: "PropertyHub",
    category: "Website",
    tags: ["Next.js", "Google Maps API", "PostgreSQL"],
    description: "A real estate listing platform with map-based search, virtual tours, and mortgage calculator integration.",
    image: null,
    imagePlaceholderBg: "from-yellow-400 to-amber-600",
    iconKey: "website",
    featured: true,
  },
  {
    id: 8,
    title: "VendorLink B2B",
    category: "Web App",
    tags: ["Vue.js", "Laravel", "AWS S3"],
    description: "A B2B procurement platform connecting manufacturers to verified distributors, with automated invoicing.",
    image: null,
    imagePlaceholderBg: "from-indigo-400 to-violet-600",
    iconKey: "webapp",
    featured: false,
  },
];

// ── ICON MAP ───────────────────────────────────────────────────────────────────
function ProjectIcon({ iconKey }: { iconKey: string }) {
  const cls = "text-white/80";
  const size = 28;
  switch (iconKey) {
    case "mobile": return <DeviceMobile size={size} weight="duotone" className={cls} />;
    case "website": return <Globe size={size} weight="duotone" className={cls} />;
    case "design": return <MagicWand size={size} weight="duotone" className={cls} />;
    default: return <AppWindow size={size} weight="duotone" className={cls} />;
  }
}

// ── PLACEHOLDER (no image yet) ─────────────────────────────────────────────────
function ImagePlaceholder({ gradient, iconKey, title }: { gradient: string; iconKey: string; title: string }) {
  return (
    <div className={`w-full h-full bg-gradient-to-br ${gradient} flex flex-col items-center justify-center gap-3`}>
      <ProjectIcon iconKey={iconKey} />
      <span className="text-white/60 text-xs font-medium tracking-wider uppercase">Sample Image</span>
    </div>
  );
}

// ── MAIN COMPONENT ─────────────────────────────────────────────────────────────
export default function PortfolioPage() {
  const [active, setActive] = useState("All");

  const filtered = active === "All"
    ? projects
    : projects.filter((p) => p.category === active);

  const featured = projects.filter((p) => p.featured);

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans">

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="pt-36 md:pt-44 pb-20 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="inline-block mb-4 text-xs font-bold tracking-widest uppercase text-blutech-primary"
            >
              Our Work
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="text-4xl md:text-6xl font-extrabold text-gray-900 font-serif leading-[1.1] max-w-2xl"
            >
              Projects We&apos;ve{" "}
              <span className="text-blutech-primary">Built</span>
            </motion.h1>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="text-gray-500 text-base max-w-sm leading-relaxed md:text-right"
          >
            A curated selection of websites, web apps, and mobile products
            we&apos;ve designed and engineered for clients across industries.
          </motion.p>
        </div>
      </section>

      {/* ── FEATURED ROW ──────────────────────────────────────────────────── */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto w-full pb-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

          {/* Large featured card */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="md:col-span-7 group relative rounded-[2rem] overflow-hidden min-h-[420px] cursor-pointer"
          >
            {featured[0] && (
              <>
                {featured[0].image ? (
                  <img
                    src={featured[0].image}
                    alt={featured[0].title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                    <ImagePlaceholder
                      gradient={featured[0].imagePlaceholderBg}
                      iconKey={featured[0].iconKey}
                      title={featured[0].title}
                    />
                  </div>
                )}
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col gap-2">
                  <span className="text-xs font-bold tracking-widest uppercase text-white/70">
                    {featured[0].category}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-white font-serif leading-tight">
                    {featured[0].title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed max-w-md">
                    {featured[0].description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {featured[0].tags.map((t) => (
                      <span key={t} className="text-xs bg-white/20 text-white px-3 py-1 rounded-full backdrop-blur-sm">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                {/* Arrow */}
                <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowUpRight size={18} weight="bold" className="text-white" />
                </div>
              </>
            )}
          </motion.div>

          {/* Right stacked featured cards */}
          <div className="md:col-span-5 flex flex-col gap-6">
            {featured.slice(1, 3).map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                className="group relative rounded-[1.75rem] overflow-hidden min-h-[192px] cursor-pointer flex-1"
              >
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                    <ImagePlaceholder
                      gradient={project.imagePlaceholderBg}
                      iconKey={project.iconKey}
                      title={project.title}
                    />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-xs font-bold tracking-widest uppercase text-white/60">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-white font-serif mt-1">{project.title}</h3>
                </div>
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowUpRight size={16} weight="bold" className="text-white" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FILTER BAR ────────────────────────────────────────────────────── */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto w-full pb-10">
        <div className="flex flex-wrap gap-3">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-250 ${
                active === cat
                  ? "bg-blutech-primary text-white shadow-md"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* ── ALL PROJECTS GRID ─────────────────────────────────────────────── */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto w-full pb-32">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={active}
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                className="group flex flex-col bg-white rounded-[1.75rem] overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                {/* Image area — 240px tall */}
                <div className="relative overflow-hidden h-[240px] flex-shrink-0">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full transition-transform duration-700 group-hover:scale-105">
                      <ImagePlaceholder
                        gradient={project.imagePlaceholderBg}
                        iconKey={project.iconKey}
                        title={project.title}
                      />
                    </div>
                  )}
                  {/* Category chip */}
                  <span className="absolute top-4 left-4 text-xs font-bold tracking-wider uppercase bg-white/90 text-gray-700 px-3 py-1 rounded-full backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>

                {/* Card body */}
                <div className="p-6 flex flex-col gap-3 flex-1">
                  <h3 className="text-lg font-bold text-gray-900 font-serif leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1">
                    {project.description}
                  </p>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium text-blutech-primary bg-blue-50 px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* ── CTA STRIP ─────────────────────────────────────────────────────── */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto w-full pb-28">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="bg-[#0f172a] rounded-[2rem] px-10 md:px-20 py-14 md:py-16 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden"
        >
          {/* glow */}
          <div aria-hidden className="pointer-events-none absolute -top-10 -left-10 w-60 h-60 rounded-full bg-blutech-primary opacity-20 blur-2xl" />
          <div aria-hidden className="pointer-events-none absolute -bottom-10 -right-10 w-60 h-60 rounded-full bg-[#67E8B8] opacity-15 blur-2xl" />

          <div className="relative">
            <p className="text-white/60 text-sm font-semibold uppercase tracking-widest mb-3">Have a project in mind?</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white font-serif leading-tight max-w-lg">
              Let&apos;s build your next{" "}
              <span className="text-[#67E8B8]">digital product</span>
            </h2>
          </div>

          <div className="relative flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <Link
              href="https://blutech.ng/contact-us/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-blutech-primary hover:bg-blutech-secondary text-white rounded-full font-semibold text-sm tracking-wide uppercase transition-colors text-center"
            >
              Start a Project
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-full font-semibold text-sm tracking-wide uppercase transition-colors text-center"
            >
              About Us
            </Link>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
