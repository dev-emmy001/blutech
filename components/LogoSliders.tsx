"use client";

const partners = [
  { name: "AWS", logo: "/gtp-section/aws-icon.png" },
  { name: "Google", logo: "/gtp-section/google-icon.png" },
  { name: "GDG", logo: "/gtp-section/gdg-icon.png" },
  { name: "Namecheap", logo: "/gtp-section/namecheap-icon.png" },
  { name: "AWS", logo: "/gtp-section/aws-icon.png" },
  { name: "Google", logo: "/gtp-section/google-icon.png" },
  { name: "GDG", logo: "/gtp-section/gdg-icon.png" },
  { name: "Namecheap", logo: "/gtp-section/namecheap-icon.png" },
];

const clients = [
  "TechStart Inc.",
  "GreenField Farms",
  "UrbanEdge Realty",
  "NovaPay",
  "SwiftLogix",
  "BrightPath Academy",
  "CoreBuild Ltd.",
  "PulseHealth",
];

function LogoTrack({
  items,
  direction = "left",
  speed = 30,
}: {
  items: typeof partners | string[];
  direction?: "left" | "right";
  speed?: number;
}) {
  const isImageSlider = typeof items[0] !== "string";
  const animClass = direction === "left" ? "animate-scroll-left" : "animate-scroll-right";

  const renderItem = (item: (typeof partners)[0] | string, idx: number) => {
    if (typeof item === "string") {
      return (
        <div
          key={idx}
          className="flex-shrink-0 px-8 py-4 bg-blutech-surface rounded-2xl flex items-center justify-center mx-3 hover:bg-blue-50 transition-colors duration-200"
        >
          <span className="text-gray-600 font-semibold text-sm whitespace-nowrap tracking-wide">
            {item}
          </span>
        </div>
      );
    }
    return (
      <div
        key={idx}
        className="flex-shrink-0 w-[120px] h-[60px] bg-white rounded-2xl flex items-center justify-center mx-3 shadow-sm hover:shadow-md transition-shadow duration-200"
      >
        <img
          src={item.logo}
          alt={item.name}
          className="max-h-[36px] max-w-[90px] object-contain"
        />
      </div>
    );
  };

  return (
    <div className="overflow-hidden relative">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      <div
        className={`flex w-max ${animClass}`}
        style={{ ["--scroll-speed" as string]: `${speed}s` }}
      >
        {/* First set */}
        {items.map((item, idx) => renderItem(item as any, idx))}
        {/* Duplicate for seamless loop */}
        {items.map((item, idx) => renderItem(item as any, idx + items.length))}
      </div>
    </div>
  );
}

export default function LogoSliders() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Partners */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-sm font-semibold tracking-widest text-blutech-primary uppercase whitespace-nowrap">
              Our Partners
            </h3>
            <div className="h-px flex-1 bg-gray-200" />
          </div>
          <LogoTrack items={partners} direction="left" speed={25} />
        </div>

        {/* Clients */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-sm font-semibold tracking-widest text-blutech-primary uppercase whitespace-nowrap">
              Trusted By
            </h3>
            <div className="h-px flex-1 bg-gray-200" />
          </div>
          <LogoTrack items={clients} direction="right" speed={35} />
        </div>
      </div>
    </section>
  );
}
