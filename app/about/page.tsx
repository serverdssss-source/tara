"use client"

import About from "@/components/about"
import Philosophy from "@/components/philosophy"
import WhyChooseUs from "@/components/home-why-choose-us"
import StatsBanner from "@/components/stats-banner"
import AboutCTA from "@/components/about-cta"
import PageBanner from "@/components/page-banner"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function AboutPage() {
    return (
        <main>
            <Navbar />
            <div className="pt-20">
                <PageBanner title="About Us" />
                <About />
                <StatsBanner />
                <Philosophy />
                <WhyChooseUs />
                <AboutCTA />
            </div>
            <Footer />
        </main>
    )
}
