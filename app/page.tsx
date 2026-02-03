import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BrandsCarousel from "@/components/BrandsCarousel";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";
import Prevention from "@/components/Prevention";
import Footer from "@/components/Footer";
import Features from "@/components/Features";
import Services from "@/components/Services";
import Numbers from "@/components/Numbers";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="portrait:overflow-x-hidden">              
        <Hero />
        <WhyChooseUs />                 
        <Features />          
        <Prevention />
        <Services />
        <Numbers />                         
        <Testimonials />
        <FAQ />             
        <BrandsCarousel /> 
      </main>      
      <Footer />
    </div>
  );
}

