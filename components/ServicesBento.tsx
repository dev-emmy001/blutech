"use client";

import { motion, Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: "easeOut" },
  }),
};

export default function ServicesBento() {
  return (
    <section className="px-6 max-w-7xl mx-auto w-full pb-24 pt-10">
      {/* Section Header */}
      <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 font-serif leading-tight max-w-lg">
            What Services We Offer
          </h2>
        </div>
        <p className="text-gray-500 text-base max-w-sm md:text-right leading-relaxed">
          End-to-end digital solutions tailored for startups, SMEs, and enterprises — built to grow with you.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-auto">

        {/* ── Row 1 ── */}

        {/* 1. Mobile App Development – surface card (left, 5 cols) */}
        <motion.div
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="md:col-span-5 bg-blutech-surface rounded-[2rem] p-8 flex flex-col justify-start min-h-[280px] group hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden"
        >
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 700 400" preserveAspectRatio="none" fill="none">
            <path d="M0 200 Q250 100 450 220 Q600 300 700 180 L700 400 L0 400 Z" fill="#e2e8f0" fillOpacity="0.35" />
            <path d="M0 280 Q200 180 420 280 Q580 340 700 260 L700 400 L0 400 Z" fill="#e2e8f0" fillOpacity="0.25" />
          </svg>
          <div className="relative z-10">
            <h3 className="text-2xl font-extrabold text-gray-900 font-serif leading-snug mb-3">
              Mobile App<br />Development
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Get custom-built mobile applications that redefine how businesses operate. Optimised performance and seamless user experiences on iOS &amp; Android.
            </p>
          </div>
        </motion.div>

        {/* 2. "Get A Mobile App…" – blue accent card (right, 7 cols) */}
        <motion.div
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="md:col-span-7 bg-blutech-primary rounded-[2rem] p-8 flex flex-col justify-start min-h-[280px] group hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden"
        >
          {/* Wave decorations */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 700 400" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 180 Q200 80 400 200 Q550 280 700 160 L700 400 L0 400 Z" fill="#004bf5" fillOpacity="0.45" />
            <path d="M0 260 Q180 160 380 260 Q520 330 700 240 L700 400 L0 400 Z" fill="#004bf5" fillOpacity="0.3" />
          </svg>
          <h3 className="relative z-10 text-2xl md:text-3xl font-extrabold text-white font-serif leading-snug mb-3">
            Get A Mobile App<br />At An Affordable Cost
          </h3>
          <p className="relative z-10 text-blue-100 text-sm leading-relaxed max-w-md">
            We recognise the transformative power of mobile applications. Our mission is to create tailored solutions that elevate your brand and connect you with your audience anytime, anywhere.
          </p>
        </motion.div>

        {/* ── Row 2 ── */}

        {/* 3. "We understand compelling websites" – green card (4 cols) */}
        <motion.div
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="md:col-span-4 bg-[#67E8B8] rounded-[2rem] p-8 flex flex-col justify-start group hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden"
        >
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 700 400" preserveAspectRatio="none" fill="none">
            <path d="M0 190 Q220 90 440 210 Q580 290 700 170 L700 400 L0 400 Z" fill="#4dd9a0" fillOpacity="0.2" />
            <path d="M0 270 Q200 170 400 270 Q560 340 700 250 L700 400 L0 400 Z" fill="#4dd9a0" fillOpacity="0.15" />
          </svg>
          <h3 className="relative z-10 text-xl font-extrabold text-gray-900 font-serif leading-snug mb-3">
            We understand the significance of a compelling website
          </h3>
          <p className="relative z-10 text-gray-700 text-sm leading-relaxed">
            We offer tailored solutions that will revolutionise the way your brand is perceived and experienced online.
          </p>
        </motion.div>

        {/* 4. Website Development – surface card (4 cols) */}
        <motion.div
          custom={3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="md:col-span-4 bg-blutech-surface rounded-[2rem] p-8 flex flex-col justify-start group hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden"
        >
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 700 400" preserveAspectRatio="none" fill="none">
            <path d="M0 210 Q230 110 460 230 Q590 300 700 190 L700 400 L0 400 Z" fill="#e2e8f0" fillOpacity="0.35" />
            <path d="M0 290 Q210 190 430 290 Q570 350 700 270 L700 400 L0 400 Z" fill="#e2e8f0" fillOpacity="0.25" />
          </svg>
          <div className="relative z-10">
            <h3 className="text-2xl font-extrabold text-gray-900 font-serif leading-snug mb-3">
              Website Development
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Professional, responsive, and SEO-friendly websites that give your business a strong, credible online presence from day one.
            </p>
          </div>
        </motion.div>

        {/* 5. UI/UX Design – salmon card (4 cols) */}
        <motion.div
          custom={4}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="md:col-span-4 bg-[#FFA28B] rounded-[2rem] p-8 flex flex-col justify-start group hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden"
        >
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 700 400" preserveAspectRatio="none" fill="none">
            <path d="M0 195 Q240 95 450 215 Q590 295 700 175 L700 400 L0 400 Z" fill="#f0906e" fillOpacity="0.2" />
            <path d="M0 275 Q190 175 410 275 Q560 340 700 255 L700 400 L0 400 Z" fill="#f0906e" fillOpacity="0.15" />
          </svg>
          <div className="relative z-10">
            <h3 className="text-2xl font-extrabold text-gray-900 font-serif leading-snug mb-3">
              UI/UX Design
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Intuitive, beautiful interfaces that turn visitors into loyal users. We design for people — not just screens.
            </p>
          </div>
        </motion.div>

        {/* ── Row 3 ── */}

        {/* 6. Web App Development – dark card (7 cols) */}
        <motion.div
          custom={5}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="md:col-span-7 bg-blutech-dark rounded-[2rem] p-8 flex flex-col md:flex-row items-stretch gap-6 min-h-[280px] group hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden"
        >
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 700 400" preserveAspectRatio="none" fill="none">
            <path d="M0 185 Q210 85 430 205 Q570 285 700 165 L700 400 L0 400 Z" fill="#1e3050" fillOpacity="0.35" />
            <path d="M0 265 Q190 165 400 265 Q550 335 700 245 L700 400 L0 400 Z" fill="#1e3050" fillOpacity="0.25" />
          </svg>
          {/* Text */}
          <div className="relative z-10 flex flex-col justify-center md:w-1/2">
            <h3 className="text-2xl md:text-3xl font-extrabold text-white font-serif leading-snug mb-3">
              Web Application<br />Development
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              We specialise in crafting innovative web applications that redefine how businesses operate online. From concept to deployment — cutting-edge tech, agile delivery, and scalable results.
            </p>
          </div>
          {/* Image */}
          <div className="relative z-10 md:w-1/2 rounded-2xl overflow-hidden min-h-[180px]">
            <img
              src="/working-on-laptop.jpg"
              alt="Web application dashboard"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </motion.div>

        {/* 7. Right column mini-cards (5 cols) */}
        <div className="md:col-span-5 flex flex-col gap-6">

          {/* Cloud Solutions */}
          <motion.div
            custom={6}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="bg-blutech-surface rounded-[2rem] p-7 flex flex-col group hover:-translate-y-1 transition-transform duration-300 flex-1 relative overflow-hidden"
          >
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 700 300" preserveAspectRatio="none" fill="none">
              <path d="M0 180 Q250 100 500 200 Q620 250 700 170 L700 300 L0 300 Z" fill="#e2e8f0" fillOpacity="0.3" />
            </svg>
            <h3 className="relative z-10 font-extrabold text-gray-900 font-serif text-lg mb-1">Cloud Solutions</h3>
            <p className="relative z-10 text-gray-500 text-sm leading-relaxed">
              Scalable, secure cloud infrastructure on AWS &amp; GCP — hosted and managed for you.
            </p>
          </motion.div>

          {/* Digital Marketing */}
          <motion.div
            custom={7}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="bg-blutech-surface rounded-[2rem] p-7 flex flex-col group hover:-translate-y-1 transition-transform duration-300 flex-1 relative overflow-hidden"
          >
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 700 300" preserveAspectRatio="none" fill="none">
              <path d="M0 170 Q230 90 480 190 Q610 240 700 160 L700 300 L0 300 Z" fill="#e2e8f0" fillOpacity="0.3" />
            </svg>
            <h3 className="relative z-10 font-extrabold text-gray-900 font-serif text-lg mb-1">Digital Marketing &amp; SEO</h3>
            <p className="relative z-10 text-gray-500 text-sm leading-relaxed">
              Data-driven growth strategies — SEO, social, and analytics that convert traffic into revenue.
            </p>
          </motion.div>

          {/* Maintenance */}
          <motion.div
            custom={8}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="bg-blutech-surface rounded-[2rem] p-7 flex flex-col group hover:-translate-y-1 transition-transform duration-300 flex-1 relative overflow-hidden"
          >
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 700 300" preserveAspectRatio="none" fill="none">
              <path d="M0 190 Q240 110 490 210 Q630 260 700 180 L700 300 L0 300 Z" fill="#e2e8f0" fillOpacity="0.3" />
            </svg>
            <h3 className="relative z-10 font-extrabold text-gray-900 font-serif text-lg mb-1">Maintenance &amp; Support</h3>
            <p className="relative z-10 text-gray-500 text-sm leading-relaxed">
              Ongoing care plans to keep your platform fast, secure, and always up to date.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
