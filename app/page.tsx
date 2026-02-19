import Navbar from "@/components/navbar"
import HomeHero from "@/components/home-hero"
import HomePhilosophy from "@/components/home-philosophy"
import HomeProcess from "@/components/home-process"
import HomeAbout from "@/components/home-about"
import HomeServices from "@/components/home-services"
import HomeStatsBanner from "@/components/home-stats-banner"
import HomeWhyChooseUs from "@/components/home-why-choose-us"
import Team from "@/components/team"
import HomeTestimonials from "@/components/home-testimonials"
import FAQ from "@/components/faq"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Page() {
    return (
        <main>
            <Navbar />
            <HomeHero />
            <HomePhilosophy />
            <HomeProcess />
            <HomeAbout />
            <HomeServices />
            <HomeStatsBanner />
            <HomeWhyChooseUs />
            <Team />
            <HomeTestimonials />
            <FAQ />
            <Contact />
            <Footer />
        </main>
    )
}