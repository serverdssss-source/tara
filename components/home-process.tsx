import { Search, ClipboardList, Stethoscope, SmilePlus } from "lucide-react"

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Assess",
    subtitle: "Root-Cause",
    description:
      "Our dentists examine and identify the exact root cause of your oral issues using advanced diagnostics.",
  },
  {
    icon: ClipboardList,
    step: "02",
    title: "Plan",
    subtitle: "Personalized Care",
    description:
      "A tailored treatment plan is designed according to your dental condition for long-term comfort.",
  },
  {
    icon: Stethoscope,
    step: "03",
    title: "Treat",
    subtitle: "Progress",
    description:
      "Our expert team performs precise procedures while monitoring progress at every stage.",
  },
  {
    icon: SmilePlus,
    step: "04",
    title: "Maintain",
    subtitle: "Healthy Smile",
    description:
      "Aftercare guidance and follow-ups help preserve your smile and prevent future issues.",
  },
]

export default function HomeProcess() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <p className="text-accent text-sm tracking-[0.3em] uppercase mb-4">
            How It Works
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground text-balance">
            Our Dental Care Process
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <div key={s.title} className="relative text-center group">
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-px bg-border" />
              )}
              <div className="relative mx-auto mb-6 w-20 h-20 rounded-full bg-[#d2ceab] flex items-center justify-center group-hover:bg-[#bd9e7d] transition-colors">
                <s.icon className="w-8 h-8 text-[#505b3f]" />
              </div>
              <span className="text-xs text-[#bd9e7d] font-bold tracking-widest">
                STEP {s.step}
              </span>
              <h3 className="font-serif text-xl text-foreground mt-2 mb-1">
                {s.title}
              </h3>
              <p className="text-xs text-[#bd9e7d] uppercase tracking-wide mb-3">
                ({s.subtitle})
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
