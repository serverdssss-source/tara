
import { Heart, Shield, Sparkles } from "lucide-react"

const pillars = [
    {
        icon: Heart,
        title: "Holistic Dental Philosophy",
        description: (
            <>
                We connect oral health, aesthetics, and overall well-being treating more than just teeth.
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
            "No two smiles are the same - every treatment is thoughtfully designed around individual needs.",
    },
]

export default function HomePhilosophy() {
    return (
        <section className="relative py-24 lg:py-32 overflow-hidden bg-[#505b3f]">
            <div className="relative z-10 mx-auto max-w-6xl px-6">
                <div className="text-center mb-16">
                    <p className="text-[#b58a5c] text-sm tracking-[0.3em] uppercase mb-5">
                        Our Philosophy
                    </p>
                    <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#f2e4c1] text-balance leading-tight mb-6">
                        The oral cavity is the gateway{' '}
                        <br className="hidden sm:block" />
                        to overall health
                    </h2>
                    <p className="text-[#cfc29d] text-lg max-w-3xl mx-auto leading-relaxed">
                        We address oral health as an integral component of systemic health, combining compassion, advanced technology, and international dental standards.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {pillars.map((pillar) => (
                        <div
                            key={pillar.title}
                            className="bg-[#5b644f] border border-[#7a836d] rounded-3xl p-10 text-center transition-colors duration-300 hover:bg-[#667053]"
                        >
                            <div className="mx-auto mb-8 w-16 h-16 rounded-full bg-[#7b7258] flex items-center justify-center">
                                <pillar.icon className="w-7 h-7 text-[#d7b579]" />
                            </div>
                            <h3 className="font-serif text-2xl text-[#f2e4c1] mb-4">{pillar.title}</h3>
                            <p className="text-[#cfc29d] leading-relaxed text-base">{pillar.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
