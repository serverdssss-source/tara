"use client"

import { ArrowRight, MapPin, Phone } from "lucide-react"
import Link from "next/link"

export default function AboutCTA() {
    return (
        <section className="bg-[#d2ceab] text-[#505b3f] py-24">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Call to Action */}
                    <div className="space-y-8">
                        <div>
                            <p className="text-[#505b3f] text-sm tracking-[0.3em] uppercase mb-4 font-bold">
                                Consultation
                            </p>
                            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-balance leading-tight">
                                Take the first step towards a <br /> healthier, brighter smile.
                            </h2>
                        </div>

                        <div>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-3 bg-[#505b3f] text-[#d2ceab] px-8 py-4 rounded-full font-bold hover:bg-[#bd9d7d] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                            >
                                Book Now
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Right: Contact Details */}
                    <div className="space-y-8 lg:border-l lg:border-[#505b3f]/10 lg:pl-16">

                        <div className="space-y-4">
                            <h3 className="font-serif text-2xl mb-2 flex items-center gap-3">
                                <span className="bg-[#505b3f]/10 p-2 rounded-lg">
                                    <MapPin className="w-6 h-6 text-[#505b3f]" />
                                </span>
                                Visit Us
                            </h3>
                            <div className="space-y-1 text-[#505b3f]/80 leading-relaxed">
                                <p className="font-bold text-[#505b3f]">TARA Dental Aesthetics & Wellness</p>
                                <p>Vasanthapura Main Road, Near DVG Hospital,</p>
                                <p>Konanakunte, Bengaluru, Karnataka – 560062</p>
                            </div>
                        </div>

                        <div className="w-full h-px bg-[#505b3f]/10" />

                        <div className="space-y-4">
                            <h3 className="font-serif text-2xl mb-2 flex items-center gap-3">
                                <span className="bg-[#505b3f]/10 p-2 rounded-lg">
                                    <Phone className="w-6 h-6 text-[#505b3f]" />
                                </span>
                                Contact Us
                            </h3>
                            <div className="space-y-1">
                                <p className="text-[#505b3f]/60 text-sm uppercase tracking-wider mb-1">Our Phone</p>
                                <a href="tel:+919972896868" className="text-2xl font-medium hover:text-[#bd9d7d] transition-colors">
                                    +91 9972896868
                                </a>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}
