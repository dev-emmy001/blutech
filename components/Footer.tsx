import Link from "next/link";

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
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" aria-label="Facebook" className="text-gray-900 hover:text-blutech-primary transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-900 hover:text-blutech-primary transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="text-gray-900 hover:text-blutech-primary transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
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
