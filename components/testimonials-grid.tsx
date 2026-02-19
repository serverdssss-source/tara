"use client"

import { motion, Variants } from "framer-motion"
import { Star, Quote } from "lucide-react"

const testimonials = [
    {
        name: "Priya S.",
        location: "Konanakunte",
        treatment: "Single-Day RCT",
        quote: "Dr. Srinivas Gowda completed my single-day root canal (RCT) with precision and care. Dr. Vani Hegde and the team made me feel comfortable throughout. Highly recommend for dental care",
        rating: 5,
    },
    {
        name: "Ramesh K.",
        location: "Bikaspura",
        treatment: "Dental Implants",
        quote: "I received dental implants guided by Dr. Srinivas Gowda, with prosthetic support from Dr. Gautam Shetty. My smile looks natural and perfect.",
        rating: 5,
    },
    {
        name: "Ananya R.",
        location: "Kumaraswamy Layout",
        treatment: "Smile Makeover",
        quote: "Thanks to Dr. Srinivas Gowda, my smile makeover was flawless. Dr. Shashikala Kumari helped perfect my bite. Excellent cosmetic dental care near Konanakunte.",
        rating: 5,
    },
    {
        name: "Sameer P.",
        location: "Konanakunte",
        treatment: "Single-Day RCT",
        quote: "I was nervous about my root canal, but Dr. Srinivas Gowda made it stress‑free. Single‑day RCT completed with care. Dr. Vani Hegde’s finishing touch was amazing!",
        rating: 5,
    },
    {
        name: "Manoj T.",
        location: "Banashankari",
        treatment: "Implants & Gum Treatment",
        quote: "I needed both implants and gum treatment. Dr. Srinivas Gowda coordinated my care with Dr. Manoranjan SJ. My gums are healthier, and my implants feel so natural!",
        rating: 5,
    },
    {
        name: "Neha V.",
        location: "Doddakallasandra",
        treatment: "RCT & Crown",
        quote: "Dr. Srinivas Gowda made RCT and crown completely painless. Cosmetic finishing by Dr. Vani Hegde was excellent. Truly the best dental care nearby!",
        rating: 5,
    },
    {
        name: "Arjun S.",
        location: "Konanakunte",
        treatment: "Cosmetic & Orthodontic",
        quote: "Dr. Srinivas Gowda oversaw my cosmetic and orthodontic care with Dr Shashikala Kumari. My smile looks perfect highly professional, and compassionate!",
        rating: 5,
    },
    {
        name: "Rohit L.",
        location: "Padmannabhanagar",
        treatment: "Cosmetic Dentistry",
        quote: "From implants to cosmetic dentistry, Dr. Srinivas Gowda and his consultant team delivered exceptional care. Efficient, professional, and highly recommended",
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
