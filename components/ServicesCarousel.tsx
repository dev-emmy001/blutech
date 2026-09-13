"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

const services = [
  {
    id: 1,
    title: "Web Development",
    subtitle: "Custom websites & web apps",
    bgColor: "bg-blue-50",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
        <line x1="8" y1="21" x2="16" y2="21"></line>
        <line x1="12" y1="17" x2="12" y2="21"></line>
      </svg>
    ),
  },
  {
    id: 2,
    title: "UI/UX Design",
    subtitle: "Intuitive user experiences",
    bgColor: "bg-orange-50",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500">
        <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
        <path d="M2 2l7.586 7.586"></path>
        <circle cx="11" cy="11" r="2"></circle>
      </svg>
    ),
  },
  {
    id: 3,
    title: "Mobile Apps",
    subtitle: "iOS & Android solutions",
    bgColor: "bg-green-50",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
        <line x1="12" y1="18" x2="12.01" y2="18"></line>
      </svg>
    ),
  },
  {
    id: 4,
    title: "Cloud Solutions",
    subtitle: "Scalable infrastructure",
    bgColor: "bg-purple-50",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600">
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
      </svg>
    ),
  },
  {
    id: 5,
    title: "Digital Marketing",
    subtitle: "SEO & Growth strategies",
    bgColor: "bg-yellow-50",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-600">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
      </svg>
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
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 font-serif leading-tight">
            Explore Core <br /> Services
          </h2>

          <div className="mt-10 flex items-center gap-4 hidden md:flex">
            <button
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-blutech-primary hover:text-blutech-primary transition-colors focus:outline-none"
              aria-label="Scroll left"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full bg-blutech-primary text-white flex items-center justify-center hover:bg-blutech-secondary transition-colors shadow-md focus:outline-none"
              aria-label="Scroll right"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
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
                className={`flex-shrink-0 w-[260px] md:w-[280px] p-8 rounded-3xl snap-start flex flex-col justify-between min-h-[220px] ${service.bgColor}`}
              >
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-8 border border-white/40">
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
          <div className="mt-4 flex items-center gap-4 md:hidden justify-center pr-6">
            <button
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-blutech-primary hover:text-blutech-primary transition-colors focus:outline-none"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full bg-blutech-primary text-white flex items-center justify-center hover:bg-blutech-secondary transition-colors shadow-md focus:outline-none"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
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
