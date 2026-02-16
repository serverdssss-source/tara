
import { services } from "@/lib/services-data"
import { facilityFeatures, openingHours, usps, faqs } from "@/lib/service-page-data"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Download, Clock, MapPin, Phone } from "lucide-react"
import fs from "fs"
import path from "path"

function getServiceImage(slug: string): string | null {
    const dir = path.join(process.cwd(), "public", "images", "services", slug)
    if (!fs.existsSync(dir)) return null
    const exts = [".jpg", ".jpeg", ".png", ".webp", ".avif"]
    const files = fs.readdirSync(dir)
    const img = files.find((f) => exts.includes(path.extname(f).toLowerCase()))
    return img ? `/images/services/${slug}/${img}` : null
}

export async function generateStaticParams() {
    return services.map((service) => ({
        slug: service.slug,
    }))
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const service = services.find((s) => s.slug === slug)

    if (!service) {
        return <div>Service not found: {slug}</div>
    }

    return (
        <main className="bg-[#fffdf5] min-h-screen">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 px-6 bg-[#505b3f] text-[#fffdf5]">
                <div className="mx-auto max-w-7xl">
                    <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-balance">
                        {service.title}
                    </h1>
                </div>
            </section>

            <div className="mx-auto max-w-7xl px-6 py-16 lg:py-24 grid lg:grid-cols-3 gap-12">
                {/* Main Content */}
                <div className="lg:col-span-2">
                    {(() => {
                        const imgSrc = getServiceImage(service.slug)
                        return (
                            <div className="relative aspect-video rounded-3xl overflow-hidden mb-12 border border-[#505b3f]/10 shadow-lg">
                                {imgSrc ? (
                                    <Image
                                        src={imgSrc}
                                        alt={service.title}
                                        fill
                                        className="object-cover"
                                    />
                                ) : (
                                    <div className="absolute inset-0 bg-[#505b3f]/5 flex items-center justify-center text-[#505b3f]/20">
                                        <span className="font-serif text-2xl">Service Image</span>
                                    </div>
                                )}
                            </div>
                        )
                    })()}

                    <h2 className="font-serif text-3xl text-[#505b3f] mb-6">About this Treatment</h2>
                    <p className="text-[#505b3f]/80 leading-relaxed text-lg mb-8">
                        {service.description} At TARA Dental Aesthetics & Wellness, we utilize the latest technology and techniques to ensure {service.title} is performed with the utmost care and precision. Our goal is to enhance your oral health and confidence.
                    </p>

                    <div className="bg-white rounded-2xl p-8 border border-[#505b3f]/10 shadow-sm">
                        <h3 className="font-serif text-xl text-[#505b3f] mb-4">Why Choose Us?</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3 text-[#505b3f]/80">
                                <CheckCircle2 className="w-5 h-5 text-[#8b9974] shrink-0 mt-0.5" />
                                <span>Experienced specialists dedicated to your comfort.</span>
                            </li>
                            <li className="flex items-start gap-3 text-[#505b3f]/80">
                                <CheckCircle2 className="w-5 h-5 text-[#8b9974] shrink-0 mt-0.5" />
                                <span>State-of-the-art diagnostic and treatment technology.</span>
                            </li>
                            <li className="flex items-start gap-3 text-[#505b3f]/80">
                                <CheckCircle2 className="w-5 h-5 text-[#8b9974] shrink-0 mt-0.5" />
                                <span>Personalized care plans tailored to your needs.</span>
                            </li>
                        </ul>
                    </div>

                    {/* Our Facility */}
                    <div>
                        <h2 className="font-serif text-3xl text-[#505b3f] mb-8">Our Facility</h2>
                        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10">
                            {facilityFeatures.map((feature) => (
                                <div key={feature.title} className="flex gap-4 items-start">
                                    <div className="w-12 h-12 rounded-full bg-[#fdf6e9] flex items-center justify-center shrink-0">
                                        <div className="w-6 h-6 rounded-full bg-[#505b3f] flex items-center justify-center">
                                            <CheckCircle2 className="w-4 h-4 text-[#fffdf5]" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="font-serif text-lg text-[#505b3f] font-bold mb-2">{feature.title}</h3>
                                        <p className="text-[#505b3f]/70 text-sm leading-relaxed">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>


                </div>

                {/* Sidebar / Related Services */}
                {/* Sidebar */}
                <div className="space-y-8">
                    {/* Other Services */}
                    <div className="bg-white rounded-2xl p-8 border border-[#505b3f]/10 shadow-sm">
                        <h3 className="font-serif text-xl text-[#505b3f] mb-6 border-b border-[#505b3f]/10 pb-4">
                            Other Services
                        </h3>
                        <ul className="space-y-1">
                            {services.map((s) => (
                                <li key={s.slug}>
                                    <Link
                                        href={`/services/${s.slug}`}
                                        className={`block py-2 px-3 rounded-lg text-sm transition-colors ${s.slug === service.slug
                                            ? "bg-[#505b3f] text-[#fffdf5] font-medium"
                                            : "text-[#505b3f]/70 hover:bg-[#505b3f]/5 hover:text-[#505b3f]"
                                            }`}
                                    >
                                        {s.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Opening Hours */}
                    <div className="bg-[#505b3f] text-[#fffdf5] rounded-2xl p-8 shadow-sm">
                        <div className="flex items-center gap-3 mb-6">
                            <Clock className="w-6 h-6 text-[#8b9974]" />
                            <h3 className="font-serif text-xl">Opening Hours</h3>
                        </div>
                        <ul className="space-y-4">
                            {openingHours.map((item) => (
                                <li key={item.day} className="flex justify-between items-center text-sm border-b border-[#fffdf5]/10 pb-3 last:border-0 last:pb-0">
                                    <span className="opacity-80">{item.day}</span>
                                    <span className="font-medium">{item.time}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Brochure & Contact */}
                    <div className="bg-white rounded-2xl p-8 border border-[#505b3f]/10 shadow-sm space-y-4">
                        <button className="flex items-center justify-center gap-2 w-full py-3 bg-[#fffdf5] text-[#505b3f] border border-[#505b3f]/20 rounded-lg font-medium hover:bg-[#505b3f]/5 transition-colors group">
                            <Download className="w-4 h-4 group-hover:scale-110 transition-transform" />
                            Download Brochure
                        </button>

                        <div className="pt-4 border-t border-[#505b3f]/10">
                            <p className="text-[#505b3f] font-serif mb-4">Ready to book?</p>
                            <Link href="/contact" className="flex items-center justify-center gap-2 w-full py-3 bg-[#8b9974] text-white rounded-lg font-medium hover:bg-[#505b3f] transition-colors">
                                Book Appointment
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* What Makes Us Different - Full Width Section */}
            <section className="py-24 bg-[#505b3f] text-[#fffdf5]">
                <div className="mx-auto max-w-7xl px-6">
                    <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-center mb-16">What Makes Us Different</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
                        {usps.map((usp) => (
                            <div key={usp.title} className="bg-white text-[#505b3f] rounded-3xl p-8 text-center flex flex-col items-center h-full shadow-lg group hover:-translate-y-1 transition-transform duration-300">
                                <div className="w-20 h-20 rounded-full bg-[#fdf6e9] flex items-center justify-center mb-6 shrink-0 border border-[#505b3f]/10 group-hover:scale-110 transition-transform duration-300">
                                    <usp.icon className="w-8 h-8 text-[#505b3f]" />
                                </div>
                                <h3 className="font-serif text-xl font-bold mb-4 leading-tight text-balance">{usp.title}</h3>
                                <p className="text-[#505b3f]/80 text-sm leading-relaxed font-medium">{usp.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Common Dental Queries - Centered Section */}
            <section className="py-24 px-6 bg-[#505b3f]">
                <div className="mx-auto max-w-6xl">
                    <h2 className="font-serif text-3xl sm:text-4xl text-[#fffdf5] mb-12 text-center">Common Dental Queries</h2>
                    <div className="grid sm:grid-cols-2 gap-6">
                        {faqs.map((item, i) => (
                            <details key={i} className="group bg-white rounded-xl border border-[#fffdf5]/10 overflow-hidden h-fit shadow-sm hover:shadow-md transition-shadow">
                                <summary className="flex items-center justify-between p-6 cursor-pointer list-none text-[#505b3f] font-medium hover:bg-[#505b3f]/5 transition-colors gap-4">
                                    <span className="font-serif text-lg text-left text-balance">{i + 1}. {item.question}</span>
                                    <span className="transition-transform group-open:rotate-180 shrink-0 bg-[#fdf6e9] rounded-full p-1">
                                        <ArrowRight className="w-4 h-4 rotate-90" />
                                    </span>
                                </summary>
                                <div className="px-6 pb-6 text-[#505b3f]/70 text-sm leading-relaxed border-t border-[#505b3f]/5 pt-4">
                                    <p>{item.answer}</p>
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
