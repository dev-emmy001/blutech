"use client"
import Link from "next/link";
import ServicesCarousel from "@/components/ServicesCarousel";
import ServicesBento from "@/components/ServicesBento";
import FloatingImageBlobs from "@/components/FloatingImageBlobs";
import FAQ from "@/components/FAQ";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans overflow-hidden">

      {/* Hero Section */}
      <section className="relative pt-40 md:pt-48 pb-20 px-14 sm:px-16 md:px-24 max-w-7xl mx-auto w-full flex flex-col items-center text-center overflow-visible">
        <FloatingImageBlobs />
        {/* Hero Content */}
        <h1 className="text-3xl md:text-6xl font-extrabold tracking-tight text-gray-900 md:max-w-6xl mx-auto leading-[1.1] font-serif">
          Building Affordable, Scalable Tech Solutions for Growing Businesses
        </h1>

        <p className="mt-6 text-base md:text-l text-gray-600 max-w-4xl mx-auto leading-relaxed">
          <span className="md:hidden">We turn your ideas into powerful web &amp; mobile apps — full SDLC, no bank-breaking fees.</span>
          <span className="hidden md:inline">At Blutech, we're a team of energetic, young, skilled, and highly experienced individuals and stakeholders, whose goal is to work with you in turning your ideas into powerful, presentable, and sustainable web and mobile applications – through the entire SDLC process: from idea analysis, through planning, design, development, deployment, and seamless management – without you breaking the bank.</span>
        </p>

        <h1 className="text-base md:text-lg font-bold tracking-tight text-gray-900 md:max-w-6xl mx-auto mt-1.5 leading-[1.1] font-serif">
          RC: 8892246
        </h1>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center w-full sm:w-auto">
          <Link
            href="/contact"
            className="w-full sm:w-auto px-8 py-4 bg-blutech-primary hover:bg-blutech-secondary text-white rounded-full font-semibold text-lg transition-colors"
          >
            Let's Get Started
          </Link>
          <Link
            href="https://wa.link/oien52"
            className="w-full sm:w-auto px-8 py-4 bg-white border border-gray-900 text-gray-900 hover:bg-gray-50 rounded-full font-semibold text-lg transition-colors"
          >
            Chat on WhatsApp
          </Link>
        </div>
      </section>

      {/* Bento Grid Section */}
      <section className="px-6 max-w-7xl mx-auto w-full pb-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

          {/* Main Left Image (Video Call) */}
          <div className="md:col-span-2 rounded-[2rem] overflow-hidden relative min-h-[300px] md:min-h-[450px] group">
            <img
              src="/working-on-laptop.jpg"
              alt="Professional working on laptop"
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Middle Column (Stacked Cards) */}
          <div className="md:col-span-1 flex flex-col gap-6">
            {/* Teachers Card */}
            <div className="bg-[#FFA28B] rounded-[2rem] p-8 flex flex-col justify-center h-full min-h-[210px]  transform transition-transform hover:-translate-y-1">
              <div className="flex -space-x-3 mb-5">
                <img className="w-12 h-12 rounded-full object-cover bg-white" src="/gtp-section/gdg-icon.png" alt="Teacher" />
                <img className="w-12 h-12 rounded-full object-cover bg-white" src="/gtp-section/aws-icon.png" alt="Teacher" />
                <img className="w-12 h-12 rounded-full object-cover bg-white" src="/gtp-section/google-icon.png" alt="Teacher" />
                <img className="w-12 h-12 rounded-full object-cover bg-white" src="/gtp-section/namecheap-icon.png" alt="Teacher" />
              </div>
              <h3 className="font-bold text-gray-900 text-xl leading-tight font-serif">5+ Global Tech Partners (AWS, GDG, etc.)</h3>
            </div>

            {/* Quote Card */}
            <div className="bg-[#67E8B8] rounded-[2rem] p-8 flex flex-col justify-center h-full min-h-[210px] transform transition-transform hover:-translate-y-1">
              <p className="font-bold text-gray-900 text-lg leading-snug font-serif">
                Full-Cycle SDLC Management
              </p>
              <div className="mt-5">
                <p className="text-sm text-gray-900">Trusted by 20+ Brands. Empowering startups and enterprises with reliable tech foundations.</p>
              </div>
            </div>
          </div>

          {/* Right Image (Boy with tablet) */}
          <div className="md:col-span-1 rounded-[2rem] overflow-hidden relative min-h-[300px] md:min-h-[450px] group">
            <img
              src="/happy-biz.jpg"
              alt="Happy business professional"
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* Services Bento Grid Section */}
      <ServicesBento />

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
              Blutech is committed to empowering small and medium businesses with reliable, scalable, and affordable software solutions. We believe every business deserves a tech foundation strong enough to compete globally, no matter the size or budget. Our team specializes in developing standard websites, web apps, and mobile applications that drive real growth.
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


      {/* Services Carousel Section */}
      {/* <ServicesCarousel /> */}

      {/* FAQ Section */}
      <FAQ />

    </div>
  );
}
