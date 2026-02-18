"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Services", href: "/services" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact Us", href: "/contact" },
  { label: "Gallery", href: "/gallery" },
]

const serviceLinks = [
  { label: "Preventive & General Dentistry", href: "/services" },
  { label: "Family Dentistry", href: "/services" },
  { label: "Smile Makeover", href: "/services" },
  { label: "Dental Implants", href: "/services" },
  { label: "Cosmetic Restorations", href: "/services" },
  { label: "Orthodontics & Braces", href: "/services" },
]

export default function Footer() {
  return (
    <footer className="relative text-[#fffdf5] font-sans overflow-hidden">
      <Image
        src="/images/banner-website(1).png"
        alt="Footer background"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[#505b3f]/85" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* Column 1: Brand & Info */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <Image src="/logo.png" alt="TARA Logo" width={200} height={200} className="w-[200px] h-[200px] object-contain" />
            </Link>

            <p className="text-[#fffdf5]/80 text-sm leading-relaxed max-w-xs">
              At Shree Tara Dental Care, we believe that a beautiful, healthy smile begins with trust, comfort, and quality care.
            </p>

            <div className="space-y-4 pt-2">
              <div>
                <h4 className="font-bold text-sm mb-1 text-[#fffdf5]">Clinic Timings:</h4>
                <p className="text-[#fffdf5]/70 text-sm">Mon - Sat: 10:00 AM – 9:30 PM</p>
                <p className="text-[#fffdf5]/70 text-sm">Sunday: 10:00 AM – 12:00 PM</p>
              </div>

              <div>
                <h4 className="font-bold text-sm mb-1 text-[#fffdf5]">Email:</h4>
                <a href="mailto:care@taradentalwellness.com" className="text-[#fffdf5]/70 text-sm hover:text-[#fffdf5] transition-colors">
                  care@taradentalwellness.com
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-serif text-xl font-medium mb-6 text-[#fffdf5]">Quick Links</h3>
            <ul className="space-y-1">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-[#fffdf5] text-sm py-3 px-4 rounded-lg transition-all duration-300 hover:bg-[#fffdf5]/10 hover:text-[#d2ceab] hover:shadow-lg hover:scale-105"
                  >
                    <ArrowRight className="w-4 h-4 text-[#bd9e7d] group-hover:text-[#d2ceab] transition-colors" />
                    <span className="font-medium">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="font-serif text-xl font-medium mb-6 text-[#fffdf5]">Our Services</h3>
            <ul className="space-y-1">
              {serviceLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-[#fffdf5] text-sm py-3 px-4 rounded-lg transition-all duration-300 hover:bg-[#fffdf5]/10 hover:text-[#d2ceab] hover:shadow-lg hover:scale-105"
                  >
                    <ArrowRight className="w-4 h-4 text-[#bd9e7d] group-hover:text-[#d2ceab] transition-colors" />
                    <span className="font-medium">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Map */}
          <div className="h-full min-h-[300px] relative rounded-xl overflow-hidden shadow-md border border-[#d2ceab]/30">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.026636750866!2d77.56278677598858!3d12.906013616314856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae156311107567%3A0x1f5c64c4c4712066!2sKonanakunte%20Cross!5e0!3m2!1sen!2sin!4v1709123456789!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute top-2 left-2 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded text-[10px] font-semibold shadow-sm pointer-events-none text-gray-800">
              View larger map
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 bg-[#505b3f]/50 border-t border-[#fffdf5]/10">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#fffdf5]/70">
          <p>Copyright © 2026 – All Rights Reserved | taradentalwellness.com</p>
          <p>Designed & Developed By Sripadastudios.com</p>
        </div>
      </div>
    </footer>
  )
}
