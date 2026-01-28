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
          <div className="text-center mb-12">
            
      <h2 className="mb-6 max-w-4xl mx-auto leading-tight tracking-tight">
        Escolha o modelo que mais combina <strong className="text-neongreen">com seu negócio</strong>
      </h2>
      <div className="h-1 w-24 bg-neongreen mx-auto mb-6 rounded" />
      <p className="text-2xl text-primary max-w-3xl mx-auto">
          Temos modelos para todos os tipos de negócio, <br/>mas se você preferir, também <strong className="text-neongreen font-oswald uppercase">criamos seu site do zero</strong>.
        </p>
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
