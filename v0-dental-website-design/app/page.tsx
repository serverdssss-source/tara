import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Philosophy from "@/components/philosophy"
import Process from "@/components/process"
import About from "@/components/about"
import Services from "@/components/services"
import StatsBanner from "@/components/stats-banner"
import WhyChooseUs from "@/components/why-choose-us"
import Team from "@/components/team"
import Testimonials from "@/components/testimonials"
import FAQ from "@/components/faq"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Philosophy />
      <Process />
      <About />
      <Services />
      <StatsBanner />
      <WhyChooseUs />
      <Team />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}
