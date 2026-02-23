"use client"

import { Clock, Mail, MapPin, Phone, CheckCircle2 } from "lucide-react"
import { useState } from "react"
import { toast } from "sonner"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

export default function Contact({ hideHeader = false }: { hideHeader?: boolean }) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Basic frontend validation
    if (!formData.name || !formData.phone || !formData.email || !formData.date || !formData.message) {
      toast.error("Please fill in all required fields.")
      return
    }

    setIsSubmitting(true)
    const toastId = toast.loading("Sending appointment request...")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (res.ok) {
        toast.success("Appointment request sent successfully!", {
          id: toastId,
        })
        // Clear form after successful submission
        setFormData({ name: "", phone: "", email: "", date: "", message: "" })
        // Show success modal
        setShowSuccessModal(true)
      } else {
        toast.error(data.error || "Failed to send request. Please try again.", {
          id: toastId,
        })
      }
    } catch (error) {
      console.error("Submission error:", error)
      toast.error("An unexpected error occurred. Please try again later.", {
        id: toastId,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
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
              <form onSubmit={handleSubmit} className="bg-card border border-border rounded-3xl p-8 sm:p-10">
                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#505b3f] transition-shadow"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your phone number"
                      className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#505b3f] transition-shadow"
                      required
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email address"
                      className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#505b3f] transition-shadow"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="date"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Preferred Date <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      id="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-[#505b3f] transition-shadow"
                      required
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your dental concerns..."
                    className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#505b3f] transition-shadow resize-none"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#505b3f] text-[#d2ceab] py-3.5 rounded-full text-sm font-bold tracking-wide hover:opacity-90 transition-opacity uppercase disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-4 w-4 text-[#d2ceab]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    "Book Appointment"
                  )}
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

      <Dialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
        <DialogContent className="sm:max-w-md text-center">
          <DialogHeader>
            <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <CheckCircle2 className="w-6 h-6 text-green-600" />
            </div>
            <DialogTitle className="text-2xl font-serif text-center mb-2">Request Received!</DialogTitle>
            <DialogDescription className="text-center text-base">
              Thank you for contacting TARA Dental Aesthetics & Wellness. Your appointment request has been successfully sent to our front desk.
              <br /><br />
              We will review your details and be in touch shortly to confirm your booking!
            </DialogDescription>
          </DialogHeader>
          <div className="mt-6 flex justify-center">
            <button
              onClick={() => setShowSuccessModal(false)}
              className="bg-[#505b3f] text-[#d2ceab] px-8 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity uppercase tracking-wide"
            >
              Done
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}