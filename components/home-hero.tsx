import Image from "next/image"
import Link from "next/link"

export default function HomeHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="hidden md:block absolute inset-0">
          <Image
            src="/hero/1.jpg"
            alt="Beautiful smile showcasing dental wellness"
            fill
            className="object-cover blur-[2px]"
            priority
          />
        </div>
        <div className="block md:hidden absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/VIDEO.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="absolute inset-0 bg-[#505b3f]/75" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 text-center w-full">
        <p className="text-[#d2ceab] text-base tracking-[0.3em] uppercase mb-6 font-medium">
          TARA Dental Aesthetics & Wellness
        </p>
        <h1 className="font-serif text-5xl sm:text-6xl md:text-8xl text-[#d2ceab] leading-tight text-balance mb-6">
          Integrative dental care
          <br />
          and holistic wellness.
        </h1>
        <p className="text-[#d2ceab]/80 text-xl max-w-xl mx-auto mb-10 leading-relaxed">
          Where oral health meets aesthetics and overall <br /> well-being — treating more than just teeth.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="#contact"
            className="bg-[#bd9e7d] text-[#505b3f] px-10 py-4 rounded-full text-base font-bold tracking-wide hover:bg-[#d2ceab] transition-colors uppercase"
          >
            Book Now
          </Link>
          <Link
            href="#services"
            className="border-2 border-[#d2ceab] text-[#d2ceab] px-10 py-4 rounded-full text-base font-bold tracking-wide hover:bg-[#d2ceab]/10 transition-colors uppercase"
          >
            Our Services
          </Link>
        </div>
      </div>
    </section>
  )
}
