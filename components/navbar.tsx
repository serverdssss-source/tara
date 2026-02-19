"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone, ChevronDown } from "lucide-react"
import { services } from "@/lib/services-data"
import { motion, AnimatePresence } from "framer-motion"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  // Services handled separately
  { label: "Gallery", href: "/gallery" },
  { label: "Team", href: "/team" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#505b3f]/95 backdrop-blur-md border-b border-[#fffdf5]/10 font-sans">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-0">
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="TARA Logo" width={200} height={200} className="h-[100px] w-auto object-contain" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link
            href="/"
            className="text-sm font-medium text-[#fffdf5] hover:text-[#d2ceab] transition-colors"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-[#fffdf5] hover:text-[#d2ceab] transition-colors"
          >
            About
          </Link>

          {/* Services Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <Link
              href="/services"
              className="flex items-center gap-1 text-sm font-medium text-[#fffdf5] group-hover:text-[#d2ceab] transition-colors py-2"
            >
              Services
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`} />
            </Link>

            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full -left-4 w-72 bg-white rounded-xl shadow-xl border border-[#505b3f]/10 overflow-hidden py-2"
                >
                  <div className="max-h-[70vh] overflow-y-auto custom-scrollbar">
                    {services.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        className="block px-6 py-3 text-sm text-[#505b3f] hover:bg-[#fffdf5] hover:text-[#8b9974] transition-colors border-b border-dashed border-[#505b3f]/10 last:border-0"
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {navLinks.slice(2).map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-[#fffdf5] hover:text-[#d2ceab] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+919972896868"
            className="flex items-center gap-2 text-sm text-[#fffdf5]/80 hover:text-[#fffdf5] transition-colors"
          >
            <Phone className="h-4 w-4" />
            +91 9972896868
          </a>
          <Link
            href="/contact"
            className="bg-[#bd9e7d] text-[#505b3f] px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#d2ceab] transition-colors shadow-sm hover:shadow-md"
          >
            Book Appointment
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-[#fffdf5]"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#505b3f] border-t border-[#fffdf5]/10 h-screen overflow-y-auto pb-20">
          <nav className="flex flex-col px-6 py-4 gap-4">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="text-base font-medium text-[#fffdf5] py-2 border-b border-[#fffdf5]/10"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="text-base font-medium text-[#fffdf5] py-2 border-b border-[#fffdf5]/10"
            >
              About
            </Link>

            {/* Mobile Services Accordion */}
            <div className="py-2 border-b border-[#fffdf5]/10">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center justify-between w-full text-base font-medium text-[#fffdf5]"
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
              </button>

              {servicesOpen && (
                <div className="mt-2 pl-4 flex flex-col gap-2 border-l-2 border-[#fffdf5]/10 ml-1">
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      onClick={() => setIsOpen(false)}
                      className="text-sm text-[#fffdf5]/80 py-1"
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navLinks.slice(2).map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-base font-medium text-[#fffdf5] py-2 border-b border-[#fffdf5]/10"
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="bg-[#bd9e7d] text-[#505b3f] px-5 py-3 rounded-full text-sm font-medium text-center mt-4"
            >
              Book Appointment
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}