"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronRight, User } from "lucide-react"

const team = [
  {
    name: "Dr. M. S. Srinivas Gowda",
    role: "Chief Dental Surgeon",
    designation: "Founder – TARA Dental Aesthetics & Wellness",
    bio: "Dr. Srinivas Gowda is a visionary in dental aesthetics, dedicated to transforming smiles with precision and artistry. With decades of clinical excellence, he founded TARA to provide holistic and advanced dental care.",
  },
  {
    name: "Dr. Gautam Shetty",
    role: "Consultant Maxillofacial Prosthodontist & Implantologist",
    bio: "Specializing in the restoration and replacement of teeth, Dr. Gautam Shetty brings expertise in complex implant procedures and maxillofacial prosthetics.",
  },
  {
    name: "Dr. Manjunath G. S.",
    role: "Consultant Oral & Maxillofacial Surgeon",
    bio: "Dr. Manjunath is an expert in treating diseases, injuries, and defects in the head, neck, face, jaws, and the hard and soft tissues of the oral and maxillofacial region.",
  },
  {
    name: "Dr. Prashanthi",
    role: "Consultant Oral & Maxillofacial Surgeon",
    bio: "Dr. Prashanthi specializes in surgical interventions for facial and oral conditions, ensuring patient comfort and optimal recovery outcomes.",
  },
  {
    name: "Dr. Shashikala V",
    role: "Consultant Orthodontist & Dentofacial Orthopaedics Specialist",
    bio: "Dedicated to correcting misaligned teeth and jaws, Dr. Shashikala approaches orthodontics with a focus on facial balance and long-term dental health.",
  },
  {
    name: "Dr. Vani Hegde",
    role: "Consultant Endodontist & Conservative Dentist",
    bio: "Dr. Vani Hegde specializes in saving natural teeth through advanced root canal therapies and conservative dental procedures, prioritizing painless treatments.",
  },
  {
    name: "Dr. Manoranjan S. J.",
    role: "Consultant Periodontist",
    bio: "Focusing on the supporting structures of teeth, Dr. Manoranjan treats gum diseases and places dental implants, ensuring a strong foundation for your smile.",
  },
  {
    name: "Dr. Vignesh V",
    role: "Resident - Associate Dentist",
    bio: "A dedicated Associate Dentist committed to providing quality dental care and ensuring patient comfort during treatments.",
  },
  {
    name: "Dr. Dinesh Bhadrashetty",
    role: "Consultant Oral & Maxillofacial Surgeon | Specialist in Oral Implants",
    bio: "With over 33 years of clinical experience, Dr. Dinesh Bhadrashetty is a leading Oral & Maxillofacial Surgeon renowned for his expertise in advanced surgical care and oral implantology. Dr. Bhadrashetty combines precision, modern technology, and a patient-focused approach to deliver safe, effective solutions tailored for both functional and aesthetic outcomes. His deep experience in oral implants makes him a trusted expert in restoring missing teeth with long-lasting, natural-looking results.",
  },
]

export default function Team({ hideHeader = false }: { hideHeader?: boolean }) {
  const [selectedMember, setSelectedMember] = useState<typeof team[0] | null>(null)

  return (
    <section id="team" className="py-24 lg:py-32 bg-[#505b3f]">
      <div className="mx-auto max-w-7xl px-6">
        {!hideHeader && (
          <div className="text-center mb-16">
            <p className="text-[#fffdf5]/80 text-sm tracking-[0.3em] uppercase mb-4 font-bold">
              Our Experts
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#fffdf5] text-balance">
              Meet the Team
            </h2>
            <p className="mt-4 text-[#fffdf5]/80 max-w-2xl mx-auto">
              A diverse team of specialists committed to delivering world-class dental care with compassion and expertise.
            </p>
          </div>
        )}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {team.map((member) => (
            <div
              key={member.name}
              className="bg-white rounded-2xl p-6 shadow-sm border border-[#505b3f]/10 hover:shadow-lg hover:border-[#bd9d7d]/30 transition-all duration-300 flex flex-col group h-full"
            >
              <div className="w-20 h-20 rounded-full bg-[#8b9974]/10 mb-6 flex items-center justify-center shrink-0 group-hover:bg-[#8b9974]/20 transition-colors mx-auto">
                <span className="font-serif text-2xl text-[#505b3f] font-bold">
                  {member.name
                    .split(" ")
                    .filter((w) => w.startsWith("D") || w.length > 2)
                    .slice(0, 2)
                    .map((w) => w[0])
                    .join("")}
                </span>
              </div>

              <div className="text-center mb-6 flex-grow">
                <h3 className="font-serif text-lg text-[#505b3f] font-medium leading-tight mb-2">
                  {member.name}
                </h3>
                <p className="text-[#bd9d7d] text-xs uppercase tracking-wider font-bold mb-1">
                  {member.role.split(" & ")[0]}
                </p>
                {member.designation && (
                  <p className="text-[#505b3f]/60 text-xs mt-1 italic">
                    {member.designation}
                  </p>
                )}
              </div>

              <button
                onClick={() => setSelectedMember(member)}
                className="w-full mt-auto py-3 rounded-lg border border-[#505b3f]/20 text-[#505b3f] text-sm font-medium flex items-center justify-center gap-2 group-hover:bg-[#505b3f] group-hover:text-white transition-all duration-300"
              >
                Read More
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal / Popup */}
      <AnimatePresence>
        {selectedMember && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMember(null)}
              className="absolute inset-0 bg-[#3E4C38]/60 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg bg-[#fffdf5] rounded-3xl shadow-2xl overflow-hidden z-10"
            >
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-[#505b3f]/10 text-[#505b3f] hover:bg-[#505b3f] hover:text-white transition-colors z-20"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-8 sm:p-10">
                <div className="w-24 h-24 rounded-full bg-[#8b9974]/10 mb-6 flex items-center justify-center mx-auto">
                  <User className="w-10 h-10 text-[#505b3f]" />
                </div>

                <div className="text-center mb-8">
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#505b3f] mb-2">
                    {selectedMember.name}
                  </h3>
                  <p className="text-[#bd9d7d] text-sm font-bold uppercase tracking-widest mb-1">
                    {selectedMember.role}
                  </p>
                  {selectedMember.designation && (
                    <p className="text-[#505b3f]/70 text-sm mt-1">{selectedMember.designation}</p>
                  )}
                </div>

                <div className="bg-white rounded-xl p-6 border border-[#505b3f]/10">
                  <h4 className="text-[#505b3f] font-serif text-lg mb-3">About</h4>
                  <p className="text-[#505b3f]/80 leading-relaxed text-sm">
                    {selectedMember.bio}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}
