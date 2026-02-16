"use client"

import Contact from "@/components/contact"
import FAQ from "@/components/faq"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageBanner from "@/components/page-banner"

export default function ContactPage() {
    return (
        <main>
            <Navbar />
            <div className="pt-20">
                <PageBanner title="Contact Us" />
                <Contact hideHeader />
                <FAQ />
            </div>
            <Footer />
        </main>
    )
}
