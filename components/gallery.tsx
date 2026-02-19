import Image from "next/image"
import { motion } from "framer-motion"

const images = [
    { src: "/images/gallery/gallery-5.webp", alt: "Dental Treatment Results" },
    { src: "/images/gallery/gallery-7.webp", alt: "Dental Treatment Results" },
    { src: "/images/gallery/two.webp", alt: "Dental Treatment Results" },
]

// Select first 5 images for the static gallery
const galleryImages = images.slice(0, 5);
const row1 = galleryImages.slice(0, 3);
const row2 = galleryImages.slice(3, 5);

export default function Gallery() {
    return (
        <section className="py-24 bg-[#889974]" id="gallery">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <p className="text-[#fffdf5] text-sm tracking-[0.3em] uppercase mb-4">
                        Our Work
                    </p>
                    <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#fffdf5] text-balance leading-tight">
                        Transforming Smiles
                    </h2>
                </div>

                <div className="flex flex-col gap-8 max-w-6xl mx-auto">
                    {/* First Row - 3 Images */}
                    <div className="grid md:grid-cols-3 gap-8">
                        {row1.map((img, i) => (
                            <div key={i} className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg group">
                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Second Row - 2 Images Centered */}
                    <div className="flex flex-col md:flex-row justify-center gap-8">
                        {row2.map((img, i) => (
                            <div key={i} className="relative w-full md:w-[calc(33.33%-1.33rem)] aspect-[4/3] rounded-2xl overflow-hidden shadow-lg group">
                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
