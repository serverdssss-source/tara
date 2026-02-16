"use client"

import TestimonialsGrid from "@/components/testimonials-grid"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageBanner from "@/components/page-banner"

export default function TestimonialsPage() {
    return (
        <main>
            <Navbar />
            <div className="pt-20">
                <PageBanner title="Testimonials" />
                <TestimonialsGrid />
            </div>
            <Footer />
        </main>
    )
}
