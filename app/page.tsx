import Link from "next/link";
import ServicesCarousel from "@/components/ServicesCarousel";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans overflow-hidden">

      {/* Hero Section */}
      <section className="relative pt-40 md:pt-48 pb-16 px-6 max-w-7xl mx-auto w-full flex flex-col items-center text-center">

        {/* Hero Content */}
        <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight text-gray-900 md:max-w-6xl mx-auto leading-[1.1] font-serif">
          Building Affordable, Scalable Tech Solutions for Growing Businesses
        </h1>

        <p className="mt-6 text-base md:text-l text-gray-600 max-w-4xl mx-auto leading-relaxed">
          We turn your ideas into powerful web and mobile applications. Our expert team handles the entire development lifecycle—from concept to deployment—delivering premium, sustainable solutions that fit your budget.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center w-full sm:w-auto">
          <Link
            href="/courses"
            className="w-full sm:w-auto px-8 py-4 bg-blutech-primary hover:bg-blutech-secondary text-white rounded-full font-semibold text-lg transition-colors"
          >
            Let's Get Started
          </Link>
          <Link
            href="/contact"
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
          <div className="md:col-span-2 rounded-[2rem] overflow-hidden relative min-h-[300px] md:min-h-[450px] shadow-sm group">
            <img
              src="/working-on-laptop.jpg"
              alt="Professional working on laptop"
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Middle Column (Stacked Cards) */}
          <div className="md:col-span-1 flex flex-col gap-6">
            {/* Teachers Card */}
            <div className="bg-[#FFA28B] rounded-[2rem] p-8 flex flex-col justify-center h-full min-h-[210px] shadow-sm transform transition-transform hover:-translate-y-1">
              <div className="flex -space-x-3 mb-5">
                <img className="w-12 h-12 rounded-full border-2 border-[#FFA28B] object-cover" src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&fit=crop&w=100&q=80" alt="Teacher" />
                <img className="w-12 h-12 rounded-full border-2 border-[#FFA28B] object-cover" src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&fit=crop&w=100&q=80" alt="Teacher" />
                <img className="w-12 h-12 rounded-full border-2 border-[#FFA28B] object-cover" src="https://images.unsplash.com/photo-1589156191108-c762ff4b96ab?auto=format&fit=crop&w=100&q=80" alt="Teacher" />
                {/* <img className="w-12 h-12 rounded-full border-2 border-[#FFA28B] object-cover" src="https://images.unsplash.com/photo-1523824922382-2058b8f2a249?auto=format&fit=crop&w=100&q=80" alt="Teacher" /> */}
                <img className="w-12 h-12 rounded-full border-2 border-[#FFA28B] object-cover" src="https://images.unsplash.com/photo-1506803682981-6e718a9dd3ee?auto=format&fit=crop&w=100&q=80" alt="Teacher" />
              </div>
              <h3 className="font-bold text-gray-900 text-xl leading-tight font-serif">5+ Global Tech Partners (AWS, GDG, etc.)</h3>
            </div>

            {/* Quote Card */}
            <div className="bg-[#67E8B8] rounded-[2rem] p-8 flex flex-col justify-center h-full min-h-[210px] shadow-sm transform transition-transform hover:-translate-y-1">
              <p className="font-bold text-gray-900 text-lg leading-snug font-serif">
                Full-Cycle SDLC Management
              </p>
              <div className="mt-5">
                <p className="text-sm text-gray-900">Trusted by 20+ Brands. Empowering startups and enterprises with reliable tech foundations.</p>
              </div>
            </div>
          </div>

          {/* Right Image (Boy with tablet) */}
          <div className="md:col-span-1 rounded-[2rem] overflow-hidden relative min-h-[300px] md:min-h-[450px] shadow-sm group">
            <img
              src="/happy-biz.jpg"
              alt="Happy business professional"
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* Services Carousel Section */}
      <ServicesCarousel />

    </div>
  );
}
