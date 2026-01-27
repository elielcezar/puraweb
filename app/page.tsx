import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BrandsCarousel from "@/components/BrandsCarousel";
import Business from "@/components/Business";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";
import Prevention from "@/components/Prevention";
import Footer from "@/components/Footer";
import Features from "@/components/Features";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>              
        <Hero />
        <WhyChooseUs />        
        <Prevention />
        <Features />
        <BrandsCarousel />
        <Business />        
        <Testimonials />              
      </main>      
      <Footer />
    </div>
  );
}

