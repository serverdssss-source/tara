"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
    {
        name: "Priya S.",
        location: "Konanakunte",
        treatment: "Root Canal Treatment",
        quote:
            "Single-day root canal done with precision and care. Completely stress-free experience.",
        rating: 5,
    },
    {
        name: "Ramesh K.",
        location: "Bikaspura",
        treatment: "Dental Implants",
        quote:
            "My dental implants look natural and feel perfect. Truly expert care.",
        rating: 5,
    },
    {
        name: "Ananya R.",
        location: "Kumaraswamy Layout",
        treatment: "Smile Makeover",
        quote:
            "Flawless smile makeover with great attention to detail. Highly recommended.",
        rating: 5,
    },
]

export default function HomeTestimonials() {
    const [current, setCurrent] = useState(0)

    const prev = () =>
        setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1))
    const next = () =>
        setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1))

    return (
        <section className="py-24 lg:py-32">
            <div className="mx-auto max-w-7xl px-6">
                <div className="text-center mb-16">
                    <p className="text-[#bd9e7d] text-sm tracking-[0.3em] uppercase mb-4">
                        Testimonials
                    </p>
                    <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground text-balance">
                        What Our Patients Say
                    </h2>
                </div>

                <div className="max-w-3xl mx-auto">
                    <div className="bg-[#505b3f] rounded-3xl p-8 sm:p-12 text-center relative">
                        <div className="flex justify-center gap-1 mb-6">
                            {Array.from({ length: testimonials[current].rating }).map(
                                (_, i) => (
                                    <Star
                                        key={i}
                                        className="w-5 h-5 fill-[#bd9e7d] text-[#bd9e7d]"
                                    />
                                )
                            )}
                        </div>
                        <blockquote className="font-serif text-xl sm:text-2xl text-[#d2ceab] leading-relaxed mb-8 italic">
                            {`"${testimonials[current].quote}"`}
                        </blockquote>
                        <p className="text-[#bd9e7d] font-medium text-sm">
                            {testimonials[current].name}
                        </p>
                        <p className="text-[#d2ceab]/50 text-xs mt-1">
                            {testimonials[current].treatment} &mdash;{" "}
                            {testimonials[current].location}
                        </p>
                    </div>

                    <div className="flex justify-center gap-4 mt-8">
                        <button
                            onClick={prev}
                            aria-label="Previous testimonial"
                            className="w-12 h-12 rounded-full border-2 border-[#505b3f] flex items-center justify-center hover:bg-[#505b3f] hover:text-[#d2ceab] transition-colors text-foreground"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <div className="flex items-center gap-2">
                            {testimonials.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrent(i)}
                                    aria-label={`Go to testimonial ${i + 1}`}
                                    className={`w-2.5 h-2.5 rounded-full transition-colors ${i === current ? "bg-[#505b3f]" : "bg-[#d2ceab]"
                                        }`}
                                />
                            ))}
                        </div>
                        <button
                            onClick={next}
                            aria-label="Next testimonial"
                            className="w-12 h-12 rounded-full border-2 border-[#505b3f] flex items-center justify-center hover:bg-[#505b3f] hover:text-[#d2ceab] transition-colors text-foreground"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}