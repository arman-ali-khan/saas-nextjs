import { Features } from "../components/Sections/Features"
import HeroSection from "../components/Sections/Hero"
import { Pricing } from "../components/Sections/Pricing"
import { Themes } from "../components/Sections/Themes"
import { WhyChooseUs } from "../components/Sections/WhyChooseUs"
import { CustomerFeedback } from "../components/Sections/CustomerFeedback"
import { FAQ } from "../components/Sections/FAQ"
import { Newsletter } from "../components/Sections/Newsletter"
import { Footer } from "../components/Sections/Footer"

export default function Home() {
  return (
    <main>
      <div className="mx-auto max-w-7xl">
        <HeroSection />
        <WhyChooseUs />
        <Features />
        <Themes />
        <Pricing />
        <CustomerFeedback />
        <FAQ />
        <Newsletter />
      </div>
      <Footer />
    </main>
  )
} 