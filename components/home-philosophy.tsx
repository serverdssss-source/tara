import { Heart, Shield, Sparkles } from "lucide-react"
import Image from "next/image"

const pillars = [
  {
    icon: Heart,
    title: "Holistic Dental Philosophy",
    description:
      "We connect oral health, aesthetics, and overall well-being — treating more than just teeth.",
  },
  {
    icon: Shield,
    title: "Gentle, Anxiety-Free Care",
    description:
      "Our calm, luxurious environment and soft-care approach help patients feel relaxed at every visit.",
  },
  {
    icon: Sparkles,
    title: "Highly Personalised Plans",
    description:
      "No two smiles are the same — every treatment is thoughtfully designed around individual needs.",
  },
]

export default function HomePhilosophy() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <Image
        src="/images/banner-website.png"
        alt="Philosophy background"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-[#505b3f]/80" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <p className="text-[#bd9e7d] text-sm tracking-[0.3em] uppercase mb-4">
            Our Philosophy
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#d2ceab] text-balance leading-tight">
            The oral cavity is the gateway
            <br className="hidden sm:block" />
            to the body and to health
          </h2>
          <p className="mt-6 text-[#d2ceab]/70 text-lg max-w-2xl mx-auto leading-relaxed">
            We address oral health as an integral component of systemic health, combining compassion, advanced technology, and international dental standards.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="bg-[#505b3f] border border-[#d2ceab]/20 rounded-2xl p-8 text-center group hover:bg-[#d2ceab]/10 transition-colors"
            >
              <div className="mx-auto mb-6 w-16 h-16 rounded-full bg-[#bd9e7d]/20 flex items-center justify-center">
                <pillar.icon className="w-7 h-7 text-[#bd9e7d]" />
              </div>
              <h3 className="font-serif text-xl text-[#d2ceab] mb-3">{pillar.title}</h3>
              <p className="text-[#d2ceab]/60 leading-relaxed text-sm">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
