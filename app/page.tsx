import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BrandsCarousel from "@/components/BrandsCarousel";
/*import About from "@/components/About";*/
import Services from "@/components/Services";
import Business from "@/components/Business";
import ExpertTip from "@/components/ExpertTip";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";
import Prevention from "@/components/Prevention";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Map from "@/components/Map";
import Features from "@/components/Features";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>              
        <Services />
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

