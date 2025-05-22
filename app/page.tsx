import HeroSection from "@/components/hero-section"
import AboutUsSection from "@/components/about-us-section"
import ServicesGrid from "@/components/services-grid"
import ProcessSteps from "@/components/process-steps"
import SafeGallery from "@/components/safe-gallery"
import Testimonials from "@/components/testimonials"
import FAQSection from "@/components/faq-section"
import ContactForm from "@/components/contact-form"

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutUsSection />
      <ServicesGrid />
      <ProcessSteps />
      <SafeGallery />
      <Testimonials />
      <FAQSection />
      <ContactForm />
    </>
  )
}
