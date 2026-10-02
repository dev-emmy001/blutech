"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowRight,
  AppWindow,
  DeviceMobile,
  Globe,
  MagicWand,
} from "@phosphor-icons/react";

// ── Types ──────────────────────────────────────────────────────────────────────
interface Project {
  id: number;
  title: string;
  category: string;
  tags: string[];
  description: string;
  image: string | null;
  imagePlaceholderBg: string;
  iconKey: string;
  featured: boolean;
  link?: string;
}

// ── How many projects to preview ───────────────────────────────────────────────
const PREVIEW_COUNT = 3;

// ── Icon map ───────────────────────────────────────────────────────────────────
function ProjectIcon({ iconKey }: { iconKey: string }) {
  const cls = "text-white/80";
  const size = 28;
  switch (iconKey) {
    case "mobile":
      return <DeviceMobile size={size} weight="duotone" className={cls} />;
    case "website":
      return <Globe size={size} weight="duotone" className={cls} />;
    case "design":
      return <MagicWand size={size} weight="duotone" className={cls} />;
    default:
      return <AppWindow size={size} weight="duotone" className={cls} />;
  }
}

// ── Placeholder (no image yet) ─────────────────────────────────────────────────
function ImagePlaceholder({
  gradient,
  iconKey,
}: {
  gradient: string;
  iconKey: string;
}) {
  return (
    <div
      className={`w-full h-full bg-gradient-to-br ${gradient} flex flex-col items-center justify-center gap-3`}
    >
      <ProjectIcon iconKey={iconKey} />
      <span className="text-white/60 text-xs font-medium tracking-wider uppercase">
        Sample Image
      </span>
    </div>
  );
}

// ── Main Component ─────────────────────────────────────────────────────────────
export default function ProjectsPreview() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch("/data/projects.json")
      .then((res) => res.json())
      .then((data: Project[]) => {
        // Show featured projects first, then fill up to PREVIEW_COUNT
        const featured = data.filter((p) => p.featured);
        const rest = data.filter((p) => !p.featured);
        setProjects([...featured, ...rest].slice(0, PREVIEW_COUNT));
      })
      .catch(() => setProjects([]));;
  }, []);

  if (projects.length === 0) return null;

  return (
    <section className="pt-20 md:pt-28 pb-20 px-6 max-w-7xl mx-auto w-full">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 font-serif leading-tight">
          Some of Our Previous Projects
        </h2>
        <p className="mt-4 text-gray-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          A glimpse of the websites, web apps, and mobile products we&apos;ve
          designed and engineered for our clients.
        </p>
      </motion.div>

      {/* Projects grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="group flex flex-col bg-white rounded-[1.75rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300"
          >
            {/* Image area */}
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
                  />
                </div>
              )}
              {/* Hover arrow */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowUpRight size={16} weight="bold" className="text-white" />
              </div>
            </div>

            {/* Card body */}
            <div className="p-6 flex flex-col gap-3 flex-1">
              <h3 className="text-lg font-bold text-gray-900 font-serif leading-snug">
                {project.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed flex-1">
                {project.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* See more button */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="mt-12 flex justify-center"
      >
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 px-8 py-4 bg-blutech-primary hover:bg-blutech-secondary text-white rounded-full font-semibold text-base transition-colors group/btn"
        >
          See More Projects
          <ArrowRight
            size={18}
            weight="bold"
            className="transition-transform duration-300 group-hover/btn:translate-x-1"
          />
        </Link>
      </motion.div>
    </section>
  );
}
