import type { Metadata } from "next";
import { Roboto_Slab, Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  variable: "--font-roboto-slab",
  weight: ["400", "500", "600", "700"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700"],
});

const SITE_URL = "https://blutech.ng";
const SITE_NAME = "Blutechnology Innovations";
const SITE_DESCRIPTION =
  "Building Affordable, Scalable Tech Solutions for Growing Businesses. We design and engineer websites, web apps, and mobile products for SMEs across Africa.";
const OG_IMAGE = "/site-preview.png";

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} | Custom Tech Solutions`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Custom Tech Solutions`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} – Building Affordable, Scalable Tech Solutions`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Custom Tech Solutions`,
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${robotoSlab.variable} ${jakarta.variable}`}>
      <body className="font-sans antialiased bg-white text-gray-900 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        {/* Bottom fog overlay — fixed, pointer-events-none so it doesn't block clicks */}
        <div
          aria-hidden="true"
          style={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            height: "120px",
            pointerEvents: "none",
            zIndex: 40,
            background:
              "linear-gradient(to top, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.55) 40%, rgba(255,255,255,0.15) 70%, transparent 100%)",
            backdropFilter: "blur(6px)",
            WebkitBackdropFilter: "blur(6px)",
            maskImage: "linear-gradient(to top, black 0%, black 30%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to top, black 0%, black 30%, transparent 100%)",
          }}
        />
        <Footer />
      </body>
    </html>
  );
}