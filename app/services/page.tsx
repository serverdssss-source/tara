"use client"

import Services from "@/components/services"
import Process from "@/components/process"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageBanner from "@/components/page-banner"

export default function ServicesPage() {
    return (
        <main>
            <Navbar />
            <div className="pt-20">
                <PageBanner title="Our Services" />
                <Services />
                <Process />
            </div>
            <Footer />
        </main>
    )
}
