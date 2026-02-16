"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Gallery from "@/components/gallery"
import PageBanner from "@/components/page-banner"

export default function GalleryPage() {
    return (
        <main>
            <Navbar />
            <div className="pt-20">
                <PageBanner title="Gallery" />
                <Gallery />
            </div>
            <Footer />
        </main>
    )
}
