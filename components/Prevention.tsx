'use client';
import { ShieldCheck, TrendingUp, DollarSign, Database, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Prevention = () => {
 

  return (
    <section className="pt-28 bg-background">
      <div className="container mx-auto px-4">


        {/* Preventive Maintenance */}
        <div className="relative">
          
          <div className="text-center mb-10">            
            <h3 className="mx-auto leading-tight font-pacifico text-neongreen text-[2.5rem] mb-[-20px]">
              Escolha o estilo que mais combina com
            </h3>
            <h2 className="mb-6 mx-auto font-oswald text-[96px] leading-tight" style={{ textShadow: '5px 5px 5px rgba(0, 0, 0, 0.15)', letterSpacing: '-3px' }}>
              a sua empresa
            </h2>
            <div className="h-1 w-24 bg-neongreen mx-auto mb-6 rounded" />
            <p className="text-2xl text-deepgray max-w-3xl mx-auto">
                Temos modelos para todos os tipos de negócio, <br/>mas se você preferir, também <strong className="font-oswald uppercase">criamos seu site do zero</strong>.
              </p>
          </div>    

           {/* CTA WhatsApp */}
            <div className="flex justify-center gap-8 w-full max-w-[700px] mx-auto">
              <a  href="#" target="_blank" rel="noopener noreferrer" className="bg-transparent text-deepgray border-2 border-deepgray py-4 px-8 btn-wpp hover:bg-deepgray hover:text-white hover:border-deepgray transition-all duration-300 [box-shadow:0px_5px_5px_rgb(0_0_0_/_15%)]">
                <i className="fa-regular fa-pen-to-square text-2xl"></i>
                <span>Ver todos os modelos</span>
              </a>

              <a  href="https://wa.me/5541999631609" target="_blank" rel="noopener noreferrer" className="bg-transparent text-neongreen border-2 border-neongreen py-4 px-8 btn-wpp hover:bg-neongreen hover:text-white hover:border-neongreen shadow-sm transition-all duration-300 [box-shadow:0px_5px_5px_rgb(0_0_0_/_15%)]">
                <i className="fab fa-whatsapp text-2xl"></i>
                <span>Solicite uma simulação GRÁTIS!</span>
              </a>
            </div>      
        
            <motion.div 
              className="overflow-hidden mt-28"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >            
              <img 
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/portfolios.webp`}
                alt="Business"  
              />
            </motion.div>

            <img src="/splash.png" alt="Features" className="w-full mx-auto absolute bottom-[-94px] left-[auto] right-[52px] max-w-[220px]" />
        </div>
      </div>
    </section>
  );
};

export default Prevention;
