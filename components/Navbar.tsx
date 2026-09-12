"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  // { name: "Courses", href: "/courses" },
  { name: "Portfolio", href: "/portfolio" },
  // { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white">
      <nav className="flex items-center justify-between px-6 py-6 max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 z-50 relative">
          <motion.img
            src="/DuoTone-Main.png"
            alt="Blutech Logo"
            whileHover={{ scale: 1.05 }}
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-base font-semibold text-gray-700">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative group hover:text-blutech-primary transition-colors duration-300"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blutech-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blutech-primary hover:bg-blutech-secondary text-white px-10 py-3 rounded-full text-base font-semibold transition-colors"
            >
              Contact Us
            </motion.button>
          </Link>
        </div>

        {/* Mobile Menu Button (2 bars) */}
        <button
          className="md:hidden p-2 text-gray-800 z-50 relative flex flex-col justify-center items-center gap-1.5 w-10 h-10"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <motion.span
            animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 4 : 0 }}
            className="block w-6 h-0.5 bg-current rounded-full origin-center"
          ></motion.span>
          <motion.span
            animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -4 : 0 }}
            className="block w-6 h-0.5 bg-current rounded-full origin-center"
          ></motion.span>
        </button>

        {/* Mobile Floating Menu Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute top-20 left-4 right-4 bg-white shadow-sm  rounded-3xl flex flex-col p-6 gap-2 md:hidden z-40 overflow-hidden"
            >
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="block text-lg font-semibold text-gray-800 hover:text-blutech-primary hover:bg-blutech-surface p-3 rounded-2xl transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="pt-4 mt-2"
              >
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  <button className="bg-blutech-primary hover:bg-blutech-secondary text-white px-6 py-4 rounded-full text-center font-semibold block w-full transition-colors ">
                    Contact Us
                  </button>
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
