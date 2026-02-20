import { Heart, Shield, Sparkles } from "lucide-react"

const pillars = [
  {
    icon: Heart,
    title: "Holistic Dental Philosophy",
    description: (
      <>
        We connect oral health, aesthetics, and overall <br />
        well-being treating more than just teeth.
      </>
    ),
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

export default function Philosophy() {
  return (
    <section className="py-24 lg:py-32 bg-[#d2ceab]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <p className="text-[#505b3f] text-sm tracking-[0.3em] uppercase mb-4 font-bold">
            Our Philosophy
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#505b3f] text-balance leading-tight">
            The oral cavity is the Gateway{" "}
            <br className="hidden sm:block" />
            to overall health
          </h2>
          <p className="mt-6 text-[#505b3f]/80 text-lg max-w-2xl mx-auto leading-relaxed">
            We address oral health as an integral component of systemic health, combining compassion, advanced technology, and international dental standards.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="bg-[#d2ceab] border border-[#505b3f]/20 rounded-2xl p-8 text-center group hover:bg-[#505b3f]/10 transition-colors"
            >
              <div className="mx-auto mb-6 w-16 h-16 rounded-full bg-[#505b3f]/10 flex items-center justify-center">
                <pillar.icon className="w-7 h-7 text-[#505b3f]" />
              </div>
              <h3 className="font-serif text-xl text-[#505b3f] mb-3">{pillar.title}</h3>
              <p className="text-[#505b3f]/70 leading-relaxed text-sm">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}