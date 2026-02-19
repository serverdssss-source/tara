import Image from "next/image"
import { Linkedin, Mail } from "lucide-react"
import { useState } from "react"

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
  const [showBio, setShowBio] = useState(false)

  const bioParagraphs = [
    "Dr M. S. Srinivas Gowda is a renowned dental surgeon with over 22 years of clinical experience, committed to transforming smiles and advancing dental care in Bengaluru, with a career built on compassionate care and clinical excellence.",
    "From the moment he began his practice, Dr Srinivas demonstrated a sincere commitment to patient-centric dentistry, blending technical precision with gentle, reassuring care for individuals and families alike. His extensive experience spans the full spectrum of dental treatments, including preventive care, dentures, cosmetic procedures, and advanced restorative solutions.",
    "Dr Srinivas stays attuned to the latest developments in dentistry through continuous learning and professional engagement, ensuring every patient receives treatments that are both modern and effective. His approach is rooted in ethical transparency and personalized treatment planning, helping patients make informed decisions about their oral health.",
    "Beloved by his patients for his calm demeanour and clear communication, Dr Srinivas brings meticulous attention to detail to every case - whether it's a routine dental cleaning or a complete smile makeover.",
    "At TARA Dental Aesthetics and Wellness, Dr. M. S. Srinivas Gowda leads the team with a philosophy that blends clinical expertise, compassionate care, and a commitment to lifelong dental wellness. Our vision is to create healthy, confident smiles for every patient in Bengaluru through personalised, ethical, and state-of-the-art dental care.",
  ]

  return (
    <section id="team" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
          <div className="space-y-6">
            <div>
              <p className="text-[#bd9e7d] text-sm tracking-[0.3em] uppercase mb-4">
                Meet Our Team
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground leading-tight text-balance">
                Helping you smile with confidence
              </h2>
            </div>
            <div className="bg-[#505b3f]/10 border border-[#505b3f]/20 rounded-2xl p-6 space-y-4">
              <div>
                <p className="font-serif text-xl text-[#505b3f]">Dr Srinivas Gowda, MS</p>
                <p className="text-[#bd9e7d] text-xs uppercase tracking-[0.15em] mt-1">
                  Chief Dental Surgeon - TARA Dental Aesthetics and Wellness
                </p>
              </div>
              <p className="text-lg leading-relaxed text-[#505b3f]">
                Dr M. S. Srinivas Gowda is a renowned dental surgeon with over 22 years of clinical experience, committed to transforming smiles and advancing dental care in Bengaluru, with a career built on compassionate care and clinical excellence.
              </p>
              <p className="text-lg leading-relaxed text-[#505b3f]">
                From the moment he began his practice, Dr Srinivas demonstrated a sincere commitment to patient-centric dentistry, blending technical precision with gentle, reassuring care for individuals and families alike. His extensive experience spans the full spectrum of dental treatments, including preventive care, dentures, cosmetic procedures, and advanced restorative solutions.
              </p>
              <p className="text-lg leading-relaxed text-[#505b3f]">
                Dr Srinivas stays attuned to the latest developments in dentistry through continuous learning and professional engagement, ensuring every patient receives treatments that are both modern and effective. His approach is rooted in ethical transparency and personalized treatment planning, helping patients make informed decisions about their oral health.
              </p>
              <p className="text-lg leading-relaxed text-[#505b3f]">
                Beloved by his patients for his calm demeanour and clear communication, Dr Srinivas brings meticulous attention to detail to every case - whether it's a routine dental cleaning or a complete smile makeover.
              </p>
              <p className="text-lg leading-relaxed text-[#505b3f]">
                At TARA Dental Aesthetics and Wellness, Dr. M. S. Srinivas Gowda leads the team with a philosophy that blends clinical expertise, compassionate care, and a commitment to lifelong dental wellness. Our vision is to create healthy, confident smiles for every patient in Bengaluru through personalised, ethical, and state-of-the-art dental care.
              </p>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
            <Image
              src="/images/doctor-main.jpg"
              alt="Dr. Srinivas Gowda - Chief Dental Surgeon"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-[#505b3f]/90 backdrop-blur-sm p-6 space-y-3">
              <p className="font-serif text-lg text-[#d2ceab]">
                Dr. M. S. Srinivas Gowda
              </p>
              <p className="text-[#bd9e7d] text-sm">
                Chief Dental Surgeon | Founder
              </p>
              <blockquote className="text-[#d2ceab]/70 text-sm italic leading-relaxed">
                {showBio
                  ? bioParagraphs[0]
                  : "\"At TARA, we address oral health as an integral component of systemic health.\""
                }
              </blockquote>
              <div className="space-y-3 text-[#d2ceab]/80 text-sm leading-relaxed">
                {showBio &&
                  bioParagraphs.slice(1).map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
              </div>
              <button
                onClick={() => setShowBio(!showBio)}
                className="inline-flex text-[#bd9e7d] text-xs uppercase tracking-[0.2em] font-semibold hover:text-[#d2ceab] transition-colors"
              >
                {showBio ? "Show Less" : "Read More"}
              </button>
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
