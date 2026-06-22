import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Gallery from "@/components/Gallery";
import Equipment from "@/components/Equipment";
import CTABanner from "@/components/CTABanner";
import Testimonials from "@/components/Testimonials";
import ServiceArea from "@/components/ServiceArea";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#0a0a0a]">
      <Navbar />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Gallery />
      <Equipment />
      <CTABanner />
      <Testimonials />
      <ServiceArea />
      <ContactSection />
      <Footer />
    </main>
  );
}
