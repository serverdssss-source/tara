"use client"

import { motion, Variants } from "framer-motion"
import { Star, Quote } from "lucide-react"

const testimonials = [
    {
        name: "Priya S.",
        location: "Konanakunte",
        treatment: "Root Canal Treatment",
        quote: "Single-day root canal done with precision and care. Completely stress-free experience.",
        rating: 5,
    },
    {
        name: "Ramesh K.",
        location: "Bikaspura",
        treatment: "Dental Implants",
        quote: "My dental implants look natural and feel perfect. Truly expert care.",
        rating: 5,
    },
    {
        name: "Ananya R.",
        location: "Kumaraswamy Layout",
        treatment: "Smile Makeover",
        quote: "Flawless smile makeover with great attention to detail. Highly recommended.",
        rating: 5,
    },
    {
        name: "Sameer P.",
        location: "Konanakunte",
        treatment: "Root Canal Treatment",
        quote: "I was nervous, but the root canal was painless and smooth.",
        rating: 5,
    },
    {
        name: "Manoj T.",
        location: "Banashankari",
        treatment: "Implants & Gum Care",
        quote: "Implants and gum treatment handled seamlessly. Excellent results.",
        rating: 5,
    },
    {
        name: "Neha V.",
        location: "Doddakallasandra",
        treatment: "Root Canal & Crown",
        quote: "Painless RCT and beautifully done crown. Outstanding care.",
        rating: 5,
    },
]

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
}

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.25, 0.1, 0.25, 1],
        },
    },
}

export default function TestimonialsGrid() {
    return (
        <section className="py-12 lg:py-20 bg-[#8b9974]">
            <div className="mx-auto max-w-7xl px-6">

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
                >
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            variants={itemVariants}
                            className="bg-white rounded-2xl p-8 shadow-sm border border-[#505b3f]/5 hover:shadow-md transition-shadow relative group"
                        >
                            <Quote className="absolute top-6 right-6 w-8 h-8 text-[#505b3f]/10 rotate-180" />

                            <div className="flex gap-1 mb-4">
                                {Array.from({ length: t.rating }).map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-[#bd9d7d] text-[#bd9d7d]" />
                                ))}
                            </div>

                            <blockquote className="text-[#505b3f]/80 leading-relaxed mb-6 font-medium min-h-[4rem]">
                                "{t.quote}"
                            </blockquote>

                            <div className="border-t border-[#505b3f]/10 pt-4 mt-auto">
                                <p className="font-serif text-lg text-[#505b3f] mb-0.5">{t.name}</p>
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 text-xs">
                                    <p className="text-[#bd9d7d] font-semibold uppercase tracking-wider">{t.treatment}</p>
                                    <p className="text-[#505b3f]/50">{t.location}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
