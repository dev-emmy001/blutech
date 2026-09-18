"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Desktop, MagicWand, DeviceMobile, Cloud, TrendUp, ArrowLeft, ArrowRight } from "@phosphor-icons/react";

const services = [
  {
    id: 1,
    title: "Web Development",
    subtitle: "Custom websites & web apps",
    bgColor: "bg-blue-50",
    icon: (
      <Desktop size={32} weight="duotone" className="text-blue-600" />
    ),
  },
  {
    id: 2,
    title: "UI/UX Design",
    subtitle: "Intuitive user experiences",
    bgColor: "bg-orange-50",
    icon: (
      <MagicWand size={32} weight="duotone" className="text-orange-500" />
    ),
  },
  {
    id: 3,
    title: "Mobile Apps",
    subtitle: "iOS & Android solutions",
    bgColor: "bg-green-50",
    icon: (
      <DeviceMobile size={32} weight="duotone" className="text-green-600" />
    ),
  },
  {
    id: 4,
    title: "Cloud Solutions",
    subtitle: "Scalable infrastructure",
    bgColor: "bg-purple-50",
    icon: (
      <Cloud size={32} weight="duotone" className="text-purple-600" />
    ),
  },
  {
    id: 5,
    title: "Digital Marketing",
    subtitle: "SEO & Growth strategies",
    bgColor: "bg-yellow-50",
    icon: (
      <TrendUp size={32} weight="duotone" className="text-yellow-600" />
    ),
  }
];

export default function ServicesCarousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = 320; // Approximately the width of one card + gap
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="py-20 overflow-hidden bg-white pl-6 md:pl-0">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center">

        {/* Left Side: Title & Buttons */}
        <div className="w-full md:w-1/3 flex flex-col items-start md:px-0 flex-shrink-0">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 font-serif leading-tight mb-4 md:mb-0">
            Explore Core Services
          </h2>

          <div className="mt-10 flex items-center gap-4 hidden md:flex">
            <button
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-blutech-primary hover:text-blutech-primary transition-colors focus:outline-none"
              aria-label="Scroll left"
            >
              <ArrowLeft size={24} weight="regular" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full bg-blutech-primary text-white flex items-center justify-center hover:bg-blutech-secondary transition-colors focus:outline-none"
              aria-label="Scroll right"
            >
              <ArrowRight size={24} weight="regular" />
            </button>
          </div>
        </div>

        {/* Right Side: Carousel */}
        <div className="w-full md:w-2/3 relative">
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-8 snap-x snap-mandatory pr-6 md:pr-0"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {services.map((service) => (
              <motion.div
                key={service.id}
                whileHover={{ y: -5 }}
                className={`flex-shrink-0 w-[260px] md:w-[280px] p-6 md:p-8 rounded-3xl snap-start flex flex-col justify-between min-h-[200px] md:min-h-[220px] ${service.bgColor}`}
              >
                <div className="mb-8">
                  {service.icon}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-xl mb-1">{service.title}</h3>
                  <p className="text-sm text-gray-600 font-medium">{service.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Buttons (shown under cards on mobile) */}
          <div className="mt-4 flex items-center gap-4 md:hidden justify-start">
            <button
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full border border-blutech-primary bg-white flex items-center justify-center text-blutech-primary hover:bg-blutech-primary hover:text-white transition-colors focus:outline-none"
            >
              <ArrowLeft size={24} weight="regular" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full bg-blutech-primary text-white flex items-center justify-center hover:bg-blutech-secondary transition-colors focus:outline-none"
            >
              <ArrowRight size={24} weight="regular" />
            </button>
          </div>
        </div>

      </div>

      {/* Hide scrollbar styles for webkit */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
      `}} />
    </section>
  );
}
