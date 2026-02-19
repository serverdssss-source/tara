import {
  Palette,
  UserCheck,
  Clock,
  Users,
  Scale,
  HeartHandshake,
} from "lucide-react"

const reasons = [
  {
    icon: Palette,
    title: "Advanced Aesthetic Expertise",
    description:
      "Smile design guided by facial harmony, natural beauty, and long-lasting results.",
  },
  {
    icon: UserCheck,
    title: "Experienced Specialist Team",
    description:
      "Multi-specialty experts collaborate to deliver comprehensive and precise dental care.",
  },
  {
    icon: Clock,
    title: "Single-Day Advanced Treatments",
    description:
      "Efficient solutions like single-day RCTs minimise visits without compromising quality.",
  },
  {
    icon: Users,
    title: "Family-Centred Dentistry",
    description:
      "Trusted, gentle care for children, adults, and seniors — all under one roof.",
  },
  {
    icon: Scale,
    title: "Ethical & Transparent Approach",
    description:
      "Clear explanations, honest guidance, and treatment recommendations you can trust.",
  },
  {
    icon: HeartHandshake,
    title: "Care Beyond Treatment",
    description:
      "We focus on long-term oral wellness, not just immediate results.",
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-24 lg:py-32 bg-[#505b3f]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <p className="text-[#bd9e7d] text-sm tracking-[0.3em] uppercase mb-4">
            Why Choose Us
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#d2ceab] text-balance">
            What Makes Us Different
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="flex gap-5 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#bd9e7d]/20 flex items-center justify-center shrink-0 group-hover:bg-[#bd9e7d]/30 transition-colors">
                <reason.icon className="w-6 h-6 text-[#bd9e7d]" />
              </div>
              <div>
                <h3 className="font-serif text-lg text-[#d2ceab] mb-2">
                  {reason.title}
                </h3>
                <p className="text-[#d2ceab]/60 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
