"use client"

import { useState } from "react"
import {
  ShieldCheck,
  Users,
  Zap,
  Sparkles,
  SmilePlus,
  CircleDot,
  Wrench,
  AlignLeft,
  HeartPulse,
  Bone,
  Scissors,
  Activity,
} from "lucide-react"

const services = [
  {
    icon: ShieldCheck,
    title: "Preventive & General Dentistry",
    description: "Routine check-ups, cleanings, and preventive care focused on long-term oral health for all ages.",
    category: "prevent",
  },
  {
    icon: Users,
    title: "Family Dentistry",
    description: "Gentle, trusted dental care for children, adults, and seniors — all under one roof.",
    category: "prevent",
  },
  {
    icon: Zap,
    title: "Single-Day Root Canal (RCT)",
    description: "Advanced, pain-minimised root canal treatments completed efficiently in a single visit.",
    category: "restore",
  },
  {
    icon: Sparkles,
    title: "Cosmetic Dentistry",
    description: "Smile-enhancing treatments designed to improve the colour, shape, and appearance of your teeth.",
    category: "perfect",
  },
  {
    icon: SmilePlus,
    title: "Smile Makeovers",
    description: "Comprehensive aesthetic smile transformations planned with facial harmony and natural beauty in mind.",
    category: "perfect",
  },
  {
    icon: CircleDot,
    title: "Dental Implants",
    description: "Permanent, natural-looking replacements for missing teeth using advanced implant technology.",
    category: "restore",
  },
  {
    icon: Wrench,
    title: "Full-Mouth Rehabilitation",
    description: "Custom prosthetic solutions that restore function, comfort, and aesthetics for complex dental cases.",
    category: "restore",
  },
  {
    icon: AlignLeft,
    title: "Orthodontics & Braces",
    description: "Correction of misaligned teeth and bite issues using braces and modern orthodontic solutions.",
    category: "perfect",
  },
  {
    icon: HeartPulse,
    title: "Gum Care & Periodontal",
    description: "Surgical and non-surgical treatments to restore gum health and support lasting dental results.",
    category: "prevent",
  },
  {
    icon: Bone,
    title: "Bone Grafting",
    description: "Advanced procedures to strengthen jawbone structure and ensure implant success.",
    category: "restore",
  },
  {
    icon: Scissors,
    title: "Oral & Maxillofacial Surgery",
    description: "Expert management of impacted teeth, oral surgeries, facial trauma, and complex conditions.",
    category: "restore",
  },
  {
    icon: Activity,
    title: "TMJ & Jaw Disorder",
    description: "Specialised care for jaw pain, joint disorders, and functional bite problems.",
    category: "restore",
  },
]

const categories = [
  { key: "all", label: "All Services" },
  { key: "prevent", label: "Prevent" },
  { key: "restore", label: "Restore" },
  { key: "perfect", label: "Perfect" },
]

export default function Services() {
  const [active, setActive] = useState("all")

  const filtered =
    active === "all" ? services : services.filter((s) => s.category === active)

  return (
    <section id="services" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActive(cat.key)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-colors ${active === cat.key
                ? "bg-[#505b3f] text-[#d2ceab]"
                : "bg-[#d2ceab]/40 text-foreground hover:bg-[#d2ceab]/60"
                }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((service) => (
            <div
              key={service.title}
              className="group bg-card border border-border rounded-2xl p-6 hover:shadow-lg hover:border-[#bd9e7d]/40 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-[#d2ceab] flex items-center justify-center mb-4 group-hover:bg-[#bd9e7d] transition-colors">
                <service.icon className="w-5 h-5 text-[#505b3f]" />
              </div>
              <h3 className="font-serif text-lg text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}