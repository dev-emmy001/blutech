"use client";

const partners = [
  { name: "CoBuild", logo: "/partners/cobuild.svg" },
  { name: "IGHub", logo: "/partners/ighub.webp" },
  { name: "GUDS", logo: "/partners/guds.png" },
  { name: "AWS", logo: "/partners/aws.png" },
  { name: "GDG", logo: "/partners/gdg.png" },
  { name: "Namecheap", logo: "/partners/namecheap.png" },
  { name: "Google", logo: "/partners/google.png" },
  { name: "Clintonel", logo: "/partners/clintonel.jpg" },
];

const clients = [
  { name: "Oxypu", logo: "/clients/oxypu.webp" },
  { name: "AirDeep Innovations", logo: "/clients/airdeep.png" },
  { name: "IT Service Africa", logo: "/clients/itserviceafrica.png" },
  { name: "LPG Eazy", logo: "/clients/lpgeazy.png" },
  { name: "DHMS", logo: "/clients/dhms.webp" },
  { name: "Lights On Heights", logo: "/clients/lightsonheights.webp" },
  { name: "Abia State Polytechnic", logo: "/clients/abia-poly.png" },
];

interface LogoItem {
  name: string;
  logo: string;
}

function LogoTrack({
  items,
  direction = "left",
  speed = 30,
}: {
  items: LogoItem[];
  direction?: "left" | "right";
  speed?: number;
}) {
  const animClass = direction === "left" ? "animate-scroll-left" : "animate-scroll-right";

  const renderItem = (item: LogoItem, idx: number) => (
    <div
      key={idx}
      className="flex-shrink-0 w-[140px] h-[64px] bg-white rounded-2xl flex items-center justify-center mx-3 transition-shadow duration-200"
    >
      <img
        src={item.logo}
        alt={item.name}
        className="max-h-[40px] max-w-[100px] object-contain"
      />
    </div>
  );

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
        {items.map((item, idx) => renderItem(item, idx))}
        {/* Duplicate for seamless loop */}
        {items.map((item, idx) => renderItem(item, idx + items.length))}
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
            <h3 className="text-sm font-semibold text-blutech-primary whitespace-nowrap">
              Our Partners
            </h3>
            <div className="h-px flex-1 bg-gray-200" />
          </div>
          <LogoTrack items={partners} direction="left" speed={25} />
        </div>

        {/* Clients */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-sm font-semibold text-blutech-primary whitespace-nowrap">
              Some Of Our Clients
            </h3>
            <div className="h-px flex-1 bg-gray-200" />
          </div>
          <LogoTrack items={clients} direction="right" speed={35} />
        </div>
      </div>
    </section>
  );
}
