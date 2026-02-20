"use client"

import Team from "@/components/team"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageBanner from "@/components/page-banner"

export default function TeamPage() {
    return (
        <main>
            <Navbar />
            <div className="pt-20">
                <PageBanner title="Our Team" />
                <Team />
            </div>
            <Footer />
        </main>
    )
}
