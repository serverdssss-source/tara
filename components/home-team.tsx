import Image from "next/image"
import { Linkedin, Mail } from "lucide-react"

const team = [
  {
    name: "Dr. M. S. Srinivas Gowda",
    role: "Chief Dental Surgeon | Founder",
  },
  {
    name: "Dr. Gautam Shetty",
    role: "Consultant Maxillofacial Prosthodontist & Implantologist",
  },
  {
    name: "Dr. Manjunath G. S.",
    role: "Consultant Oral & Maxillofacial Surgeon",
  },
  {
    name: "Dr. Prashanthi",
    role: "Consultant Oral & Maxillofacial Surgeon",
  },
  {
    name: "Dr. Shashikala V",
    role: "Consultant Orthodontist",
  },
  {
    name: "Dr. Vani Hegde",
    role: "Consultant Endodontist",
  },
  {
    name: "Dr. Manoranjan S. J.",
    role: "Consultant Periodontist",
  },
  {
    name: "Dr. Vignesh V",
    role: "Resident - Associate Dentist",
  },
  {
    name: "Dr. Dinesh Bhadrashetty",
    role: "Consultant Oral & Maxillofacial Surgeon | Specialist in Oral Implants",
  },
]

export default function Team() {
  return (
    <section id="team" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
          <div>
            <p className="text-[#bd9e7d] text-sm tracking-[0.3em] uppercase mb-4">
              Meet Our Team
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground leading-tight text-balance">
              Helping you smile with confidence
            </h2>
          </div>

          <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
            <Image
              src="/images/doctor-main.jpg"
              alt="Dr. Srinivas Gowda - Chief Dental Surgeon"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-[#505b3f]/90 backdrop-blur-sm p-6">
              <p className="font-serif text-lg text-[#d2ceab]">
                Dr. M. S. Srinivas Gowda
              </p>
              <p className="text-[#bd9e7d] text-sm">
                Chief Dental Surgeon | Founder
              </p>
              <blockquote className="mt-3 text-[#d2ceab]/70 text-sm italic leading-relaxed">
                {"\"At TARA, we address oral health as an integral component of systemic health.\""}
              </blockquote>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.slice(1).map((member) => (
            <div
              key={member.name}
              className="bg-card border border-border rounded-2xl p-6 text-center group hover:border-[#bd9e7d]/40 transition-colors"
            >
              <div className="w-20 h-20 rounded-full bg-[#d2ceab] mx-auto mb-4 flex items-center justify-center">
                <span className="font-serif text-2xl text-[#505b3f] font-bold">
                  {member.name
                    .split(" ")
                    .filter((w) => w.startsWith("D") || w.length > 2)
                    .slice(0, 2)
                    .map((w) => w[0])
                    .join("")}
                </span>
              </div>
              <h3 className="font-serif text-base text-foreground mb-1">
                {member.name}
              </h3>
              <p className="text-muted-foreground text-xs leading-relaxed mb-4">
                {member.role}
              </p>
              <div className="flex justify-center gap-3">
                <button
                  aria-label={`LinkedIn profile of ${member.name}`}
                  className="w-8 h-8 rounded-full bg-[#d2ceab]/50 flex items-center justify-center hover:bg-[#bd9e7d] transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5 text-[#505b3f]" />
                </button>
                <button
                  aria-label={`Email ${member.name}`}
                  className="w-8 h-8 rounded-full bg-[#d2ceab]/50 flex items-center justify-center hover:bg-[#bd9e7d] transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#505b3f]" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
