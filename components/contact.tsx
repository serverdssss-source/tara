"use client"

import { Clock, Mail, MapPin, Phone } from "lucide-react"

export default function Contact({ hideHeader = false }: { hideHeader?: boolean }) {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-[#d2ceab]/30">
      <div className="mx-auto max-w-7xl px-6">
        {!hideHeader && (
          <div className="text-center mb-16">
            <p className="text-[#bd9e7d] text-sm tracking-[0.3em] uppercase mb-4">
              Contact Us
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground text-balance">
              Book an Appointment
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              The perfect solution for your desired smile. Fill out the form and
              our team will get back to you shortly.
            </p>
          </div>
        )}

        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            <form className="bg-card border border-border rounded-3xl p-8 sm:p-10">
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your full name"
                    className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#505b3f] transition-shadow"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="Your phone number"
                    className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#505b3f] transition-shadow"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Your email address"
                    className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#505b3f] transition-shadow"
                  />
                </div>
                <div>
                  <label
                    htmlFor="date"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-[#505b3f] transition-shadow"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="queries"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="queries"
                  rows={4}
                  placeholder="Tell us about your dental concerns..."
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#505b3f] transition-shadow resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#505b3f] text-[#d2ceab] py-3.5 rounded-full text-sm font-bold tracking-wide hover:opacity-90 transition-opacity uppercase"
              >
                Book Appointment
              </button>
            </form>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="bg-[#505b3f] rounded-3xl p-8 text-[#d2ceab]">
              <h3 className="font-serif text-xl mb-6">Clinic Information</h3>

              <div className="flex gap-4 mb-6">
                <MapPin className="w-5 h-5 text-[#bd9e7d] shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-sm">Location</p>
                  <p className="text-[#d2ceab]/70 text-sm mt-1">
                    Vasanthapura Main Road, Konanakunte,
                    <br />
                    near DVG Hospital, South Bengaluru
                  </p>
                </div>
              </div>

              <div className="flex gap-4 mb-6">
                <Phone className="w-5 h-5 text-[#bd9e7d] shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-sm">Phone</p>
                  <p className="text-[#d2ceab]/70 text-sm mt-1">
                    +91 9972896868
                  </p>
                </div>
              </div>

              <div className="flex gap-4 mb-6">
                <Mail className="w-5 h-5 text-[#bd9e7d] shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-sm">Email</p>
                  <p className="text-[#d2ceab]/70 text-sm mt-1">
                    care@taradentalwellness.com
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock className="w-5 h-5 text-[#bd9e7d] shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-sm">Opening Hours</p>
                  <div className="text-[#d2ceab]/70 text-sm mt-1 space-y-1">
                    <p>Mon - Sat: 10:00 AM - 9:30 PM</p>
                    <p>Sunday: 10:00 AM - 12:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#bd9e7d] rounded-3xl p-8 text-[#505b3f]">
              <h3 className="font-serif text-xl mb-2">Emergency?</h3>
              <p className="text-[#505b3f]/70 text-sm leading-relaxed mb-4">
                We handle dental emergencies including severe toothaches, broken
                teeth, and other urgent dental issues.
              </p>
              <a
                href="tel:+919972896868"
                className="inline-flex items-center gap-2 bg-[#505b3f] text-[#d2ceab] px-6 py-2.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}