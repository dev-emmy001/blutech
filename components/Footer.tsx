import Link from "next/link";
// import { InstagramLogo, FacebookLogo, TwitterLogo, LinkedinLogo } from "@phosphor-icons/react";

export default function Footer() {
  return (
    <footer className="bg-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">

          {/* Column 1: Brand & Info */}
          <div className="lg:col-span-2 flex flex-col items-start">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <img src="/DuoTone-Main.png" alt="Blutech Logo" className="h-8 w-auto object-contain" />
            </Link>
            <p className="text-gray-600 mb-8 max-w-sm leading-relaxed">
              We believe every business deserves a tech foundation strong enough to compete globally, no matter the size or budget.
            </p>

            {/* Social Icons */}
            {/* <div className="flex gap-4 mb-8">
              <a href="#" aria-label="Instagram" className="text-gray-900 hover:text-blutech-primary transition-colors">
                <InstagramLogo size={24} weight="duotone" />
              </a>
              <a href="#" aria-label="Facebook" className="text-gray-900 hover:text-blutech-primary transition-colors">
                <FacebookLogo size={24} weight="duotone" />
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-900 hover:text-blutech-primary transition-colors">
                <TwitterLogo size={24} weight="duotone" />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-gray-900 hover:text-blutech-primary transition-colors">
                <LinkedinLogo size={24} weight="duotone" />
              </a>
            </div> */}

            {/* <Link href="/contact" className="bg-blutech-primary hover:bg-blutech-secondary text-white px-8 py-3 rounded-full text-sm font-semibold transition-colors">
              Contact Us
            </Link> */}
          </div>

          {/* Column 2: Company */}
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-gray-900 text-lg mb-2 font-serif">Company</h4>
            <Link href="/" className="text-gray-600 hover:text-blutech-primary transition-colors">Home</Link>
            <Link href="/abour" className="text-gray-600 hover:text-blutech-primary transition-colors">About</Link>
            <Link href="/portfolio" className="text-gray-600 hover:text-blutech-primary transition-colors">Portfolio</Link>
            <Link href="/contact" className="text-gray-600 hover:text-blutech-primary transition-colors">Contact</Link>

            {/* <Link href="/blog" className="text-gray-600 hover:text-blutech-primary transition-colors">Blog</Link>
            <Link href="/contact" className="text-gray-600 hover:text-blutech-primary transition-colors">Contact</Link>
            <Link href="/404" className="text-gray-600 hover:text-blutech-primary transition-colors">404</Link> */}
          </div>

          {/* Column 3: Template
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-gray-900 text-lg mb-2 font-serif">Template</h4>
            <Link href="#" className="text-gray-600 hover:text-blutech-primary transition-colors">looped</Link>
            <Link href="#" className="text-gray-600 hover:text-blutech-primary transition-colors">axinn</Link>
          </div> */}

          {/* Column 4: Contact */}
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-gray-900 text-lg mb-2 font-serif">Contact</h4>
            <a href="tel:+621829017" className="text-gray-600 hover:text-blutech-primary transition-colors">+234 8163059312</a>
            <a href="mailto:Hello@blutech.com" className="text-gray-600 hover:text-blutech-primary transition-colors">info@blutech.com</a>
            <p className="text-gray-600 leading-relaxed max-w-[200px]">
              No. 25 Omenazu St. Aba, Abia State
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© All rights reserved. <span className="text-blutech-primary font-medium">Blutech</span></p>
          {/* <p>Powered by <span className="text-blutech-primary font-medium">Blutech</span></p> */}
        </div>
      </div>
    </footer>
  );
}
