"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronRight, User } from "lucide-react"

const team = [
  {
    name: "Dr. M. S. Srinivas Gowda",
    role: "Chief Dental Surgeon",
    designation: "Founder – TARA Dental Aesthetics & Wellness",
    bio: "Dr. M S Srinivas Gowda is a Dental Surgeon in Konanakunte, Bangalore and has an experience of 23 years in this field. Dr. M S Srinivas Gowda practices at Shree Tara Dental Care in Konanakunte, Bangalore. He completed BDS from Dayananda Sagar  Bangalore in 2000. Some of the services provided by the doctor are: Artificial Teeth, Dental Care, Tooth Extraction, Dental Implant Surgery and Complete/Partial Dentures Fixing etc.",
  },
  {
    name: "Dr. Gautam Shetty",
    role: "Consultant Maxillofacial Prosthodontist & Implantologist",
    bio: "Dr. Gautam Shetty is a Consultant Maxillofacial Prosthodontist & Implantologist with 25 years of experience. Dr. Shetty specialises in prosthetic rehabilitation of teeth and dental implants, helping patients restore both function and aesthetics.",
  },
  {
    name: "Dr. Manjunath G. S.",
    role: "Consultant Oral & Maxillofacial Surgeon",
    bio: "Dr. Manjunath G S is a Consultant Oral and Maxillofacial Surgeon with 23 years of experience. His expertise encompasses oral and maxillofacial surgery, dental implant surgery, and cosmetic/aesthetic dental treatments.",
  },
  {
    name: "Dr. Prashanthi",
    role: "Consultant Oral & Maxillofacial Surgeon",
    bio: "Dr. Prashanthi is a Consultant Oral and Maxillofacial Surgeon with 12 years of experience. She has advanced training and specialises in oral and maxillofacial trauma, temporomandibular joint (TMJ) surgeries, impacted teeth management, and dental implant procedures.",
  },
  {
    name: "Dr. Shashikala V. Kumari",
    role: "Consultant Orthodontist & Dentofacial Orthopaedics Specialist",
    bio: "Dr. Shashikala Kumari V is a Consultant Specialist in Dental Surgery in Orthodontics with 36 years of experience in Orthodontics and Dentofacial Orthopaedics. She specialises in treating malocclusion (improper bite) using braces and other orthodontic appliances to improve function and aesthetics.",
  },
  {
    name: "Dr. Vani Hegde",
    role: "Consultant Endodontist & Conservative Dentist",
    bio: "Dr. Vani Hegde is a Consultant Endodontist & Conservative Dentist with 34 years of experience. She specialises in single-day Root canal treatments, Endosurgery and Cosmetic/aesthetic restorations preserving natural teeth while enhancing smiles.",
  },
  {
    name: "Dr. Manoranjan S. J.",
    role: "Consultant Periodontist",
    bio: "Dr. Manoranjan SJ is a Consultant Periodontist with 26 years of experience. He specialises in Surgical and non-surgical periodontal therapy, dental implants-related procedures like bone grafting, ensuring healthy gums and long-lasting implant success.",
  },
  {
    name: "Dr. Vignesh V",
    role: "Resident - Associate Dentist | Aesthetic & Digital Dentistry",
    bio: "Specializing in aesthetic and cosmetic dentistry, Dr. Vignesh V combines advanced digital technology with precision care to create natural, confident smiles",
  },
  {
    name: "Dr. Dinesh Bhadrashetty",
    role: "Consultant Oral & Maxillofacial Surgeon | Specialist in Oral Implants",
    bio: "With over 33 years of clinical experience, Dr. Dinesh Bhadrashetty is a leading Oral & Maxillofacial Surgeon renowned for his expertise in advanced surgical care and oral implantology. Dr. Bhadrashetty combines precision, modern technology, and a patient-focused approach to deliver safe, effective solutions tailored for both functional and aesthetic outcomes. His deep experience in oral implants makes him a trusted expert in restoring missing teeth with long-lasting, natural-looking results.",
  },
]

// Separate team members
const founder = team.find(m => m.name === "Dr. M. S. Srinivas Gowda");
const residents = team.filter(m => m.role.includes("Resident"));
const consultants = team.filter(m => m.name !== "Dr. M. S. Srinivas Gowda" && !m.role.includes("Resident"));

export default function Team({ hideHeader = false }: { hideHeader?: boolean }) {
  const [selectedMember, setSelectedMember] = useState<typeof team[0] | null>(null)

  const MemberCard = ({ member }: { member: typeof team[0] }) => (
    <div
      onClick={() => setSelectedMember(member)}
      className="bg-white rounded-2xl p-6 shadow-sm border border-[#505b3f]/10 hover:shadow-lg hover:border-[#bd9d7d]/30 transition-all duration-300 flex flex-col group h-full cursor-pointer"
    >
      <div className="w-20 h-20 rounded-full bg-[#8b9974]/10 mb-6 flex items-center justify-center shrink-0 group-hover:bg-[#8b9974]/20 transition-colors mx-auto overflow-hidden">
        {/* Placeholder for real image implementation later. Currently using initials. */}
        {/* If member has image property (future), use Image component here */}
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
          {member.role.split(" | ")[0]}
        </p>
        {member.designation && (
          <p className="text-[#505b3f]/60 text-xs mt-1 italic">
            {member.designation}
          </p>
        )}
      </div>

      <button
        className="w-full mt-auto py-3 rounded-lg border border-[#505b3f]/20 text-[#505b3f] text-sm font-medium flex items-center justify-center gap-2 group-hover:bg-[#505b3f] group-hover:text-white transition-all duration-300"
      >
        Read More
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );

  return (
    <section id="team" className="py-24 lg:py-32 bg-[#F9F7F2]">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header & Founder Section */}
        {!hideHeader && (
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 items-start mb-24">
            {/* Left: Text */}
            <div className="lg:w-5/12 pt-8">
              <p className="text-[#bd9d7d] text-sm tracking-[0.2em] uppercase mb-6 font-bold">
                Meet The Team
              </p>
              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#505b3f] leading-[1.1] text-balance mb-8">
                Helping you smile <br /> with confidence.
              </h2>
            </div>

            {/* Right: Founder Card */}
            {founder && (
              <div className="lg:w-6/12 w-full ml-auto">
                <div
                  onClick={() => setSelectedMember(founder)}
                  className="relative rounded-[2rem] overflow-hidden cursor-pointer group h-[500px] w-full shadow-2xl"
                >
                  {/* Founder Image Placeholder - Replace with actual image */}
                  <div className="absolute inset-0 bg-[#dcdec9] flex items-center justify-center">
                    <span className="font-serif text-[10rem] text-[#505b3f]/20 font-bold leading-none select-none">SG</span>
                  </div>
                  {/* Image component would go here */}
                  {/* <Image src="/path/to/founder.jpg" fill className="object-cover" /> */}

                  {/* Dark Overlay Box */}
                  <div className="absolute bottom-0 left-0 right-0 bg-[#505b3f] p-8 md:p-10 m-4 rounded-[1.5rem] backdrop-blur-sm bg-opacity-95 text-[#fffdf5]">
                    <h3 className="font-serif text-2xl md:text-3xl mb-1">{founder.name}</h3>
                    <p className="text-[#bd9d7d] text-sm font-bold uppercase tracking-wider mb-4">
                      {founder.role.split(" | ")[0]} | Founder
                    </p>
                    <p className="text-[#fffdf5]/80 text-sm md:text-base italic leading-relaxed">
                      "At TARA, we address oral health as an integral component of systemic health."
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        <div className="space-y-20">
          {/* Residents Section */}
          {residents.length > 0 && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {residents.map(member => <MemberCard key={member.name} member={member} />)}
            </div>
          )}

          {/* Consultants Section */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {consultants.map(member => <MemberCard key={member.name} member={member} />)}
          </div>
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