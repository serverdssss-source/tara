"use client"

import { ArrowRight, MapPin, Phone } from "lucide-react"
import Link from "next/link"

export default function AboutCTA() {
    return (
        <section className="bg-[#505b3f] text-[#fffdf5] py-24">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Call to Action */}
                    <div className="space-y-8">
                        <div>
                            <p className="text-[#8b9974] text-sm tracking-[0.3em] uppercase mb-4 font-bold">
                                Consultation
                            </p>
                            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-balance leading-tight">
                                Your perfect smile is just a booking away!
                            </h2>
                        </div>

                        <div>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-3 bg-[#fffdf5] text-[#505b3f] px-8 py-4 rounded-full font-bold hover:bg-[#bd9d7d] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                            >
                                Book Now
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Right: Contact Details */}
                    <div className="space-y-8 lg:border-l lg:border-[#fffdf5]/10 lg:pl-16">

                        <div className="space-y-4">
                            <h3 className="font-serif text-2xl mb-2 flex items-center gap-3">
                                <span className="bg-[#8b9974]/20 p-2 rounded-lg">
                                    <MapPin className="w-6 h-6 text-[#bd9d7d]" />
                                </span>
                                Visit Us
                            </h3>
                            <div className="space-y-1 text-[#fffdf5]/80 leading-relaxed">
                                <p className="font-bold text-[#fffdf5]">TARA Dental Aesthetics & Wellness</p>
                                <p>Vasanthapura Main Road, Near DVG Hospital,</p>
                                <p>Konanakunte, Bengaluru, Karnataka – 560062</p>
                            </div>
                        </div>

                        <div className="w-full h-px bg-[#fffdf5]/10" />

                        <div className="space-y-4">
                            <h3 className="font-serif text-2xl mb-2 flex items-center gap-3">
                                <span className="bg-[#8b9974]/20 p-2 rounded-lg">
                                    <Phone className="w-6 h-6 text-[#bd9d7d]" />
                                </span>
                                Contact Us
                            </h3>
                            <div className="space-y-1">
                                <p className="text-[#fffdf5]/60 text-sm uppercase tracking-wider mb-1">Our Phone</p>
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
