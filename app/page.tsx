import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BrandsCarousel from "@/components/BrandsCarousel";
import Business from "@/components/Business";
import Testimonials from "@/components/Testimonials";
import Testimonials2 from "@/components/Testimonials2";

import WhyChooseUs from "@/components/WhyChooseUs";
import Prevention from "@/components/Prevention";
import Footer from "@/components/Footer";
import Features from "@/components/Features";
import Features2 from "@/components/Features2";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Included from "@/components/Included";
import Numbers from "@/components/Numbers";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>              
        <Hero />
        <WhyChooseUs />         
        <Included />
        <Features />          
        <Prevention />
        <Services />
        <Numbers />                  
        <BrandsCarousel /> 
        <Testimonials />                   
        
      </main>      
      <Footer />
    </div>
  );
}

