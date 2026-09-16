type FloatingImage = {
    src: string;
    alt: string;
    bg: string;
    rotate: string;
    radius?: string;
    clipPath?: string;
    position: string;
    floatClass: string;
};

const HEXAGON = "polygon(100% 50%, 75% 93%, 25% 93%, 0% 50%, 25% 7%, 75% 7%)";
const BURST =
    "polygon(50% 0%, 62% 20%, 85% 15%, 80% 38%, 100% 50%, 80% 62%, 85% 85%, 62% 80%, 50% 100%, 38% 80%, 15% 85%, 20% 62%, 0% 50%, 20% 38%, 15% 15%, 38% 20%)";

const IMAGES: FloatingImage[] = [
    {
        // Top-left — sits just below the navbar, clear of the heading
        src: "/floating/image-1.png",
        alt: "",
        bg: "bg-blutech-primary",
        rotate: "-rotate-12",
        radius: "rounded-[30%]",
        position: "left-[4%] top-50 h-14 w-14 sm:h-16 sm:w-16 md:left-[2%] md:top-40 md:h-24 md:w-24",
        floatClass: "floating-shape animate-[float-slow_7s_ease-in-out_infinite]",
    },
    {
        // Top-right — sits just below the navbar, far right corner
        src: "/floating/image-2.png",
        alt: "",
        bg: "bg-[#FFA28B]",
        rotate: "-rotate-6",
        clipPath: HEXAGON,
        position:
            "right-[4%] top-30 h-14 w-14 sm:h-20 sm:w-20 md:right-[2%] md:top-30 md:h-28 md:w-28",
        floatClass:
            "floating-shape animate-[float-slow-reverse_8s_ease-in-out_infinite] [animation-delay:0.4s]",
    },
    {
        // Bottom-left — hidden on mobile to avoid overlapping CTA buttons
        src: "/floating/image-3.png",
        alt: "",
        bg: "bg-[#FFA28B]",
        rotate: "rotate-3",
        radius: "rounded-[63%_37%_54%_46%/43%_37%_63%_57%]",
        position: "hidden sm:block left-[1%] bottom-[10%] h-16 w-16 md:left-[2%] md:bottom-[14%] md:h-24 md:w-24",
        floatClass:
            "floating-shape animate-[float-slow_9s_ease-in-out_infinite] [animation-delay:0.8s]",
    },
    {
        // Bottom-right — hidden on mobile to avoid overlapping CTA buttons
        src: "/floating/image.png",
        alt: "",
        bg: "bg-[#67E8B8]",
        rotate: "rotate-6",
        clipPath: BURST,
        position:
            "hidden sm:block right-[1%] bottom-[6%] h-16 w-16 sm:h-20 sm:w-20 md:right-[2%] md:bottom-[10%] md:h-28 md:w-28",
        floatClass:
            "floating-shape animate-[float-slow-reverse_7.5s_ease-in-out_infinite] [animation-delay:1.1s]",
    },
];

export default function FloatingImageBlobs() {
    return (
        <div className="pointer-events-none absolute inset-0" aria-hidden>
            {IMAGES.map((img) => (
                <div key={img.src} className={`absolute ${img.position} ${img.floatClass}`}>
                    <div
                        className={`h-full w-full p-1 ${img.bg} ${img.rotate} ${img.radius ?? ""}`}
                        style={img.clipPath ? { clipPath: img.clipPath } : undefined}
                    >
                        <div
                            className={`h-full w-full overflow-hidden ${img.radius ?? ""}`}
                            style={img.clipPath ? { clipPath: img.clipPath } : undefined}
                        >
                            <img src={img.src} alt={img.alt} className="h-full w-full object-cover" />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}