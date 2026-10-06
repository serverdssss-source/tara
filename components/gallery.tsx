import Image from "next/image"
import { motion } from "framer-motion"

const images = [
    { src: "/images/gallery/IMG_2172.webp", alt: "TARA Dental Aesthetics and Wellness logo wall" },
    { src: "/images/gallery/IMG_2153.webp", alt: "Reception and waiting area" },
    { src: "/images/gallery/IMG_2187.webp", alt: "Treatment room with dental chair" },
    { src: "/images/gallery/IMG_2181.webp", alt: "Consultation room" },
    { src: "/images/gallery/IMG_2151.webp", alt: "Reception with TARA logo wall" },
    { src: "/images/gallery/IMG_2185.webp", alt: "Clinic interior overview" },
    { src: "/images/gallery/IMG_2188.webp", alt: "Treatment room with dental chair" },
    { src: "/images/gallery/IMG_2182.webp", alt: "Consultation room" },
    { src: "/images/gallery/IMG_2166.webp", alt: "Reception desk" },
    { src: "/images/gallery/IMG_2186.webp", alt: "Clinic entrance" },
    { src: "/images/gallery/IMG_2204.webp", alt: "Consultation cabin" },
    { src: "/images/gallery/IMG_2175.webp", alt: "Reception and waiting area" },
    { src: "/images/gallery/IMG_2174.webp", alt: "TARA logo wall at reception" },
    { src: "/images/gallery/gallery-5.webp", alt: "Dental Treatment Results" },
    { src: "/images/gallery/gallery-7.webp", alt: "Dental Treatment Results" },
    { src: "/images/gallery/two.webp", alt: "Dental Treatment Results" },
]

export default function Gallery() {
    return (
        <section className="py-24 bg-[#889974]" id="gallery">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <p className="text-[#fffdf5] text-sm tracking-[0.3em] uppercase mb-4">
                        Our Clinic
                    </p>
                    <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#fffdf5] text-balance leading-tight">
                        Transforming Smiles
                    </h2>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {images.map((img) => (
                        <div key={img.src} className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg group">
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
