import Image from "next/image"
import { motion } from "framer-motion"

const images = [
    { src: "/images/gallery/gallery-2.webp", alt: "Dental Treatment Results" },
    { src: "/images/gallery/gallery-3.webp", alt: "Dental Treatment Results" },
    { src: "/images/gallery/gallery-4.webp", alt: "Dental Treatment Results" },
    { src: "/images/gallery/gallery-5.webp", alt: "Dental Treatment Results" },
    { src: "/images/gallery/gallery-6.webp", alt: "Dental Treatment Results" },
    { src: "/images/gallery/gallery-7.webp", alt: "Dental Treatment Results" },
    { src: "/images/gallery/gallery-8.webp", alt: "Dental Treatment Results" },
    { src: "/images/gallery/gallery-scraped-2.webp", alt: "Dental Treatment Results" },
    { src: "/images/gallery/gallery-scraped-3.webp", alt: "Dental Treatment Results" },
    { src: "/images/gallery/gallery-scraped-4.webp", alt: "Dental Treatment Results" },
    { src: "/images/gallery/gallery-scraped-6.webp", alt: "Dental Treatment Results" },
    { src: "/images/gallery/gallery-scraped-13.webp", alt: "Dental Treatment Results" },
    { src: "/images/gallery/gallery-scraped-16.webp", alt: "Dental Treatment Results" },
    { src: "/images/gallery/gallery-scraped-26.webp", alt: "Dental Treatment Results" },
    { src: "/images/gallery/gallery-scraped-44.webp", alt: "Dental Treatment Results" },
]

// Split images into 3 rows (5 images per row)
const chunk1 = images.slice(0, 5);
const chunk2 = images.slice(5, 10);
const chunk3 = images.slice(10);

const Marquee = ({ items, direction = "left", speed = 25 }: { items: typeof images, direction?: "left" | "right", speed?: number }) => {
    return (
        <div className="flex overflow-hidden py-4 select-none group">
            <motion.div
                initial={{ x: direction === "left" ? 0 : "-100%" }}
                animate={{ x: direction === "left" ? "-100%" : 0 }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: speed,
                }}
                className="flex flex-shrink-0 gap-6 min-w-full"
            >
                {[...items, ...items].map((img, i) => (
                    <div key={i} className="relative w-[300px] sm:w-[400px] aspect-[4/3] rounded-2xl overflow-hidden shadow-md shrink-0">
                        <Image
                            src={img.src}
                            alt={img.alt}
                            fill
                            className="object-cover"
                            sizes="400px"
                        />
                    </div>
                ))}
            </motion.div>
            {/* Duplicate for seamless loop - actually already duplicTED above in map but we need two motion divs? 
                 Ah, simple marquee pattern usually involves TWO identical children moving together.
                 Let's stick to the single motion div with doubled content approach which works if width is correct,
                 OR better: use two identical flex container children moving in sync. 
                 
                 Let's try the two-children approach for robustness:
            */}
            <motion.div
                initial={{ x: direction === "left" ? 0 : "-100%" }}
                animate={{ x: direction === "left" ? "-100%" : 0 }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: speed,
                }}
                className="flex flex-shrink-0 gap-6 min-w-full pl-6" // pl-6 to match gap
            >
                {[...items, ...items].map((img, i) => (
                    <div key={`duplicate-${i}`} className="relative w-[300px] sm:w-[400px] aspect-[4/3] rounded-2xl overflow-hidden shadow-md shrink-0">
                        <Image
                            src={img.src}
                            alt={img.alt}
                            fill
                            className="object-cover"
                            sizes="400px"
                        />
                    </div>
                ))}
            </motion.div>
        </div>
    )
}


export default function Gallery() {
    return (
        <section className="py-24 bg-[#889974] overflow-hidden" id="gallery">

            <div className="space-y-6">
                <Marquee items={chunk1} direction="left" speed={40} />
                <Marquee items={chunk2} direction="right" speed={45} />
                <Marquee items={chunk3} direction="left" speed={35} />
            </div>
        </section>
    )
}
