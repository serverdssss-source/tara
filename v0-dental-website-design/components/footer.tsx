import Link from "next/link"

const quickLinks = [
  { label: "Home", href: "#" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Team", href: "#team" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact Us", href: "#contact" },
]

const serviceLinks = [
  "Preventive & General Dentistry",
  "Family Dentistry",
  "Smile Makeover",
  "Dental Implants",
  "Cosmetic Restorations",
  "Orthodontics & Braces",
]

export default function Footer() {
  return (
    <footer className="bg-[#505b3f] text-[#d2ceab]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <span className="font-serif text-2xl font-bold tracking-tight block mb-4">
              TARA
            </span>
            <p className="text-[#d2ceab]/60 text-sm leading-relaxed mb-6">
              At TARA Dental Aesthetics & Wellness, we believe that a beautiful, healthy
              smile begins with trust, comfort, and quality care.
            </p>
            <div className="text-[#d2ceab]/60 text-sm space-y-1">
              <p>Morning: 10:00 AM - 2:00 PM</p>
              <p>Evening: 4:00 PM - 8:30 PM</p>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-base mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[#d2ceab]/60 text-sm hover:text-[#bd9e7d] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-base mb-4">Our Services</h4>
            <ul className="space-y-2">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <Link
                    href="#services"
                    className="text-[#d2ceab]/60 text-sm hover:text-[#bd9e7d] transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-base mb-4">Contact</h4>
            <div className="text-[#d2ceab]/60 text-sm space-y-3">
              <p>
                Vasanthapura Main Road, Konanakunte,
                <br />
                near DVG Hospital, South Bengaluru
              </p>
              <p>care@taradentalwellness.com</p>
              <p>+91 98765 43210</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[#d2ceab]/10">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[#d2ceab]/40 text-xs">
            {"Copyright \u00A9 2026 \u2014 All Rights Reserved | taradentalwellness.com"}
          </p>
          <p className="text-[#d2ceab]/40 text-xs">
            Designed & Developed By Sripadastudios.com
          </p>
        </div>
      </div>
    </footer>
  )
}
