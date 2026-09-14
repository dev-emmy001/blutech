import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans items-center justify-center px-6 text-center">
      {/* Illustration */}
      <div className="w-full max-w-md md:max-w-lg relative">
        <Image
          src="/404error.avif"
          alt="404 — Page not found"
          width={640}
          height={480}
          priority
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Copy */}
      <p className="mt-2 text-gray-600 text-base md:text-lg max-w-md leading-relaxed">
        Looks like the page you&apos;re looking for doesn&apos;t exist or has been moved.
        <br />
        But don&apos;t worry, we&apos;re here to help!
      </p>

      {/* CTA */}
      <Link
        href="/"
        className="mt-8 px-10 py-3 bg-blutech-primary hover:bg-blutech-secondary text-white rounded-full font-semibold text-base transition-colors"
      >
        Go back to home page
      </Link>
    </div>
  );
}
